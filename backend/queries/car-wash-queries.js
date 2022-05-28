var db = require("./data-source");
const wooppay = require("../services/payment-service");

function getAllCarWashes(req, res, next) {
  db.any(`SELECT * FROM "CarWashes"`)
    .then((data) => {
      res.status(200).json({
        status: "success",
        data: data,
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function search(req, res, next) {
  db.any(
    `SELECT * FROM "Facilities" WHERE LOWER("Name") LIKE LOWER('%${req.query.q}%') OR LOWER("Address") LIKE LOWER('%${req.query.q}%')`
  )
    .then((data) => {
      res.status(200).json({
        status: "success",
        data: data,
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

async function createOrder(req, res, next) {
  /*
  db.none(
    `INSERT INTO "CarWashes"
    ("Id", "UserId", "FacilityId", "BoxNumber", "CustomerName", 
      "CarPlate", "ServiceId", "BookedDate",
      "SubmissionDate", "IsPaid", "IsServiced", "OperationId")
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  )
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
      });
    })
    .catch(function (err) {
      return next(err);
    }); */
  await wooppay.initSession();
  res.send(await wooppay.createInvoice("88005553535", require("../helpers/helpers").generateGuid(), 5555));
}

module.exports = {
  getAll: getAllCarWashes,
  createOrder,
  search,
};
