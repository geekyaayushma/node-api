//model/schema.ts
import { Schema, model } from "mongoose";
import Joi from "joi";

export const MovieSchemaValidate = Joi.object({
  title: Joi.string().required(),
  genere: Joi.string().required(),
  synopsis: Joi.string().required(),
});
//creating sn internal schema
export interface Imovies {
  title: string;
  genere: string;
  synopsis: string;
}
//Movie schema
const moviesSchema = new Schema<Imovies>({
  title: {
    type: String,
    required: true,
  },
  genere: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
});

export const MovieModel = model<Imovies>("Movie", moviesSchema);
