const { request, response } = require("express");
const Cliente = require("../models/clienteModel");

const crearCliente = async (req = request, res = response) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();

        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({
            msg: "Error al crear el cliente",
            error
        });
    }
}

const obtenerClientes = async (req = request, res = response) => {
    try {
        const query = { estado: true };

        const [total, clientes] = await Promise.all([
            Cliente.countDocuments(query),
            Cliente.find(query)
        ]);

        res.json({
            total,
            clientes
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error al obtener los clientes",
            error
        });
    }
}

module.exports = {
    crearCliente,
    obtenerClientes
};
