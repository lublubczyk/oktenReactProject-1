import ReactStars from "react-rating-stars-component";
import { FC } from "react";
import { useLocation } from "react-router-dom";

interface IProps {
    vote_average:number
}

const StarsRating: FC<IProps> = ({ vote_average }) => {
    
    const {pathname} = useLocation();
    const size = pathname.endsWith('info') ? 50 : 25;

    return (
        <div>
            <ReactStars
                count={10}
                isHalf={true}
                value={vote_average}
                size={size}
                edit={false}
                color={'gold'}
                activeColor={'blue'}
            />
        </div>
    )
};

export { StarsRating };