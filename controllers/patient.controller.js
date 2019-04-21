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

exports.checkSymptoms = function (req, res) {
  let { symptoms } = req.body;

  var stringSymptoms = ['Sneezing', 'Itching',
    'Sore Throat', 'Fever', 'Cough',
    'Inactivity', 'Appetite Loss', 'Chest Pain',
    'Purplish Skin', 'Panic', 'Stress', 'Sweating'];

  symptoms = symptoms.map((el, i) => (el) ? stringSymptoms[i] : el);

  var checkForAllergy = ["Sneezing", "Itching", "Sore Throat"];
  var checkForFlu = ["Fever", "Cough", "Inactivity", "Sore Throat"];
  var checkForPneumonia = ["Appetite Loss", "Chest Pain", "Purplish Skin"];
  var checkForAnxiety = ["Panic", "Stress", "Sweating"];
  var checkForInsomnia = ["Stress", "Inactivity", "Appetite Loss"];

  const possibleDiseases = [];

  const checkForDesease = (arr, diseaseName) => {
    let counter = 0;
    arr.forEach((el, i) => {
      if (symptoms.indexOf(el) > -1)
        counter++;
    });

    if (counter >= 2)
      possibleDiseases.push(diseaseName);
  }

  checkForDesease(checkForAllergy, 'Allergy');
  checkForDesease(checkForFlu, 'Flu');
  checkForDesease(checkForPneumonia, 'Pneumonia');
  checkForDesease(checkForAnxiety, 'Anxiety');
  checkForDesease(checkForInsomnia, 'Insomnia');

  console.log(possibleDiseases);
  return res.json(possibleDiseases);
}