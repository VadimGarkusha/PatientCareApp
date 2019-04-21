const express = require('express');
const nurseController = require('../controllers/nurse.controller');
const patientController = require('../controllers/patient.controller');

const patientRouter = express.Router();

patientRouter
  .get('/', (req, res) => {
  nurseController.getPatients(req, res);
}).post('/alert', (req, res) => {
  patientController.createAlert(req, res);
}).get('/tips', (req, res) => {
  patientController.getTips(req, res);
}).post('/dailyInfo', (req, res) => {
  patientController.addDailyInfo(req, res);
}).get('/check-symptoms', (req, res) => {
  patientController.checkSymptoms(req, res);
});

module.exports = patientRouter;