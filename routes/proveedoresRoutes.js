const { Router } = require('express');
const { obtenerProveedores, crearProveedor } = require('../controllers/proveedoresControllers');

const router = Router();

router.get('/', obtenerProveedores);
router.post('/', crearProveedor);

module.exports = router;
