import { Router } from "express";

import {
  insertMovie,
  Movies,
  Update,
  Delete,
} from "../controllers/movie.route";

const movieRoutes = Router();

movieRoutes.post("/insertMovie", insertMovie);
movieRoutes.get("/", Movies);
movieRoutes.patch("/updateMovie", Update);
movieRoutes.delete("/deleteMovie", Delete);

export default movieRoutes;
