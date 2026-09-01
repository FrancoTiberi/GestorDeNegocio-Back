const { Schema, model } = require("mongoose");

const productoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    imagen: { type: String },
    categoria: { type: String },
    proveedor: { type: String },
    estado: { type: Boolean, default: true },
    fechaRegistro: { type: Date, default: Date.now }
});

module.exports = model("Producto", productoSchema);