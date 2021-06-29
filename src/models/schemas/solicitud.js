const { model, Schema } = require('mongoose');
const Student = require('./estudiante');

const Request = new Schema({

  applicant: {
    type: Student,
  },
  role: {
    type: String,
  },

});

module.exports = model('Request', Request);
