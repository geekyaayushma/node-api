//model/schema.ts
import { Schema, model } from "mongoose";
import Joi from "joi";

export const MovieSchemaValidate = Joi.object({
  titile: Joi.string().required(),
  genere: Joi.string().required(),
  synopsis: Joi.string().required(),
});
//creating sn internal schema
interface Imovies {
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
    requires: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
});

export const MovieModel = model("Movie", moviesSchema);
