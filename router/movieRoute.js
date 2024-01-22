const express = require("express")
const movieController = require("./../controllers/movieController")
const logController = require("./../controllers/logController")

const router = express.Router()
router.route("/").get(logController.logResponseTime,movieController.getAllMovies).post(logController.logResponseTime,movieController.createMovie)
router.route("/:id").delete(logController.logResponseTime,movieController.deleteMovie)
router.route("/filtername").get(logController.logResponseTime,movieController.filterByName)
router.route("/rating").get(logController.logResponseTime,movieController.rating)

module.exports = router