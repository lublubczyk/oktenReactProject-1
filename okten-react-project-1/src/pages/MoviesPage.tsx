import { useContext,useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Context } from "../hok";
import { moviesService } from "../services";
import { MoviesList } from "../components";

const MoviesPage = () => {

    const [, [, setMovies]] = useContext(Context);
    const { pathname,search } = useLocation();
    
    useEffect(() => {
        moviesService.getAll(search).then(({ data }) => setMovies(data));
    }, [setMovies, search]);
    
    return (
        <div>
            {pathname === '/movies' ? <MoviesList /> : <Outlet />}
        </div>
    )
};

export { MoviesPage };