const express = require('express');
const nurseController = require('../controllers/nurse.controller');

const patientRouter = express.Router();

patientRouter
  .get('/', (req, res) => {
  nurseController.getPatients(req, res);
});

module.exports = patientRouter;