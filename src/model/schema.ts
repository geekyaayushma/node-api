import { Schema, model } from "mongoose";
import Joi from "joi";

//validation schema
export const MovieSchemaValidate = Joi.object({
  id: Joi.number(),
  title: Joi.string().required(),
  genre: Joi.string().required(),
  synopsis: Joi.string().required(),
});

export interface IMovies {
  id: number;
  title: string;
  genre: string;
  synopsis: string;
}

const moviesSchema = new Schema<IMovies>({
  id: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },

  synopsis: {
    type: String,
    required: true,
  },
});

export const Movie = model<IMovies>("Movies", moviesSchema);
export default Movie;
