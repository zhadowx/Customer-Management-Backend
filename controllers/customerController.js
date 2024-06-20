const Customer = require('../models/customerModel');
const Address = require('../models/addressModel');

// Get all customers with their addresses
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().populate('addresses');
    res.status(200).json({
      status: 'success',
      results: customers.length,
      data: {
        customers,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// Get a single customer by ID
exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id).populate(
      'addresses',
    );
    if (!customer) {
      return res.status(404).json({
        status: 'fail',
        message: 'No customer found with that ID',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        customer,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        customer: newCustomer,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// Update a customer
exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!customer) {
      return res.status(404).json({
        status: 'fail',
        message: 'No customer found with that ID',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        customer,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// Delete a customer
exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).json({
        status: 'fail',
        message: 'No customer found with that ID',
      });
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// Add an address to a customer
exports.addAddressToCustomer = async (req, res) => {
  const { id } = req.params;
  const addressData = req.body;

  try {
    // Create a new address
    const newAddress = new Address(addressData);
    const savedAddress = await newAddress.save();

    // Add address to the customer
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { $push: { addresses: savedAddress._id } },
      { new: true },
    );

    // Check if the customer was found and updated
    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(201).json({
      message: 'Address added to customer',
      customer: updatedCustomer,
    });
  } catch (err) {
    res.status(500).json({ message: 'An error occurred' });
  }
};
