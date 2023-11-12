import { FC} from "react";
import { useNavigate } from "react-router-dom";

import { IMovie } from "../../../interfaces";
import { PosterPreview } from "../PosterPreview";
import { StarsRating } from "../../StarsRating";
import { moviesService } from "../../../services";
import style from './MoviesListCards.module.css';

interface IProps { movie: IMovie };

const MovieListCards: FC<IProps> = ({ movie }) => {
    
    const { id, vote_average, title, poster_path } = movie;
    const navigate = useNavigate();
    
    const click = async () => {
        const { data } = await moviesService.getMovieInfo(id.toString())
        navigate(`/movies/info?${id}`, { state: data })
    };

    return (
        <div className={style.MoviesListCards} onClick={click}>
            <PosterPreview posterPath={poster_path} />
            {title}
            <StarsRating vote_average={vote_average} />
        </div>
    )
};

export { MovieListCards };