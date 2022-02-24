"use strict";
const axios = require("axios");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    //obtener peliculas de themoviedatabase
    const API_KEY = "000be5609029adacb7055040981c0393";

    let paginaActual = 1;
    let peliculas = [];

    const wait = (ms) => new Promise((res) => setTimeout(res, ms));

    while (true) {
      const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=es-ES&page=${paginaActual}`;
      const response = await axios.get(url);

      peliculas = peliculas.concat(response.data.results);
      // esperar unos segundos, para no saturar la api
      wait(200);

      console.log("Página ", paginaActual);

      paginaActual++;

      if (paginaActual > response.data.total_pages) {
        break;
      }
    }

    console.log("peliculas", peliculas);

    //tranformar los datos
    peliculas = peliculas.map((pelicula) => {
      return {
        titulo: pelicula.title,
        sinopsis: pelicula.original_title,
        adult: pelicula.adult,
        popularity: pelicula.popularity,
        image: pelicula.backdrop_path,
        fecha: new Date(pelicula.release_date),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    // insertarlos en la tabla peliculas
    await queryInterface.bulkInsert("Peliculas", peliculas, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
