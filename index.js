//! Utilizando Express y poniendo a funcionar un servidor:
/*// nos traemos el módulo express que previamente hemos instalado
const express = require("express");

// lo ejecutamos y guardamos en la variable app
const app = express();

// utilizamos nuestro servidor para ponerlo a escuchar con el método listen, le tenemos que 
//pasar un puerto en el primer parámetro y un callback con la función a ejecutar cuando se 
//ponga a escuchar.
app.listen(3000, () => {
    console.log("http://localhost:3000");
})*/
//! Creando la Primera Ruta
require("dotenv").config();

const express = require("express");
const { connectDB } = require("./src/config/db");
const moviesRouter = require("./src/api/routes/movie");
const cinemaRouter = require("./src/api/routes/cinema")
//al ejecutar la variable app (usando express como una función)= esto permite a la app metodos:
const app = express();

connectDB();


//! Linea para configurar que mi servidor sirva para recoger datos en formato json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/movies", moviesRouter);
app.use("/api/v1/cinemas", cinemaRouter);


app.use("/saludar", (req, res, next) => {
    return res.status(200).json("Ey! Te saludo, esto FUNCIONA");
})
// 3000 es el puerto donde va a salir nuestro servidor // y luego una función 
app.listen(3000, () => {
    console.log("http://localhost:3000");
})



// todas las rutas que no tengan respuesta entrarán por aquí
// req:objeto de la petición - res: respuesta mas nutritiva posible y next: 
/*app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found")
})*/
//aca marcamos una ruta.. determinada 