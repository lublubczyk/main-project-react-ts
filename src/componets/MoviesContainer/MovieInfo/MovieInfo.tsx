import { useAppSelector } from "../../../hooks";
import { StarsRating } from "../../StarsRating";
import { PosterPreview } from "../PosterPreview";
import { IGenre } from "../../../interfaces";
import style from './MovieInfo.module.css';

const MovieInfo = () => {

    const { triggers: { themeTrigger }, movieInfo: { movieInfo, errors, isLoading } } = useAppSelector(state => state);
    
    const themeStyle = themeTrigger ? `${style.InfoContainer} ${style.Dark}` : style.InfoContainer;
    
    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            {errors && <h1>{errors.status_message} Something went wrong!</h1>}
            
            {movieInfo && <div className={style.MovieInfo}>
                <div className={style.PosterContainer}>
                    <PosterPreview posterPath={movieInfo.poster_path} />
                </div>
                <div className={themeStyle}>
                    <h1>{movieInfo.title}</h1>
                    <StarsRating voteAverage={movieInfo.vote_average} />
                    <h3>Release date: {movieInfo.release_date}</h3>
                    <h3>Runtime: {movieInfo.runtime}</h3>
                    <h3>Genres:</h3>
                    <div className={style.Genres}>
                        {movieInfo.genres.map((genre: IGenre) => <h2 key={genre.id} >{genre.name}</h2>)}
                    </div>
                    <h3>Overview:</h3>
                    <p>{movieInfo.overview}</p>
                </div>
            </div>}
        </>
    )
};

export { MovieInfo };