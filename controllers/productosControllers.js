const { request, response } = require("express");
const Producto = require("../models/productoModel");

const crearProducto = async (req = request, res = response) => {
    try {
        const producto = new Producto(req.body);
        await producto.save();

        res.status(201).json(producto)

    } catch (error) {
        res.status(500).json({
            msg: "Error al crear el producto",
            error
        })
    }
}

const obtenerProductos = async (req = request, res = response) => {
    try {
        const { desde = 0, limite = 10 } = req.query;
        const query = { estado: true };

        const [total, productos] = await Promise.all([
            Producto.countDocuments(query),
            Producto.find(query).skip(Number(desde)).limit(Number(limite))
        ]);

        res.json({
            total,
            productos
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error al obtener los productos",
            error
        })
    }
}

const obtenerProducto = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findById(id);

        res.json({ producto })
    } catch (error) {
        res.status(500).json({
            msg: "Error al obtener el producto",
            error
        })
    }
}

const actualizarProducto = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio, stock, imagen, categoria, proveedor } = req.body;
        const producto = await Producto.findByIdAndUpdate(id, {
            nombre,
            descripcion,
            precio,
            stock,
            imagen,
            categoria,
            proveedor
        }, { new: true });
        res.json({ producto })
    } catch (error) {
        res.status(500).json({
            msg: "Error al actualizar el producto",
            error
        })
    }
}

const eliminarProducto = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByIdAndDelete(id);

        res.json({ producto })
    } catch (error) {
        res.status(500).json({
            msg: "Error al eliminar el producto",
            error
        })
    }
}

module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    eliminarProducto
}