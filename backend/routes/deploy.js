const express = require('express')
const router = express.Router()
const deployCrtl = require('../controllers/deployController')
const auth = require('../middleware/auth')



router.post('/job/:id', deployCrtl.deployJob)
router.post('/workflow/:id', deployCrtl.deployWorkflow)



module.exports = router
