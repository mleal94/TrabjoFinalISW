const { model, Schema } = require('mongoose');

const Request = new Schema({

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
        unique:true
    },
  role: {
    type: String,
  },

});

module.exports = model('Request', Request);
