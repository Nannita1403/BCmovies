//! CRUD -> CREATE READ UPDATE DELETE

const Cinema = require("../models/cinema");

//recojer los cines de la BD
const getCinemas = async (req, res, next) => {
    //comprobar si hay errores uso try Catch
    try {
        const cinemas = await Cinema.find(); //busco cada pelicula
        return res.status(200).json(cinemas); //me devuelve las mismas
    } catch (error) {
        return res.status(400).json("error");
    }
};

const getCinema = async(req, res, next)=> {
    try {
        const { id } = req.params;
        const cinema = await Cinema.findById(id).populate("movies");
        return res.status(200).json(cinema); //me devuelve las mismas
    } catch (error) {
        return res.status(400).json("error");
    }
};     


//subir Cines a la BD
const postCinema = async (req, res, next) => {
    try {
    const newCinema = new Cinema(req.body); //todos estos datos los podremos en un objeto newMovie
    const cinemaSaved = await newCinema.save(); //guardo esa nueva pelicula en BD (con el await)
    return res.status(201).json(cinemaSaved); //metodo 201 para cuando se publica
    } catch (error) {
        return res.status(400).json("error");
    }
};

//actualizar/modificar peliculas de la base de datos (necesito el ID de la pelicula q quiero modif)
const updateCinema = async (req, res, next) => {
    try {
      // req.body //requerimiento del ID 
        const { id } =  req.params; //parametros de ruta  
        const newCinema = new Cinema(req.body); //creo una nueva pelicula

        newCinema._id =id; //lo que hago es igualar el id de la nva peli con el id de la peli a modificar
                            //busco y actualizo (paso Id, nva peli actualizada, new:true)
                             //new:true es para corroborar el cambio y no quedarse con dato anterior
        const cinemaUpdate = await Cinema.findByIdAndUpdate(id, newCinema, {new:true,});
        return res.status(200).json("cinemaUpdate");

    } catch (error) {
        return res.status(400).json("error");
    }
};
//eliminar pelicula de la base de datos
const deleteCinema = async (req, res, next) => {
    try {
        // req.body //requerimiento del ID 
        const { id } =  req.params; //parametros de ruta  
        const cinemaDeleted = await Cinema.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Elemento que ha sido eliminado:",
            elemento: cinemaDeleted
        })
    } catch (error) {
        return res.status(400).json("error");
    }
};
//los exporto para utlizar los controllers
module.exports = {
    getCinemas,
    postCinema,
    updateCinema,
    deleteCinema,
    getCinema,
};

//get, post, put, delete