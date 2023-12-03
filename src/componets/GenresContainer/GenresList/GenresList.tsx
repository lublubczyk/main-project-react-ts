import { useAppSelector } from "../../../hooks";
import { GenreBadge } from "../GenreBadge";
import style from './GenresList.module.css';

const GenresList = () => {

    const { genres, errors, isLoading } = useAppSelector(state => state.genres);

    return (
        <div className={style.GenresList}>
            {isLoading && <h1>Loading...</h1>}
            {errors && <h1>{errors.status_message} Something went wrong!</h1>}
            {!isLoading && genres && genres.genres.map(genre=> <GenreBadge key={genre.id} genre={genre}/>)}
        </div>
    )
};

export { GenresList };