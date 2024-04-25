const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema({
    address: {type:String, require: true, trim: true },
    name: {type:String, require: true},
}, {
    timestamps: true, //en la BD da la fecha que cargo los datos y la actualizacion de los datos
});

//para crear el modelo:
            //1r parametro: Nombre del Modelo, 2do Parametro: Schema, 3r parametro: modelo
const Cinema = mongoose.model("cinemas", cinemaSchema, "cinemas");
module.exports = Cinema; //lo exporto para poder reutilizarlo cuando quiero
