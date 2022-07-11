const {Router} = require('express')
const router = Router ()


router.get('/', (req, res) => {
    res.render('index', {
        title: 'Main page',
        isHome: true
    })
})

// Или
// var express = require('express');
// var router = express.Router();

// Экспортируем наружу обьект роутер
module.exports = router