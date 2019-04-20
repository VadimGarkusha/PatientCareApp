const Patient = require('../models/patient.model');
const Nurse = require('../models/nurse.model');
const Tip = require('../models/tip.model');
const Alert = require('../models/alert.model');

exports.getPatients = (req, res) => {
  const {id} = req.query;

  Patient.find((id) ? {_id: id} : null,(err, patients) => {
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

exports.getNurseByEmail = (req, res) => {
  const {email} = req.query;

  Nurse.findOne({ email }, (err, nurse) => {
    if(err)
      return res.status(400).json(err);

    return res.status(201).json(nurse);
  }); 
}

exports.addClinicalSigns = async (req, res) => {
  const { email, bodyTemperature, heartRate, bloodPressure } = req.body;

  const patient = await Patient.findOne({email}, (err, patient) => {
    if(err)
      return res.json(err);
  });


  patient.clinicalVisits.push({
    bodyTemperature,
    heartRate,
    bloodPressure
  });

  patient.save((error, pat) => {
    if(error)
      return res.json(error);

    return res.json({success: true});
  })
}

exports.getAlerts = (req, res) => {
  Alert.find((err, alerts) => {
    if(err)
      return res.json(err);

    return res.json(alerts);
  })
}