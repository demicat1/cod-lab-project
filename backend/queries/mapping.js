const db = require("./data-source");

const facilTypes = ["CarWashes", "CarPaintings"];

function getCoords(req, res, next) {
  const facilType = req.query.type < facilTypes.length ? facilTypes[req.query.type] : facilTypes[0];

  db.any(
    `SELECT "Facilities"."Latitude", "Facilities"."Longitude", "Facilities"."Name" FROM "${facilType}"
     JOIN "Facilities" ON "Facilities"."Id" = "${facilType}"."Id"`
  )
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (error) {
      // error;
    });
}

module.exports = {
  getCoords,
};
