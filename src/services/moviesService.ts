import { urls } from "../constants";
import { IRes } from "../types";
import { IMovies, IGenres, IMovieInfo, IParams, ISearchParams } from "../interfaces";
import { axiosService } from "./axiosService";

const moviesService = {
    getAllMovies: (page = '?page=1'): IRes<IMovies> => axiosService.get(urls.allMovies + page),
    getMovieInfo: (id: string): IRes<IMovieInfo> => axiosService.get(urls.movieInfo + id),
    getAllGenres: (): IRes<IGenres> => axiosService.get(urls.allGenres),
    getAllGenreMovies: ( params: IParams): IRes<IMovies> => axiosService.get(urls.allGenreMovies(params.id, params.page)),
    searchMovie: (params: ISearchParams):IRes<IMovies> =>axiosService.get(urls.searchMovie(params.query,params.page))
};

export { moviesService };