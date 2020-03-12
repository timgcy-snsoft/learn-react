const router = require('express').Router()
let User = require('../models/userModel')

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const name = req.body.name
    const psw = req.body.psw
    const age = Number(req.body.age)
    const position = req.body.position
    const newUser = new User({
        name,
        psw,
        age,
        position
    })
    let err = ''

    if (name.length < 2)
        err += `Name must be at least 2 characters.\n`
    if (psw.length < 6)
        err += `Password must be at least 6 characters\n`

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(() => res.status(400).json(`${err}`))
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
            user.psw = req.body.psw
            user.age = Number(req.body.age)
            user.position = req.body.position

            if (user.name.length < 2)
                err += `Name must be at least 2 characters.\n`
            if (user.psw.length < 6)
                err += `Password must be at least 6 characters\n`

            user.save()
                .then(() => res.json('User updated!'))
                .catch(() => res.status(400).json(`${err}`))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/login').post((req, res) => {
    const name = req.body.name
    const psw = req.body.psw

    User.findOne({ name, psw })
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router