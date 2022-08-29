var userDB = require('../model/model')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: 'field cannot be empty'})
    }
    else{
        const user = new userDB({
            
            name: req.body.name,
            team: req.body.team,
            stack: req.body.stack,
            gender: req.body.gender,

        })
        user.save(user)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(error => {
            res.status(400).send({message: `${error}`})
        })
    }
}

exports.find = (req, res) => {
    userDB.find()
    .then(user => {
        res.status(200).send(user)
    .catch(error => {
        res.status(400).send({message: `error`})
    })
    })
}

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: `no data`})

    }

    const id = req.params.id
    userDB.findByIdAndUpdate(id, req.body, {userFindAndModify: false})
    .then(data => {
        if (!data) {
            res.status(400).send({message: `no user id`})
        }
        else{
            res.send(data)
        }
    })

    .catch(error => {
        res.status(400).send({message: `nothing to do`})
    })
}