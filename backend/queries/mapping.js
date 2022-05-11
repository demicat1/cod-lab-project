const db = require('./data-source')

function getCoords(req, res, next) {
  db.any(`SELECT "Latitude", "Longitude", "Name" FROM public."Facilities"`)
    .then(function (data) {
      res.status(200).json(data)
    })
    .catch(function (error) {
      // error;
    })
}

module.exports = {
  getCoords,
}
