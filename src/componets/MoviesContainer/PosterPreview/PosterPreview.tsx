import { FC } from "react";

import { urls } from "../../../constants";
import style from './PosterPreview.module.css';

interface IProps { posterPath: string };

const PosterPreview: FC<IProps> = ({ posterPath }) => {
    return (
        <div>
            <img
                src={urls.baseURL.poster + posterPath}
                alt='File Not Found'
                className={style.PosterPreview}
            />
        </div>
    )
};

export { PosterPreview };