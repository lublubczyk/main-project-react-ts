import { configureStore } from "@reduxjs/toolkit";

import { genresReducer, movieInfoReduser, moviesReduser, triggerReducer } from "./slices";

const store = configureStore({
    reducer: {
        movies: moviesReduser,
        movieInfo: movieInfoReduser,
        genres: genresReducer,
        triggers: triggerReducer
    }
});

export { store };