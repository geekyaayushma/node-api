import { Movie } from "../model/schema";

export async function createMovie(data: any) {
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

export async function deleteMovie(id: string) {
  try {
    const movie = await Movie.findByIdAndDelete({ _id: id });
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
