const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')
const cardRoutes = require('./routes/card')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)
app.use('/card', cardRoutes)

const PORT = process.env.PORT || 3000

async function start() {
    try {
        const url = 'mongodb://Agent-003:<pass>@ac-2ksaaeq-shard-00-00.w8typby.mongodb.net:27017,ac-2ksaaeq-shard-00-01.w8typby.mongodb.net:27017,ac-2ksaaeq-shard-00-02.w8typby.mongodb.net:27017/?ssl=true&replicaSet=atlas-ga90yz-shard-0&authSource=admin&retryWrites=true&w=majority'
        await mongoose.connect(url)
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()