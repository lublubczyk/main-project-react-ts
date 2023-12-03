import { createSlice, createAsyncThunk, isFulfilled, isRejected, isPending } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { moviesService } from '../../services';
import { IMovies, IParams, ISearchParams, IError } from '../../interfaces';

interface IState {
    movies: IMovies | null;
    query: string | null;
    errors: IError | null;
    isLoading: boolean;
};

const initialState: IState = {
    movies: null,
    query: null,
    errors: null,
    isLoading: null
};

const getAll = createAsyncThunk<IMovies, string>(
    'moviesSlice/getAll',
    async (page, { rejectWithValue }) => {
        try {
            const { data } = await moviesService.getAllMovies(page);
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data)
        }
    }
);

const getAllGenreMovies = createAsyncThunk<IMovies, IParams>(
    'moviesSlice/getAllGenreMovies',
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await moviesService.getAllGenreMovies(params);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
);

const getSearchMovie = createAsyncThunk<IMovies, ISearchParams>(
    'moviesSlice/getSearchMovie',
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await moviesService.searchMovie(params);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getAllGenreMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getSearchMovie.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addMatcher(isFulfilled(getAll, getAllGenreMovies, getSearchMovie), state => {
                state.isLoading = false;
                state.errors = null
            })
            .addMatcher(isRejected(getAll, getAllGenreMovies, getSearchMovie), (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })
            .addMatcher(isPending(getAll, getAllGenreMovies, getSearchMovie), state => {
                state.isLoading = true;
            })
});

const { reducer: moviesReduser, actions } = moviesSlice;

const moviesActions = { ...actions, getAll, getAllGenreMovies, getSearchMovie };

export { moviesReduser, moviesActions };