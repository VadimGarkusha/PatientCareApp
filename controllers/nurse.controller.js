const Patient = require('../models/patient.model');

exports.getPatients = (req, res) => {
  Patient.find((err, patients) => {
    if (err)
      return res.json(err);

    return res.json(patients);
  });
}
