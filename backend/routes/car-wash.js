const express = require("express");
const router = express.Router();
var data = require("../queries/car-wash-queries");

router.route("/getList").get(data.getAll);
// TODO Extract carwash id from jwt

module.exports = router;
