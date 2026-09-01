const { request, response } = require("express");
const Proveedor = require("../models/proveedorModel");

const crearProveedor = async (req = request, res = response) => {
    try {
        const proveedor = new Proveedor(req.body);
        await proveedor.save();

        res.status(201).json(proveedor);

    } catch (error) {
        res.status(500).json({
            msg: "Error al crear el proveedor",
            error
        });
    }
}

const obtenerProveedores = async (req = request, res = response) => {
    try {
        const query = { estado: true };

        const [total, proveedores] = await Promise.all([
            Proveedor.countDocuments(query),
            Proveedor.find(query)
        ]);

        res.json({
            total,
            proveedores
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error al obtener los proveedores",
            error
        });
    }
}

module.exports = {
    crearProveedor,
    obtenerProveedores
}
