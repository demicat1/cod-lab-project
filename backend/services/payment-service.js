const axios = require("axios");
axios.defaults.baseURL = "https://api.yii2-stage.test.wooppay.com";
axios.defaults.headers.common["Time-Zone"] = "Asia/Almaty";

async function initSession() {
  await axios.post("/v1/auth", { login: process.env.MERCH_LOGIN, password: process.env.MERCH_PASS }).then((resp) => {
    axios.defaults.headers.common["Authorization"] = resp.data.token;
  });
}

async function createInvoice(userPhone, orderId, amount) {
  let operation_url = "";

  await axios
    .post("/v1/invoice/create", {
      reference_id: orderId,
      user_phone: userPhone,
      amount: amount,
      death_date: require("../helpers/helpers").formatDate(
        new Date(new Date().getTime() + process.env.MINUTES_BEFORE_DEATH * 60000)
      ),
      request_url: process.env.REQUEST_URL + orderId,
      back_url: process.env.BACK_URL,
      option: process.env.OPTION,
    })
    .then((resp) => {
      operation_url = resp.data.operation_url;
    });
    
  return operation_url;
}

module.exports = {
  initSession,
  createInvoice,
};
