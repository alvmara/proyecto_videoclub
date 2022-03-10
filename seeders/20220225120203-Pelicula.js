"use strict";

const axios = require("axios");
const API_KEY = "210d6a5dd3f16419ce349c9f1b200d6d";
//Random number between two limits function
const minMaxRoundedRandom = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

module.exports = {
  async up(queryInterface, Sequelize) {
    ///Variable para guardar el root para ver el póster
    let TMDBimgUrlRoot = "https://image.tmdb.org/t/p/original";
    //Endpoint para traerme una página entera de películas. Necesario para tenerlo una primera vez
    //bucle para recorrer 25 páginas de resultados. El valor de page lo saco de una función random para que no siempre muestre las mismas páginas.
    let pages = 25; // maximo 25, si no el Movie DB te lo tira.
    for (let j = 1; j <= pages; j++) {
      let resultss = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${minMaxRoundedRandom(
          1,
          pages
        )}&with_watch_monetization_types=flatrate`
      );
      //Saco el número de resultados por página para meterselo al siguiente bucle
      let numbOfResultsPerPageTMDB = resultss.data.results.length;

      const peliculas = [];

      // Recorro cada elemento de la página para ir guardándolo acorde a los campos de mi BBDD
      for (let i = 0; i < numbOfResultsPerPageTMDB; i++) {
        peliculas.push({
          titulo: resultss.data.results[i].original_title,
          sinopsis: resultss.data.results[i].overview,
          adult: resultss.data.results[i].adult,
          popularity: resultss.data.results[i].popularity,
          image: TMDBimgUrlRoot + "/" + resultss.data.results[i].poster_path,
          fecha: "2021-09-13 01:24:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      await queryInterface.bulkInsert("Peliculas", peliculas);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Peliculas", null, {});
  },
};
