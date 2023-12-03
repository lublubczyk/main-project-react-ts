import { useAppSelector } from "../../../hooks";
import { MoviesListCard } from "../MoviesListCard";
import style from './MoviesList.module.css';

const MoviesList = () => {
    
    const { movies, isLoading, errors } = useAppSelector(state => state.movies);
   
    return (
        <div className={style.MoviesList}>
            {isLoading && <h1>Loading...</h1>}
            {errors && <h1>{errors.status_message} Something went wrong!</h1>}
            {!isLoading && movies && movies.results.map(movie => <MoviesListCard key={movie.id} movie={ movie} /> )} 
        </div>
    )
};

export { MoviesList };