import { createMovie, getMovies, updateMovie, deleteMovie } from "./service";
import { Request, Response } from "express";
import { MovieSchemaValidate } from "../model/schema";

export async function insertMovie(req: Request, res: Response) {
  const data = {
    id: req.body.id,
    title: req.body.title,
    genre: req.body.genre,
    synopsis: req.body.synopsis,
  };

  const { error, value } = MovieSchemaValidate.validate(data);
  if (error) {
    res.send(error.message);
  } else {
    const service = await createMovie(value);
    res.status(201).send(service);
  }
}

export async function Movies(req: Request, res: Response) {
  const service = await getMovies();
  res.status(201).send(service);
}

export async function Update(req: Request, res: Response) {
  const id = req.params.id;
  const service = await updateMovie(id, req.body);
  res.status(201).send(service);
}

export async function Delete(req: Request, res: Response) {
  const id = req.params.id;
  const service = await deleteMovie(id);
  res.status(201).send(service);
}
