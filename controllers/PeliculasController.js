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

PeliculasController.peliculasAdultas = (req, res) => {
  //todas las películas que no sean para niños

  Pelicula.findAll({
    where: {
      adult: false,
    },
  })
    .then((peliculasAdultas) => {
      if (peliculasAdultas != 0) {
        res.send(peliculasAdultas);
      } else {
        res.send("No hay películas que no sean para niños");
      }
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = PeliculasController;
