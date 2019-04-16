const mongoose = require('mongoose');

const { Schema } = mongoose;

const AlertModel = new Schema(
  {
    title: String,
    body: String,
    patient_id: { type: Schema.Types.ObjectId, ref: 'patients' }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('alert', AlertModel);
