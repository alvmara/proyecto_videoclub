const axios = require("axios");
(async () => {
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
})();
