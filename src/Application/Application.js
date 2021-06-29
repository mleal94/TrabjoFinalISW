const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { PORT } = require('../constants');

// Server configuration
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Database connnection
require('../models/database.config');

// Router
app.use('/request', require('../routes/requestRoutes'));

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
