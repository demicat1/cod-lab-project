const db = require('./data-source')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const genGuid = require('../helpers/helpers').generateGuid

async function register(req, res, next) {
  const newUser = new User()
  newUser.email = req.body.email
  newUser.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt()
  )

  db.one(
    `INSERT INTO "Users"("Id", "Email", "PasswordHash", "Balance", "CarPlate", "Phone") 
            VALUES('${genGuid()}', '${newUser.email}', '${
      newUser.password
    }', 0, '', '') RETURNING "Id"`
  ).then((data) => res.send(generateToken(data.id, newUser.email)))
}

function login(req, res, next) {
  db.one(`select * from "Users" where "Email" = '${req.body.email}'`)
    .then(async (data) => {
      if (await bcrypt.compare(req.body.password, data.PasswordHash))
        res.send(generateToken(data.Email))
      else return next('Wrong password')
    })
    .catch(function (err) {
      return next(err)
    })
}

function generateToken(id, email) {
  return jwt.sign({ id: id, email: email }, process.env.TOKEN_SECRET, {
    expiresIn: '10h',
  })
}

module.exports = {
  login,
  register,
}
