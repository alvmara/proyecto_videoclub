const router = require("express").Router();

const UsuarioRouter = require("./views/UsuarioRouter");
// const PeliculasRouter = require("./views/PeliculasRouter");
// const PedidosRouter = require("./views/PedidosRouter");

router.use("/usuarios", UsuarioRouter);
// router.use("/peliculas", PeliculasRouter);
// router.use("/orders", PedidosRouter);

module.exports = router;
