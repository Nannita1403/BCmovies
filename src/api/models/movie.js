const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {type:String, require: true, trim: true },
    duration: {type:Number, require: true },
                                    //al hacer este array doy opciones que si o si necesito al menos 1
    categories: [{type:String, enum: ["terror", "comedia", "misterio"]}],
    img: {type:String, require: true}
}, {
    timestamps: true, //en la BD da la fecha que cargo los datos y la actualizacion de los datos
});

//para crear el modelo:
            //1r parametro: Nombre del Modelo, 2do Parametro: Schema, 3r parametro: modelo
const Movie = mongoose.model("movies", movieSchema, "movies");
module.exports = Movie; //lo exporto para poder reutilizarlo cuando quiero
