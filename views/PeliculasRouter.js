const { Router } = require("express");
const express = require("express");
const router = express.Router();

const PeliculasController = require("../controllers/PeliculasController");

//CRUD RESTful

//Leer todas las peliculas
router.get("/", PeliculasController.traePeliculas);
//http://localhost:3000/peliculas

//Búsqueda de películas por título
router.get("/titulo", PeliculasController.peliculasTitulo);
router.get("/id/:id", PeliculasController.peliculasId);

module.exports = router;
