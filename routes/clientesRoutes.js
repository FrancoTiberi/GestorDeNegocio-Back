const { Router } = require("express");
const { crearCliente, obtenerClientes } = require("../controllers/clientesControllers");

const router = Router();

router.get("/", obtenerClientes);
router.post("/", crearCliente);

module.exports = router;
