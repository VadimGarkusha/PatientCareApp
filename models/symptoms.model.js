const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const SymptomsModel = new Schema(
  {
    name: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('alert', SymptomsModel);
