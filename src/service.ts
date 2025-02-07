import { Movie } from "./schema";

export async function createMovie(data: any) {
  try {
    const newMovie = await Movie.create(data);
    console.log(newMovie);
    return {
      status: "Sucess",
      data: newMovie,
    };
  } catch (error) {
    return {
      status: "Error",
      message: error,
    };
  }
}
