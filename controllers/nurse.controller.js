const Patient = require('../models/patient.model');
const Tip = require('../models/tip.model');

exports.getPatients = (req, res) => {
  Patient.find((err, patients) => {
    if (err)
      return res.json(err);

    return res.json(patients);
  });
}

exports.createTip = (req, res) => {
  const {title, body, patient_id, nurse_id} = req.body;

  Tip.create({title, body, patient_id, nurse_id}, (err, tip) => {
    if(err)
      return res.json(err);
     
    return res.json(tip);
  });
}

