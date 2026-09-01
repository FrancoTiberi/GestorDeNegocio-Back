const mongoose = require("mongoose");

const conexionBD = async () => {
    try {
        await mongoose.connect("mongodb+srv://tiberifranco63_db_user:Cu4jtudKnmL0vstG@cluster0.gfwfqgl.mongodb.net/");
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
        throw new Error("Error al conectar a la base de datos");
    }
}

module.exports = {
    conexionBD
}