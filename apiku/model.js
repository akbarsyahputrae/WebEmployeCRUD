const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)