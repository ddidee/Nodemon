const express = require('express')
const routes = express.Router()
const axios = require ('axios')
const {create} = require('../controller/controller')


routes.get('/', (req, res) => {
    res.render('table', {users: 'New Sail'})
})

routes.get('/form', (req, res) => {
    res.render('form')
})

routes.get('/addUser', (req, res) => {
    res.render('add_user')
})

routes.get('/update', (req, res) => {
    res.render('update')
})

routes.post('/form', create)


module.exports = routes