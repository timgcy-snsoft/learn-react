const router = require('express').Router()
let Topics = require('../models/topicsModel')

router.route('/').get((req, res) => {
    Topics.find()
        .then(topic => res.json(topic))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const name = req.body.topicName
    const content = req.body.content
    const newTopic = new Topics({
        name,
        content
    })

    newTopic.save()
        .then((topic) => res.json(`${topic.name} Added.`))
        .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    Topics.findByIdAndDelete(req.params.id)
        .then((topic) => res.json(`${topic.name} Deleted.`))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/edit/:id').post((req, res) => {

    Topics.findById(req.params.id)
        .then(topic => {
            topic.name = req.body.topicName
            topic.content = req.body.content

            topic.save()
                .then((topic) => res.json(`${topic.name} Updated!`))
                .catch((err) => res.status(400).json(err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router