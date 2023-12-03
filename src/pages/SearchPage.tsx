import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Search } from "../componets";
import { useAppDispatch, useAppSelector } from "../hooks";
import { moviesActions } from "../redux";

const SearchPage = () => {
   
    const dispatch = useAppDispatch();
    const { query } = useAppSelector(state => state.movies);
    const { pathname, search } = useLocation();
    
    useEffect(() => {
        if (pathname === '/search/movies') {
            dispatch(moviesActions.getSearchMovie({ query, page: search.slice(1) }));
        }
    }, [query, search, dispatch, pathname])

    return (
        <div>
            <Search />
            <Outlet />
        </div>
    )
};

export { SearchPage };