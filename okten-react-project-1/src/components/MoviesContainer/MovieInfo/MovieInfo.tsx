import { useLocation } from "react-router-dom";

import { PosterPreview } from "../PosterPreview";
import { StarsRating } from "../../StarsRating";
import { IGenre } from "../../../interfaces";
import style from './MovieInfo.module.css';

const MovieInfo = () => {
    
    const { state: movieInfo } = useLocation();
    const { poster_path, title, overview, vote_average, release_date, genres, runtime } = movieInfo;
    
    return (
        <div className={style.MovieInfo} >
            <div className={style.PosterContainer}>
                <PosterPreview posterPath={poster_path} />
            </div>
            <div className={style.InfoContainer} >
                <h1>{title}</h1>
                <StarsRating vote_average={vote_average} />
                <h3>Release date: {release_date}</h3>
                <h3>Runtime: {runtime} min</h3>
                <h3>Genres:</h3>
                <div className={style.Genres} >
                    {genres.map((genre: IGenre) => <h2 key={genre.id}> {genre.name} </h2>)}
                </div>
                <h3>Overview:</h3>
                <p> {overview}</p>
            </div>
        </div >
    )
};

export { MovieInfo };