import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { useAppDispatch,useAppSelector } from "../hooks";
import { genresActions, moviesActions } from '../redux';

const GenresPage = () => {

    const dispatch = useAppDispatch();
    const { genres, genreId: id } = useAppSelector(state => state.genres);
    const { pathname, search: page } = useLocation();
    
    useEffect(() => {
        if (!genres) dispatch(genresActions.getAllGenres());
    }, [genres, dispatch]);

    useEffect(() => {
        if (pathname === '/genres/movies') {
            dispatch(moviesActions.getAllGenreMovies({ id, page }));
        }
    }, [id, page, pathname, dispatch])

    return (
        <div>
            <Outlet />
        </div>
    )
};

export { GenresPage };