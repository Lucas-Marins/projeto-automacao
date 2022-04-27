const express = require('express')
const router = express.Router()
const hostCrtl =  require('../controllers/hostController')
const auth = require('../middleware/auth')


router.get('/hosts', hostCrtl.getHost)

router.get('/events',hostCrtl.getHostEvents)

router.get('/facts', hostCrtl.getAllHostFacts)

router.get('/facts/:id', hostCrtl.getPerHost)


module.exports = router