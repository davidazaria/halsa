!('NODE_ENV' in process.env) && require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//  const plansRoutes = require('./routes/plans-routes');

//  app.use('/api/plans', plansRoutes);

//  const usersRoutes = require('./routes/users-routes');

//  app.use('/api/users', usersRoutes);
//  app.use('/', console.log("Hello World"))

app.use(express.static(path.join(__dirname, 'dist')));

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error: err,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`${PORT}: A Space Odyssey`);
});
