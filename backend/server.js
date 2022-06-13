const express = require("express");
var bodyParser = require("body-parser");
require("dotenv").config();
require("./services/payment-service").initSession();

const app = express();
const port = 3005;
app.use(express.json());

app.use("/api/user", require("./routes/user"));
app.use("/api/carwash", require("./routes/car-wash"));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
