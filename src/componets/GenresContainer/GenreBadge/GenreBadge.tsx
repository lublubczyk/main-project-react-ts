import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IGenre } from '../../../interfaces';
import style from './GenreBadge.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { genresActions } from '../../../redux';

interface IProps { genre: IGenre };

const GenreBadge: FC<IProps> = ({ genre: { id, name } }) => {
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { themeTrigger } = useAppSelector(state => state.triggers);
    
    const themeStyle = themeTrigger ? `${style.GenreBadge} ${style.Dark}` : style.GenreBadge;
     
    const show = () => {
        dispatch(genresActions.setGenreId(id));
        navigate('movies?page=1');
    };

    return (
        <div className={themeStyle} onClick={show} >
            <h2>{name}</h2>
        </div>
    )
};

export { GenreBadge };