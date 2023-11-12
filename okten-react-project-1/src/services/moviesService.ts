import { urls } from "../constants";
import { IMovieInfo, IGenres, IMovies } from "../interfaces";
import { IRes } from "../types";
import { axiosMoviesService } from "./axiosService";

const moviesService = {
    getAll: (page = '?page=1'): IRes<IMovies> => axiosMoviesService.get(urls.allMovies + page),
    getMovieInfo: (id: string): IRes<IMovieInfo> => axiosMoviesService.get(urls.movieInfo + id),
    getAllGenres: (): IRes<IGenres> => axiosMoviesService.get(urls.allGenres),
    getAllGenreMovies: (id: number, page = '?page=1'): IRes<IMovies> => axiosMoviesService.get(urls.allGenreMovies(id, page)),
    searchMovie: (query:string, page:string = 'page=1'):IRes<IMovies> => axiosMoviesService.get(urls.searchMovie(query,page))
};

export { moviesService };