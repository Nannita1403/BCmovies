//! CRUD -> CREATE READ UPDATE DELETE

const Movie = require("../models/movie");

//recojer las peliculas de la base de datos
                //asincrona, por que hacen peticiones en BD, publicar en BD y como lleva tiempo
const getMovies = async (req, res, next) => {
    //comprobar si hay errores uso try Catch
    try {
        const movies = await Movie.find(); //busco cada pelicula
        return res.status(200).json(movies); //me devuelve las mismas
    } catch (error) {
        return res.status(400).json("error");
    }
}

//subir peliculas de la base de datos
const postMovies = async (req, res, next) => {
    try {
    const newMovie = new Movie(req.body); //todos estos datos los podremos en un objeto newMovie
    const movieSaved = await newMovie.save(); //guardo esa nueva pelicula en BD (con el await)
    return res.status(201).json(movieSaved); //metodo 201 para cuando se publica
    } catch (error) {
        return res.status(400).json("error");
    }
}

//actualizar/modificar peliculas de la base de datos (necesito el ID de la pelicula q quiero modif)
const updateMovies = async (req, res, next) => {
    try {
      // req.body //requerimiento del ID 
        const { id } =  req.params; //parametros de ruta  
        const newMovie = new Movie(req.body); //creo una nueva pelicula

        newMovie._id =id; //lo que hago es igualar el id de la nva peli con el id de la peli a modificar
                            //busco y actualizo (paso Id, nva peli actualizada, new:true)
                             //new:true es para corroborar el cambio y no quedarse con dato anterior
        const movieUpdated = await Movie.findByIdAndUpdate(id, newMovie, {new:true,});
        return res.status(200).json("movieUpdated");

    } catch (error) {
        return res.status(400).json("error");
    }
}
//eliminar pelicula de la base de datos
const deleteMovies = async (req, res, next) => {
    try {
        // req.body //requerimiento del ID 
        const { id } =  req.params; //parametros de ruta  
        const movieDeleted = await Movie.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Elemento que ha sido eliminado:",
            elemento: movieDeleted
        })
    } catch (error) {
        return res.status(400).json("error");
    }
};
//los exporto para utlizar los controllers
module.exports = {
    getMovies,
    postMovies,
    updateMovies,
    deleteMovies
}

//get, post, put, delete