var db = require("./data-source");

function getAllCarWashes(req, res, next) {
  db.any('select * from "CarWashes"')
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAll: getAllCarWashes,
};
