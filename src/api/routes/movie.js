const { getMovies, postMovies, updateMovies, deleteMovies } = require("../controllers/movie");

const moviesRouter = require ("express").Router();
//cuando el usuario solicite algo (ahi se ejecuta la ruta)
//* declaro la ruta:
moviesRouter.get("/", getMovies); //tomo la funcion del controlador para tomar la pelicula
moviesRouter.post("/", postMovies);
moviesRouter.put("/:id", updateMovies);
moviesRouter.delete("/:id", deleteMovies);


module.exports = moviesRouter;