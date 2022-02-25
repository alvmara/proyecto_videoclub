const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const UsuarioController = require("../controllers/UsuarioController");

//CRUD RESTful
//Login
router.post("/login", UsuarioController.logUsuario);
//https://localhost:3000/usuarios/login

//Registro
router.post("/", UsuarioController.registraUsuario);
//http://localhost:3000/usuarios

//Leer todos los usuarios
router.get("/", auth, UsuarioController.traeUsuarios);
// //http://localhost:3000/usuarios

//Borramos a todos los usuarios
router.delete("/", auth, isAdmin, UsuarioController.deleteAll);

// //Borramos a todos los usuarios
router.delete("/:id", auth, isAdmin, UsuarioController.deleteById);

module.exports = router;
