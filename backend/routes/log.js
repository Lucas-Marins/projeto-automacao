const express = require('express')
const router = express.Router()
const logCrtl = require('../controllers/logController')
const { route } = require('./user')


router.get('/log/job', logCrtl.GetJobLastId)
router.get('/log/job/:id', logCrtl.GetJobPerID)

router.get('/log/workflow', logCrtl.GetWorkflowLastId)
router.get('/log/workflow/:id', logCrtl.GetWorkflowPerID)

router.get('/log', logCrtl.GetAll)




module.exports = router