const { Schema, model } = require("mongoose");

const proveedorSchema = new Schema({
    proveedor: { type: String, required: true },
    producto: { type: String },
    categoria: { type: String },
    cantidad: { type: Number },
    total: { type: Number },
    estado: { type: Boolean, default: true },
    fechaRegistro: { type: Date, default: Date.now }
});

module.exports = model("Proveedor", proveedorSchema);
