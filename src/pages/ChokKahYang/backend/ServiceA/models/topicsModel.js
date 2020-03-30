const mongoose = require('mongoose')

const Schema = mongoose.Schema

const topicsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const Topics = mongoose.model('Topic', topicsSchema)

module.exports = Topics