const express = require('express');
const authController = require('../controllers/auth.controller');

const authRouter = express.Router();

authRouter
  .get('/patient-login', (req, res) => {
    authController.loginPatient(req, res);
  }).get('/nurse-login', (req, res) => {
    authController.loginNurse(req, res);
  }).post('/patient-register', (req, res) => {
    authController.registerPatient(req, res);
  });

module.exports = authRouter;