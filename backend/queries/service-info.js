const db = require("./data-source");

function getServiceInfo(req, res, next) {
  db.any(
    `SELECT "Id", "Name", "Description", "Price"
     FROM "Services" WHERE "CarWashId" = '${req.query.id}'`
  )
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((error) => {})
}

module.exports = {
    getServiceInfo,
};
