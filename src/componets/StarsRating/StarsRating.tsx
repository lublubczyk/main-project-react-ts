import { FC } from "react";
import ReactStars from 'react-rating-stars-component';
import { useLocation } from "react-router-dom";

interface IProps { voteAverage: number };

const StarsRating: FC<IProps> = ({ voteAverage }) => {

    const { pathname } = useLocation();
    const size = pathname.endsWith('info') ? 50 : 25;

    return (
        <div>
            <ReactStars
                count={10}
                isHalf={true}
                value={voteAverage}
                size={size}
                edit={false}
                color={'gold'}
                activeColor={'blue'}
            />
        </div>
    )
};

export { StarsRating };