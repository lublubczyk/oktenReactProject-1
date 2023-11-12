import { useEffect, useState, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { IGenres } from "../interfaces";
import { moviesService } from "../services";
import { GenreList } from "../components";
import { Context } from "../hok";

const GenresPage = () => {
    
    const [, [, setMovies], [genreId]] = useContext(Context);
    const { pathname, search } = useLocation();
   
    const defaultValue: IGenres = { genres: [] }
    const [genres, setGenres] = useState<IGenres>(defaultValue);

    useEffect(() => {
        moviesService.getAllGenres().then(({ data }) => setGenres(data));
    }, []);
    
    useEffect(() => {
        if (pathname === '/genres/movies') {
            moviesService.getAllGenreMovies(genreId, search).then(({ data }) => setMovies(data))
        };
    }, [genreId, setMovies, search, pathname]);
    
    return (
        <div>
            {pathname === '/genres' ? <GenreList genres={genres.genres} /> : <Outlet />}
        </div>
    )
};

export { GenresPage };