const { Usuario } = require("../models/index");
const UsuarioController = {};

//Funciones del controlador

UsuarioController.traeUsuarios = (req, res) => {
  //Búsqueda trayendo a todos los usuarios
  Usuario.findAll().then((data) => {
    res.send(data);
  });
};

module.exports = UsuarioController;
