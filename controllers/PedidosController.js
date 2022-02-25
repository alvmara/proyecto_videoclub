const { Pedido } = require("../models/index");

const PedidosController = {};

PedidosController.placeNewOrder = (req, res) => {
  let body = req.body;

  let id = req.user.usuario.id;

  Pedido.create({
    precio: body.precio,
    peliculaId: body.peliculaId,
    usuarioId: id,
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
