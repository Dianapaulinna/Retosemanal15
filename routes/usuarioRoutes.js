
const express = require("express");
const usuarioController = require("../controllers/usuarioController");

const router = express.Router();

router.post("/usuario", usuarioController.crearUsuario);

router.get("/bienvenida/:nombre", usuarioController.mostrarPaginaDeBienvenida);

module.exports = router;