"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movieControllers_1 = require("./src/controllers/movieControllers");
//import { validate } from "./src/middleware/handleValidation";
//import { movieCreateValidation } from "./src/middleware/movieValidation";
const router = (0, express_1.Router)();
exports.default = router.get("/test", (req, res) => {
    res.status(200).end("Api funfou!!");
}).post("/movie", movieControllers_1.createMovie)
    .get("/movie/:id", movieControllers_1.findMovieById)
    .get("/movie", movieControllers_1.getAllMovies)
    .delete("/movie/:id", movieControllers_1.removeMovie)
    .patch("/movie/:id", movieControllers_1.updateMovie);
