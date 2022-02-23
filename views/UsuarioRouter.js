const express = require("express");
const UsuarioController = require("../controllers/UsuarioController");
const router = express.Router();

//Leer todos los usuarios
router.get("/", /*auth,*/ UsuarioController.traeUsuarios);

//http://localhost:3000/usuarios
module.exports = router;
