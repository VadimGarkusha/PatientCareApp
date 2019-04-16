const express = require('express');
const authRouter = require('./auth.routes');
const nurseRouter = require('./nurse.routes');
const patientRouter = require('./patient.routes');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/nurse', nurseRouter);
router.use('/patient', patientRouter);

module.exports = router;
