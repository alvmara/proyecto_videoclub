const { Order } = require("../models/index");

const OrdersController = {};

OrdersController.placeNewOrder = (req, res) => {
  let body = req.body;

  console.log("este es body", body);
};
