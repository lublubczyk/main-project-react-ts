import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { useAppDispatch } from "../hooks";
import { moviesActions } from '../redux';

const MoviesPage = () => {

    const dispatch = useAppDispatch();
    const { search } = useLocation();
    
    useEffect(() => {
        dispatch(moviesActions.getAll(search));
    }, [dispatch, search])
    
    return (
        <div>
            <Outlet />
        </div>
    )
};

export { MoviesPage };