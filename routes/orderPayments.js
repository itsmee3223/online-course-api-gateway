var express = require("express");
var router = express.Router();

const orderPaymentsHandler = require("./handler/order_payment");

router.get("/", orderPaymentsHandler.getOrder);

module.exports = router;
