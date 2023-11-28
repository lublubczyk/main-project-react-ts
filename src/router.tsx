import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts';
import { GenresPage, MoviesPage, SearchPage } from './pages';


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [
            { index: true, element: <Navigate to={'movies?page=1'} /> },
            { path: 'movies', element: <MoviesPage /> },
            { path: 'genres', element: <GenresPage /> },
            { path: 'search', element: <SearchPage /> }
        ]
    }
]);

export { router };