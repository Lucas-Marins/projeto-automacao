const express = require('express')
const router = express.Router()
const deployCrtl = require('../controllers/deployController')



router.post('/deploy', deployCrtl.deployTemplate)


module.exports = router