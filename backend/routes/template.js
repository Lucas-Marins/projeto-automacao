const express = require('express')
const router = express.Router()
const templateCrtl = require('../controllers/templateController')

router.get('/template',templateCrtl.getTemplate)
router.get('/list/:id', templateCrtl.getJobListTemplate)

router.get('/organization/:id',templateCrtl.getOrganizationTemplate)
router.get('/organization',templateCrtl.getOrganization)

router.get('/teams/:id',templateCrtl.getTeams)



module.exports = router