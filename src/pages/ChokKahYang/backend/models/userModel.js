const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2
    },
    age: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User