const { getCinema, getCinemas, postCinema, updateCinema, deleteCinema } = require("../controllers/cinema");

const cinemaRouter = require("express").Router();

cinemaRouter.get("/:id", getCinema);
cinemaRouter.get("/", getCinemas);
cinemaRouter.post("/", postCinema);
cinemaRouter.put("/", updateCinema);
cinemaRouter.delete("/", deleteCinema);

module.exports = cinemaRouter;