import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hooks";
import { moviesActions } from "../../redux";
import { ISearchParams } from "../../interfaces";

const Search = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigete = useNavigate();
    const dispatch = useAppDispatch();

    const search = ({ query }: ISearchParams) => {
        dispatch(moviesActions.setQuery(query));
        navigete('movies?page=1');
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input type="text" placeholder="enter word" {...register('query')} />
                <button>Search</button>
            </form>
        </div>
    )
};

export { Search };