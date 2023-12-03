import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IMovie } from "../../../interfaces";
import { PosterPreview } from '../PosterPreview';
import { StarsRating } from '../../StarsRating';
import style from './MoviesListCard.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { movieInfoActions } from '../../../redux';

interface IProps { movie: IMovie };

const MoviesListCard: FC<IProps> = ({ movie }) => {
    
    const { id, title, vote_average, poster_path } = movie;
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {themeTrigger} = useAppSelector(state => state.triggers);

    const themeStyle = themeTrigger ? `${style.MoviesListCards} ${style.Dark}` : style.MoviesListCards;

    const showInfo = async () => {
        await dispatch(movieInfoActions.getMovieInfo(id.toString()));
        navigate(`/movies/info?${id}`);
    };

    return (
        <div className={themeStyle} onClick={showInfo} >
            <PosterPreview posterPath={poster_path } />
            <div>{title}</div>
            <StarsRating voteAverage={vote_average}/>
        </div>
    )
};

export { MoviesListCard };