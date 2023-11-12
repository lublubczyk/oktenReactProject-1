import { useContext } from "react";

import { MovieListCards } from "../MoviesListCards";
import { IMovie } from "../../../interfaces";
import { Context } from "../../../hok";
import style from './MoviesList.module.css';

const MoviesList = () => {
    
    const context = useContext(Context);
    const [movies] = context[1]
    
    return (
        <div className={style.MoviesList}>
            {movies.results.map((movie: IMovie) => <MovieListCards key={movie.id} movie={movie} />)}
        </div>
         
    )
};

export { MoviesList };