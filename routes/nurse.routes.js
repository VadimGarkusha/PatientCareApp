const express = require('express');
const nurseController = require('../controllers/nurse.controller');

const nurseRouter = express.Router();

nurseRouter
  .post('/create-tip', (req, res) => {
    nurseController.createTip(req, res);
  }).get('/', (req, res) => {
    nurseController.getNurseByEmail(req, res);
  }).post('/clinical-signs', (req, res) => {
    nurseController.addClinicalSigns(req, res);
  }).get('/alerts', (req, res) => {
    nurseController.getAlerts(req, res);
  });

module.exports = nurseRouter;