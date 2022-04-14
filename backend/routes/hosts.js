const express = require('express')
const router = express.Router()
const hostCrtl =  require('../controllers/hostController')


router.get('/hosts', hostCrtl.getHost)


module.exports = router