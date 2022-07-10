const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')

const app = express ()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'    
})

// Настройка handlebars
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(homeRoutes)
app.use(addRoutes)
app.use(coursesRoutes)

const PORT = process.env.PORT || 3000

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`)
})