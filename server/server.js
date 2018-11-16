const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

const corsOptions = {
  origin: '*',
  credentials: true,
};

app.use(cors(corsOptions));

const routes = require('./api/routes');
routes(app);

module.exports = app;
