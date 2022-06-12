const db = require("./data-source");

const facilTypes = ["CarWash", "CarPainting", "CarTireFitting"];

function getCoords(req, res, next) {
  const facilType = req.query.type < facilTypes.length ? facilTypes[req.query.type] : facilTypes[0];
  const order = req.query.asc == "true" ? "ASC" : "DESC";

  db.any(
    `
    SELECT "Id", "Latitude", "Longitude", "Name", "Address", "Rating", "WorkdayEndHours", "WorkdayStartHours"
      FROM 
    "Facilities" WHERE "Type" = '${facilType}' ORDER BY "Name" ${order}
    `
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {});
}

module.exports = {
  getCoords,
};
