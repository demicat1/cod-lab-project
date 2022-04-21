const db = require("./data-source");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const TOKEN_SECRET =
  "09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611";

async function register(req, res, next) {
  const newUser = new User();
  newUser.email = req.body.email;
  newUser.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt());
  console.log("reg", req.body.password);

  db.none(
    `insert into "Users"("Id", "Email", "PasswordHash", "Balance", "CarPlate", "Phone") 
            values('${createGuid()}', '${newUser.email}', '${newUser.password}', 0, '', '')`
  ).then(() => res.send(generateToken(newUser.email)));
}

function login(req, res, next) {
  db.one(`select * from "Users" where "Email" = '${req.body.email}'`)
    .then(async (data) => {
      if (await bcrypt.compare(req.body.password, data.PasswordHash)) res.send(generateToken(data.Email));
      else return next("Wrong password");
    })
    .catch(function (err) {
      return next(err);
    });
}

function generateToken(email) {
  return jwt.sign({ email: email }, TOKEN_SECRET, { expiresIn: "10h" });
}

function createGuid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}

module.exports = {
  login,
  register,
};
