const mongoose = require('mongoose');
const Nurse = require('./models/nurse.model');

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
  })();
};
