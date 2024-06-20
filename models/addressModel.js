const mongoose = require('mongoose');

const { Schema } = mongoose;

const AddressSchema = new Schema({
  street: {
    type: String,
    required: [true, 'Street is required'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  state: {
    type: String,
    required: [true, 'State is required'],
  },
  zip: {
    type: String,
    required: [true, 'Zip is required'],
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
  },
});

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;
