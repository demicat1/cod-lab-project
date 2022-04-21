const express = require("express");
const router = express.Router();
var data = require('../queries/user-queries');

router.route("/login").post(data.login);
router.route("/register").post(data.register);

module.exports = router;