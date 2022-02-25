const { Pelicula } = require("../models/index");
const { compareSync } = require("bcrypt");

const PeliculasController = {};

//Funciones del controlador

PeliculasController.traePeliculas = (req, res) => {
  Pelicula.findAll().then((peliculas) => res.json(peliculas));
};

PeliculasController.peliculasTitulo = async (req, res) => {
  Pelicula.findOne({ where: { titulo: req.query.criterio } }).then((pelicula) =>
    res.json(pelicula)
  );
};
PeliculasController.peliculasId = async (req, res) => {
  Pelicula.findOne({ where: { id: req.params.id } }).then((pelicula) =>
    res.json(pelicula)
  );
};

module.exports = PeliculasController;
