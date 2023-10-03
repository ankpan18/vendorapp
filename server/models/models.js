// Models.js
const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  accno: {
    type: Number,
    required: true,
    unique:true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const Vendor = mongoose.model('banking', VendorSchema);

module.exports = Vendor;