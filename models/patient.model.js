const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const PatientModel = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    clinicalVisits: [{
      bodyTemperature: Number,
      heartRate: Number,
      bloodPressure: Number
    }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('patient', PatientModel);
