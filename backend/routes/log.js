const express = require('express')
const router = express.Router()
const logCrtl = require('../controllers/logController')
const { route } = require('./user')


router.get('/log', logCrtl.GetJobLastId)
router.get('/log/:id', logCrtl.GetJobPerID)



module.exports = router