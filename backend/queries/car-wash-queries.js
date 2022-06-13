var db = require("./data-source");
const wooppay = require("../services/payment-service");
const genGuid = require("../helpers/helpers").generateGuid;
const genTimeSlots = require("./time-intervals").getIntervals;
const jwt = require("jsonwebtoken");

function search(req, res, next) {
  db.any(
    `SELECT "Latitude", "Longitude", "Name", "Address", "Rating", "WorkdayEndHours", "WorkdayStartHours"
     FROM "Facilities" WHERE LOWER("Name") LIKE LOWER('%${req.query.q}%') OR LOWER("Address") LIKE LOWER('%${req.query.q}%')`
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

async function getTimeSlots(req, res, next) {
  db.any(`SELECT "BookedDate" FROM "Orders" WHERE "FacilityId" = '${req.query.id}' AND "BookedDate"::date = '${req.query.date}'`)
    .then(async (data) => {
      const dates = await db.one(
        `SELECT "WorkdayStartHours"::text, "WorkdayEndHours"::text FROM "Facilities" WHERE "Id" = '${req.query.id}'`
      );

      const slots = genTimeSlots(
        dates.WorkdayStartHours,
        dates.WorkdayEndHours,
        (bookedTimes = data.map((x) => {
          const date = new Date(x.BookedDate);
          return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
        }))
      );

      res.send(slots);
    })
    .catch(function (err) {
      return next(err);
    });
}

async function createOrder(req, res, next) {
  let order = null;
  let userPhone,
    facilId,
    userId = "";
  let servicePrice = 0;

  try {
    const jwtDat = jwt.verify(req.headers.authorization, process.env.TOKEN_SECRET);
    userId = jwtDat.id;

    await db.one(`SELECT "Phone" FROM "Users" WHERE "Id" = '${userId}'`).then(async (data) => {
      userPhone = data.Phone;

      await db
        .one(`SELECT "CarWashId", "Price" FROM "Services" WHERE "Id" = '${req.body.serviceId}'`)
        .then((data) => {
          servicePrice = data.Price;
          facilId = data.CarWashId;
        })
        .catch(function (err) {
          return next(err);
        });
    });
  } catch {
    return next(err);
  }

  await db
    .query(
      `INSERT INTO "Orders"
    ("Id", "UserId", "FacilityId", "BoxNumber", "CustomerName", 
      "CarPlate", "ServiceId", "BookedDate",
      "SubmissionDate", "IsPaid", "IsServiced")
    VALUES ('${genGuid()}', '${userId}', '${facilId}', '1', 
      'customerNameTest', 'carPlateTest', '${req.body.serviceId}', '${new Date(req.body.date).toISOString()}', 
      '${new Date().toISOString()}', '${false}', '${false}') RETURNING *`
    )
    .then(function (data) {
      order = data;
    })
    .catch(function (err) {
      return next(err);
    });

  res.send(await wooppay.createInvoice(userPhone, genGuid(), servicePrice));
}

async function verifyPayment(req, res, next) {
  // TODO   // , "OperationId"
}

module.exports = {
  createOrder,
  search,
  getTimeSlots,
};
