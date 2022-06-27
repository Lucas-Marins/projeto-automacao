const express = require('express')
const router = express.Router()
const deployCrtl = require('../controllers/deployController')
const auth = require('../middleware/auth')



router.post('/job/:id',auth, deployCrtl.deployJob)
router.post('/workflow/:id', auth,deployCrtl.deployWorkflow)



module.exports = router
