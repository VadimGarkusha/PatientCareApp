const Patient = require('../models/patient.model');
const Nurse = require('../models/nurse.model');

exports.registerPatient = (req, res) => {
  const { name, email, password } = req.body;

  Patient.create({name, email, password}, (err, patient) => {
    if(err)
      return res.status(400).json(err);

    return res.status(201).json(patient);
  }); 
}

exports.loginPatient = (req, res) => {
  const { email, password } = req.body;

  Patient.find({ email, password}, (err, patient) => {
    if(err)
      return res.status(400).json(err);

    return res.status(201).json(patient);
  }); 
}