const { getCinema, postCinema, updateCinema, deleteCinema } = require("../controllers/cinema");

const cinemaRouter = require("express").Router();

cinemaRouter.get("/", getCinema);
cinemaRouter.post("/", postCinema);
cinemaRouter.put("/", updateCinema);
cinemaRouter.delete("/", deleteCinema);

module.exports = cinemaRouter;