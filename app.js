const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const customerRouter = require('./routes/customerRoutes');
const addressRouter = require('./routes/addressRoutes');

const app = express();

// Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(express.json());

app.use('/api/v1/customers', customerRouter);
app.use('/api/v1/addresses', addressRouter);

// Basic error handling
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

module.exports = app;
