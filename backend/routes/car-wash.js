const express = require('express')
const router = express.Router()
const carwash = require('../queries/car-wash-queries')
const mapping = require('../queries/mapping')

router.route('/getList').get(carwash.getAll)
router.route('/createOrder').get(carwash.createOrder)
router.route('/getCoords').get(mapping.getCoords)
router.route('/search').get(carwash.search)
router.route('/getTimeSlots').get(carwash.getTimeSlots)

module.exports = router
