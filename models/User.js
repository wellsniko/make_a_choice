const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    }, 
        email: {
        type: String,
        required: false
    },
    answered: {
        type: Boolean,
        required: true
    },
    ethnicity: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },


    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);
