const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const connectDB = require('./server/db/connection')
const app = express()
const userRoutes = require('./server/routes/routes')

dotenv.config({path: 'config.env'})
let PORT = process.env.PORT||8000


app.use(express.json())
app.use(userRoutes)
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
connectDB()
app.use('/css', express.static(path.resolve(__dirname, 'assets/css/')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))


// app.get('/', (req, res) => {
//     res.render('table')
// })

// app.get('/form', (req, res) => {
//     res.render('form')
// })



app.listen(PORT, ()=> {
    console.log(`this is currently available in port ${PORT}`);
})
