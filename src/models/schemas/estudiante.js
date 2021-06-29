const { Schema } = require('mongoose');

const Student = new Schema({

  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
});

module.exports = Student;
