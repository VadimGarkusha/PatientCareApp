const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const connectDb = require('./dbConnection');
const indexRouter = require('./routes/index.routes');

const app = express();
const port = 8080;

connectDb();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', indexRouter);

app.get('/', (req, res) => {
  res.send('Hospital API');
});

app.all('*', (req, res) => {
  res.status(404).send({ msg: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Running on port ${port}`.green);
});

module.exports = app;
