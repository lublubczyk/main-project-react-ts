import { Pagination } from "@mui/material";
import { useLocation,useNavigate } from "react-router-dom";

import style from './Footer.module.css';
import { useAppSelector } from "../../hooks";

const Footer = () => {
    const { movies } = useAppSelector(state => state.movies);
    const { pathname, search } = useLocation();
    const navigate = useNavigate();
    
    const page = +search.split('=').reverse()[0];
    const count = movies ? movies.total_pages < 500 ? movies.total_pages : 500 : 500;

    const change = (_: any, num: number) => {
        navigate(`${pathname}?page=${num}`);
    };

    return (
        <div className={style.Footer} >
            {pathname.endsWith('movies') ?
                <Pagination
                    count={count}
                    page={page}
                    onChange={change}
                />
                : <h1>{pathname.slice(1)}</h1>}
        </div>
    )
};

export { Footer };