const Alert = require('../models/alert.model');
const Tip = require('../models/tip.model');
const Patient = require('../models/patient.model');

exports.createAlert = (req, res) => {
  const { title, body, patient_id } = req.body;

  Alert.create({title, body, patient_id} ,(err, alerts) => {
    if(err)
      return res.json(err);

    return res.json({success: true});
  })
}

exports.getTips = (req, res) => {
  const { patient_id } = req.query;

  Tip.find({patient_id} ,(err, alerts) => {
    if(err)
      return res.json(err);

    return res.json(alerts);
  })
}

exports.addDailyInfo = async (req, res) => {
  const { title, body, patient_id } = req.body;
  const patient = await Patient.findById(patient_id, (err, pet) => {
    if(err)
      return res.json(err);
  });

  patient.dailyInfo.push({title, body});
  patient.save((err, pat) => {
    if(err)
      return res.json(err);

      return res.json(pat);
  });
  
}