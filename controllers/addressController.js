const Address = require('../models/addressModel');

// Get all addresses
exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json({
      status: 'success',
      results: addresses.length,
      data: {
        addresses,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// Get a single address by ID
exports.getAddress = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res.status(404).json({
        status: 'fail',
        message: 'No address found with that ID',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        address,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// Create a new address
exports.createAddress = async (req, res) => {
  try {
    const newAddress = await Address.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        address: newAddress,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// Update an address
exports.updateAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!address) {
      return res.status(404).json({
        status: 'fail',
        message: 'No address found with that ID',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        address,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// Delete an address
exports.deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) {
      return res.status(404).json({
        status: 'fail',
        message: 'No address found with that ID',
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
