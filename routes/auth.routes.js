const express = require('express');
const authController = require('../controllers/auth.controller');

const adminUserRouter = express.Router();

adminUserRouter
  .post('/patient-login', (req, res) => {
    authController.loginPatient(req, res);
  }).post('/nurse-login', (req, res) => {
    authController.loginNurse(req, res);
  }).post('/patient-register', (req, res) => {
    authController.registerPatient(req, res);
  });

module.exports = adminUserRouter;