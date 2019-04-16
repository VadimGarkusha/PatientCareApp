const mongoose = require('mongoose');

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
    }],
    dailyInfo: [{
      title: String,
      body: String,
      created_at: {
        type: Date,
        default: new Date()
      }
    }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('patient', PatientModel);
