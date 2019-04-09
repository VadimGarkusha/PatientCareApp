const express = require('express');
const nurseController = require('../controllers/nurse.controller');

const nurseRouter = express.Router();

nurseRouter
  .get('/patients', (req, res) => {
    nurseController.getPatients(req, res);
  });

module.exports = nurseRouter;