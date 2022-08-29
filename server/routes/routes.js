const express = require('express')
const routes = express.Router()
const controller = require('../controller/controller')

routes.get('/', (req, res) => {
    res.render('table')
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

routes.post('/sail/user', controller.create)
module.exports = routes