const router = require('express').Router()
let User = require('../models/userModel')

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const name = req.body.name
    const age = Number(req.body.age)
    const position = req.body.position
    const newUser = new User({
        name,
        age,
        position
    })

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((user) => res.json(`${user.name} deleted.`))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/edit/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.name = req.body.name
            user.age = Number(req.body.age)
            user.position = req.body.position

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router