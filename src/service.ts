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
export async function getMovies() {
  try {
    const movies = await Movie.find({});
    return movies;
  } catch (error) {
    return {
      status: "Failed",
      message: error,
    };
  }
}
export async function updateMovie(id: string, data: any) {
  try {
    const movie = await Movie.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });

    if (!movie) {
      return {
        status: "Failed",
        message: "Post not available",
      };
    }
    return {
      status: "Success",
      data: movie,
    };
  } catch (error) {
    return {
      status: "Failed",
      data: error,
    };
  }
}
