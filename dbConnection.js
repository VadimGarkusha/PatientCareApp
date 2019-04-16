const mongoose = require('mongoose');
const Nurse = require('./models/nurse.model');
const Patient = require('./models/patient.model');

module.exports = () => {
  mongoose.connect('mongodb://localhost/hospitalApp', (err) => {
    if (err) throw err;
    console.log('Database created!'.green);
  });

  (() => {
    const nurse = {
      name: 'Jane Smith', 
      email: 'jane@t.com',
      password: 'password'
    };

    Nurse.find(nurse, (err, nurses) => {
      if(err)
        console.log(err + ''.red)

      if(nurses.length === 0){
        Nurse.create(nurse, (err, nurses) => {
          if(err)
            console.log(err + ''.red);
          else 
            console.log('Test Nurse was created'.yellow);
        });
      }
      else 
        console.log('Test nurse already exists'.yellow);
    });

    const patient = {
      name: 'John Smith',
      email: 'jsmith@gmail.com',
      password: 'password',
      clinicalVisits: [{
        bodyTemperature: 123,
        heartRate: 88,
        bloodPressure: 99
      }],
      dailyInfo: [{
        title: 'Test Info',
        body: 'Lorem Ipsum text'
      }]
    };

    Patient.find({name: patient.name}, (err, patients) => {
      if(err)
        console.log(err + ''.red)

      if(patients.length === 0){
        Patient.create(patient, (err, patients) => {
          if(err)
            console.log(err + ''.red);
          else 
            console.log('Test Patient was created'.yellow);
        });
      }
      else 
        console.log('Test Patient already exists'.yellow);
    });

  })();
};
