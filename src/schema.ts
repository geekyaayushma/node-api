import { Schema, model } from "mongoose";
import Joi from "joi";

// ✅ Joi Schema for validation
export const MovieSchemaValidate = Joi.object({
  title: Joi.string().trim().min(1).required(), // Ensures non-empty trimmed strings
  genre: Joi.string().trim().required(),
  synopsis: Joi.string().trim().required(),
});

// ✅ TypeScript Interface
interface IMovie {
  title: string;
  genre: string;
  synopsis: string;
}

// ✅ Mongoose Schema
const movieSchema = new Schema<IMovie>(
  {
    title: { type: String, required: true, trim: true },
    genre: { type: String, required: true, trim: true },
    synopsis: { type: String, required: true, trim: true },
  },
  { timestamps: true } // ✅ Adds createdAt & updatedAt fields
);

// ✅ Model Creation
export const Movie = model<IMovie>("Movie", movieSchema);
