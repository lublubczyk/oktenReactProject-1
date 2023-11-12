import { Outlet, useLocation } from "react-router-dom";
import { useEffect,useContext } from 'react';

import { moviesService } from "../services";
import { Context } from "../hok";
import { Search } from "../components";

const SearchPage = () => {
    
    const [[query], [, setMovies]] = useContext(Context);
    const { search, pathname } = useLocation();
    
    useEffect(() => {
        if (pathname === '/search/movies') {
            moviesService.searchMovie(query, search.slice(1)).then(({ data }) => setMovies(data))
        };
    }, [query, search, setMovies, pathname]);

    return (
        <div>
            <Search />
            <Outlet />
        </div>
    )
};

export { SearchPage };