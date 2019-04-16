const express = require('express');
const nurseController = require('../controllers/nurse.controller');

const nurseRouter = express.Router();

nurseRouter
  .post('/create-tip', (req, res) => {
    nurseController.createTip(req, res);
  });

module.exports = nurseRouter;