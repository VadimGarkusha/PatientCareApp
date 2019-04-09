const mongoose = require('mongoose');

const { Schema } = mongoose;

const TipsModel = new Schema(
  {
    title: String,
    body: String,
    patient_id: { type: Schema.Types.ObjectId, ref: 'patients' },
    nurse_id: { type: Schema.Types.ObjectId, ref: 'nurses' }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('tip', TipsModel);
