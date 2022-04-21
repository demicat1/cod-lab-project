var promise = require("bluebird");

var options = { promiseLib: promise };

var pgp = require("pg-promise")(options);
var db = pgp("postgres://postgres:12345@localhost:5432/car_washes");

module.exports = db;
