import { Navigate, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "./layouts";
import { MoviesPage, GenresPage, SearchPage } from "./pages";
import { MovieInfo, MoviesList } from "./components";

const router = createBrowserRouter([
    {
        path: '', element: < MainLayout />, children: [
            { index: true, element: <Navigate to={'movies?page=1'} /> },
            {
                path: 'movies', element: <MoviesPage />, children: [
                    { path: 'info', element: <MovieInfo /> }
                ]
            },
            {
                path: 'genres', element: <GenresPage />, children: [
                    { path: 'movies', element: <MoviesList /> }
                ]
            },
            {
                path: 'search', element: <SearchPage />, children: [
                    { path: 'movies', element: <MoviesList /> }
                ]
            }
        ]
    }
]);

export { router };