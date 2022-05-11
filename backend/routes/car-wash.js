const express = require('express')
const router = express.Router()
var data = require('../queries/car-wash-queries')
const mapping = require('../queries/mapping')

router.route('/getList').get(data.getAll)
router.route('/createOrder').get(data.createOrder)
router.route('/getCoords').get(mapping.getCoords)
// TODO Extract carwash id from jwt

module.exports = router
