var db = require("./data-source");
const wooppay = require("../services/payment-service");
const genGuid = require("../helpers/helpers").generateGuid;
const genTimeSlots = require("./time-intervals").getIntervals;

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
  const search = req.query.q;
  console.log('search');
  console.log(search);
  db.any(
    `SELECT "Latitude", "Longitude", "Name", "Address", "Rating", "WorkdayEndHours", "WorkdayStartHours"
     FROM "Facilities" WHERE LOWER("Name") LIKE LOWER('%${search}%') OR LOWER("Address") LIKE LOWER('%${search}%')`
  )
    .then((data) => {
      console.log(data)
      res.status(200).json({
        status: "success",
        data: data,
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

async function getTimeSlots(req, res, next) {
  db.any(`SELECT "BookedDate" FROM "Orders" WHERE "FacilityId" = '${req.query.id}' AND "BookedDate"::date = '${req.query.date}'`)
    .then(async (data) => {
      const dates = await db.one(
        `SELECT "WorkdayStartHours", "WorkdayEndHours" FROM "Facilities" WHERE "Id" = '${req.query.id}'`
      );

      const slots = genTimeSlots(
        (start = dates.WorkdayStartHours),
        (end = dates.WorkdayEndHours),
        (bookedTimes = data.map((x) => {
          const date = new Date(x.BookedDate);
          return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000).toLocaleString();
        }))
      );

      res.status(200).json({
        status: "success",
        data: slots,
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
  getTimeSlots,
};
