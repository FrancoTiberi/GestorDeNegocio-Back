const { Schema, model } = require("mongoose");

const clienteSchema = new Schema({
    nombre: { type: String, required: true },
    telefono: { type: String },
    email: { type: String },
    deuda: { type: Number, default: 0 },
    comprasTotales: { type: Number, default: 0 },
    estado: { type: Boolean, default: true },
    fechaRegistro: { type: Date, default: Date.now }
});

module.exports = model("Cliente", clienteSchema);
