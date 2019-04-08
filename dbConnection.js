const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://localhost/hospitalApp', (err) => {
    if (err) throw err;
    console.log('Database created!'.green);
  });
};
