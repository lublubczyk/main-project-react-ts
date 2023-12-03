import { Navigate, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from './layouts';
import { GenresPage, MoviesPage, SearchPage } from './pages';
import { GenresList, MovieInfo, MoviesList } from './componets';

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [
            { index: true, element: <Navigate to={'movies?page=1'} /> },
            {
                path: 'movies', element: <MoviesPage />, children: [
                    { path: '', element: <MoviesList /> },
                    { path: 'info', element: <MovieInfo /> }
                ]
            },
            {
                path: 'genres', element: <GenresPage />, children: [
                    { path: '', element: <GenresList /> },
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