const mongoose = require("mongoose");

const connectDB = async () => {
try {
    await mongoose.connect(process.env.DB_URL);
    console.log("conectado con exito!");
} catch (error) {
    console.log("Fallo en la conexion con la BBDD");
}
};

module.exports = { connectDB}