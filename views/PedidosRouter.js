const express = require("express");
const router = express.Router();

const PedidosController = require("../controllers/PedidosController");
const auth = require("../middlewares/auth");
router.post("/", auth, PedidosController.placeNewOrder);

module.exports = router;
