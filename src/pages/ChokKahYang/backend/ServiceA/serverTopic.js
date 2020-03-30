const axios = require('axios')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config({ path: './config.env' })

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 4000

//Mongo DB
const uri = process.env.ATLAS_URI
mongoose.connect(uri,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
)
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})
/////////
const topicsRouter = require('./routes/topics')
app.use('/topics', topicsRouter)
////////
const server = require('http').createServer(app)
const io = require('socket.io')(server)


let topics = []

//Get all topics
const getTopicAndEmit = async socket => {
    try {
        const res = await axios.get('http://localhost:4000/topics')
        topics = res.data
        socket.emit('topics', topics)
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}


io.on("connection", socket => {
    console.log(`Service B connected ${socket.id}`)

    socket.on('disconnect', () => {
        console.log("Service B disconnected", socket.id)
    })

    getTopicAndEmit(socket)

    socket.on('topic:delete', async data => {
        try {
            const resDel = await axios.delete('http://localhost:4000/topics/' + data.deleteId)
            topics = topics.filter(topic => topic._id !== data.deleteId)

            socket.emit('topic:delete', {
                msg: {
                    text: resDel.data,
                    color: false
                },
                topics
            })
        } catch (err) {
            console.log(`Error: ${err}`)
        }
    })

    socket.on('topic:add', async data => {
        try {
            const resAdd = await axios.post('http://localhost:4000/topics/add', data.newTopic)
            const newTopics = await axios.get('http://localhost:4000/topics')
            topics = newTopics.data

            socket.emit('topic:add', {
                msg: {
                    text: resAdd.data,
                    color: true
                },
                topics
            })
        } catch (err) {
            socket.emit('topic:add', {
                msg: {
                    text: "Topic existed! Please enter another...",
                    color: false
                },
                topics
            })
        }
    })

    socket.on('topic:edit', async data => {
        try {
            const resEdit = await axios.post('http://localhost:4000/topics/edit/' + data.id, data.editTopic)
            const newTopics = await axios.get('http://localhost:4000/topics')
            topics = newTopics.data

            socket.emit('topic:edit', {
                msg: {
                    text: resEdit.data,
                    color: true
                },
                topics
            })
        } catch (err) {
            socket.emit('topic:edit', {
                msg: {
                    text: "Topic name existed! Please enter another...",
                    color: false
                },
                topics
            })
        }
    })

})



server.listen(port, () => {
    console.log(`Socket server is running on port : ${port}`)
})