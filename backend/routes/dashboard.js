const express = require('express')
const router = express.Router()
const dashboardCrtl = require('../controllers/dashboardController')
const auth = require('../middleware/auth')


router.get('/data', dashboardCrtl.getData)

module.exports = router
