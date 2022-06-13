const express = require('express')
const router = express.Router()
const carwash = require('../queries/car-wash-queries')
const mapping = require('../queries/mapping')
const serviceInfo = require('../queries/service-info')

router.route('/createOrder').post(carwash.createOrder)
router.route('/getCoords').get(mapping.getCoords)
router.route('/search').get(carwash.search)
router.route('/getTimeSlots').get(carwash.getTimeSlots)
router.route('/getServiceInfo').get(serviceInfo.getServiceInfo)
router.route('/setRating').post(carwash.setRating)

module.exports = router
