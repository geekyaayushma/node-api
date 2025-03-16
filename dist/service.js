"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMovie = createMovie;
exports.getMovies = getMovies;
exports.updateMovie = updateMovie;
exports.deleteMovie = deleteMovie;
const schema_1 = require("../model/schema");
function createMovie(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newMovie = yield schema_1.Movie.create(data);
            console.log(newMovie);
            return {
                status: "Success",
                data: newMovie,
            };
        }
        catch (error) {
            return {
                status: "Failed",
                message: error,
            };
        }
    });
}
function getMovies() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const movies = yield schema_1.Movie.find({});
            return movies;
        }
        catch (error) {
            return {
                status: "Failed",
                message: error,
            };
        }
    });
}
function updateMovie(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const movie = yield schema_1.Movie.findByIdAndUpdate({ _id: id }, data, {
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
        }
        catch (error) {
            return {
                status: "Failed",
                data: error,
            };
        }
    });
}
function deleteMovie(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const movie = yield schema_1.Movie.findByIdAndDelete({ _id: id });
            if (!movie) {
                return {
                    status: "Failed",
                    message: "post not available",
                };
            }
            else {
                return {
                    status: "Success",
                    message: movie,
                };
            }
        }
        catch (error) {
            return {
                status: "Failed",
                message: error,
            };
        }
    });
}
