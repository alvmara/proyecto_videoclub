const express = require("express");
const router = express.Router();

const PedidosController = require("../controllers/PedidosController");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");


router.get("/", auth, isAdmin, PedidosController.getAll);

router.post("/", PedidosController.placeNewOrder);

module.exports = router;
