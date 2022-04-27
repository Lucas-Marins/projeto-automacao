const express = require('express')
const router = express.Router()
const templateCrtl = require('../controllers/templateController')

router.get('/template',templateCrtl.getTemplate)
router.get('/list/:id', templateCrtl.getJobListTemplate)



module.exports = router