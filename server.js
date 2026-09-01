const express = require('express');
const cors = require('cors');
const { conexionBD } = require('./database/config');

class server {

    constructor() {
        this.app = express();
        this.port = 4000

        this.productosPath = '/api/productos';
        this.proveedoresPath = '/api/proveedores';
        this.clientesPath = '/api/clientes';

        this.conexionBD();
        this.middleware();
        this.routes();
    }

    async conexionBD() {
        await conexionBD();
    }

    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.productosPath, require('./routes/productosRoutes'));
        this.app.use(this.proveedoresPath, require('./routes/proveedoresRoutes'));
        this.app.use(this.clientesPath, require('./routes/clientesRoutes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}

module.exports = server;