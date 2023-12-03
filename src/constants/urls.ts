const baseURL = {
    movies: 'https://api.themoviedb.org/3/',
    poster: 'https://image.tmdb.org/t/p/w500/'
};

const movieInfo = 'movie/';
const allMovies = 'discover/movie';
const allGenres = 'genre/movie/list';
const searchMovie = 'search/movie?query=';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGE4MzBjOTAwYmE1YTU4NDRlZGQyMDc1N2I0MGY5MyIsInN1YiI6IjY1NGEwNjJjNmJlYWVhMDE0YjY5OTM3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eCzrzyaD0JsA2A9iGP-7aJ_2lY1Ks-pwL8fGoJ8ZQ1M';

const urls = {
    baseURL,
    allMovies,
    allGenres,
    movieInfo,
    token,
    searchMovie: (query: string, page: string) => `${searchMovie + query}&${page}`,
    allGenreMovies: (id: number, page: string) => `genre/${id}/movies${page}`
};

export { urls };