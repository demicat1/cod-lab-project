var db = require("./data-source");
const wooppay = require("../services/payment-service");
const genGuid = require("../helpers/helpers").generateGuid;

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
  let order = null;
  let userPhone = "";
  let servicePrice = 0;

  await db
    .query(
      `INSERT INTO "Orders"
    ("Id", "UserId", "FacilityId", "BoxNumber", "CustomerName", 
      "CarPlate", "ServiceId", "BookedDate",
      "SubmissionDate", "IsPaid", "IsServiced")
    VALUES ('${genGuid()}', '${req.body.userId}', '${req.body.facilId}', '${req.body.boxNumber}', 
      '${req.body.customerName}', '${req.body.carPlate}', '${req.body.serviceId}', '${req.body.bookedDate}', 
      '${new Date()}', '${false}', '${false}') RETURNING *`
    )
    .then(function (data) {
      order = data;
    })
    .catch(function (err) {
      return next(err);
    });

  db.one(`SELECT "Phone" FROM "Users" WHERE "Id" = '${req.body.userId}'`)
    .then((data) => {
      userPhone = data.Phone;
    })
    .catch(function (err) {
      return next(err);
    });

  db.one(`SELECT "Price" FROM "Services" WHERE "Id" = '${req.body.serviceId}'`)
    .then((data) => {
      servicePrice = data.Price;
    })
    .catch(function (err) {
      return next(err);
    });

  await wooppay.initSession();
  res.send(await wooppay.createInvoice(userPhone, genGuid(), servicePrice));
}

async function verifyPayment(req, res, next) {
  // TODO   // , "OperationId"
}

module.exports = {
  getAll: getAllCarWashes,
  createOrder,
  search,
};
