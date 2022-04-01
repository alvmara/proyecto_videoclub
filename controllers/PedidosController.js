
const { QueryTypes } = require("sequelize");
const { Pedido, sequelize } = require("../models/index");

const PedidosController = {};

PedidosController.getAll = (req, res) => {
  sequelize.query(`
    SELECT
      p.*,
      u.nickname AS nombreUsuario,
      pel.titulo AS tituloPelicula
      FROM projectpeliculas.pedidos AS p
      JOIN projectpeliculas.usuarios AS u ON p.usuarioId = u.id
      JOIN projectpeliculas.peliculas AS pel ON p.peliculaId = pel.id
  `, { type: QueryTypes.SELECT })
  .then((pedidos) => {
    // Obtener el nombre del usuario y nombre de la pelicula
    res.json(pedidos);
  })
  .catch(error => {
    res.status(500).send(error);
  })
}

PedidosController.placeNewOrder = (req, res) => {
  let body = req.body;

  // let id = req.user.usuario.id;

  Pedido.create({
    precio: body.precio,
    peliculaId: body.peliculaId,
    usuarioId: body.usuarioId,
    fecha: body.fecha,
    fechaDevolucion: body.fechaDevolucion,
  })
    .then((pedido) => {
      if (pedido) {
        res.send(pedido);
      } else {
        res.send("La creación de un nuevo pedido ha fallado");
      }
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = PedidosController;
