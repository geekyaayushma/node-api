import { Movie } from "../model/schema";
import { IMovies } from "../model/schema";

export async function createMovie(data: Partial<IMovies>) {
  try {
    const newMovie = await Movie.create(data);
    console.log(newMovie);
    return {
      status: "Success",
      data: newMovie,
    };
  } catch (error) {
    return {
      status: "Failed",
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

export async function updateMovie(id: string, data: Partial<IMovies>) {
  try {
    const movie = await Movie.findOneAndUpdate({ id: Number(id) }, data, {
      new: true,
    });
    console.log("Movie found:", movie);
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

export async function deleteMovie(id: string) {
  try {
    const movie = await Movie.findOneAndDelete({ id: Number(id) });
    if (!movie) {
      return {
        status: "Failed",
        message: "post not available",
      };
    } else {
      return {
        status: "Success",
        message: movie,
      };
    }
  } catch (error) {
    return {
      status: "Failed",
      message: error,
    };
  }
}
