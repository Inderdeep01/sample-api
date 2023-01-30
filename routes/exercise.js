const express = require('express')
const router = express.Router()
const controllers = require('../controllers/exercise')

router.get('/:id',controllers.getById)

router.get('/',controllers.get)

router.post('/',controllers.post)

router.put('/:id',controllers.put)

router.delete('/:id',controllers.delete)

module.exports = router