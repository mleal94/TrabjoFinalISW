const mongoose = require('mongoose');
const { DB_URI, DB_PORT, DB_NAME } = require('../constants');
// Init DB
mongoose.connect(`mongodb://${DB_URI}:${DB_PORT}/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => console.log('DB connected'))
  .catch((error) => console.log(error));
