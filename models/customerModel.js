const mongoose = require('mongoose');

const { Schema } = mongoose;

const customerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  addresses: [{ type: Schema.Types.ObjectId, ref: 'Address' }],
});

customerSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'addresses',
    select: '-__v',
  });
  next();
});
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
