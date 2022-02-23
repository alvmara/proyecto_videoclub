const { Usuario } = require("../models/index");
const UsuarioController = {};

//Funciones del controlador

UsuarioController.traeUsuarios = (req, res) => {
  //Búsqueda trayendo a todos los usuarios
  Usuario.findAll().then((data) => {
    res.send(data);
  });
};

UsuarioController.traerUsuarioId = (req, res) => {
  //Búsqueda buscando una Id
  Usuario.findByPk(req.params.id).then((data) => {
    res.send(data);
  });
};

UsuarioController.traerUsuarioEmail = (req, res) => {
  //Búsqueda comparando un campo
  Usuario.findOne({ where: { email: req.params.email } }).then((data) => {
    res.send(data);
  });
};


UsuarioController.registraUsuario = async (req, res) => {
    
    //Registrando un usuario
    
        let nombre = req.body.nombre;
        let edad = req.body.edad;
        let apellido = req.body.apellido;
        let apodo = req.body.apodo;
        let email = req.body.email;
        console.log("antes de encriptar",req.body.password);
        let contraseña = bcrypt.hashSync(req.body.contraseña, Number.parseInt(authConfig.rounds)); 
        
        console.log("esta es la contraseña", contraseña);
        //Comprobación de errores.....
        
        

module.exports = UsuarioController;
