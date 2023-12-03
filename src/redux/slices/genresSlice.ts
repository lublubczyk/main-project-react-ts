import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { moviesService } from '../../services';
import { IGenres, IError } from '../../interfaces';

interface IState {
    genres: IGenres | null;
    genreId: number | null;
    errors: IError;
    isLoading: boolean;
};

const initialState: IState = {
    genres: null,
    genreId: null,
    errors: null,
    isLoading:null
};

const getAllGenres = createAsyncThunk<IGenres, void>(
    'genresSlice/getAllGenres',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await moviesService.getAllGenres();
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data)
        };
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        setGenreId: (state, action) => {
            state.genreId = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.isLoading = false;
                state.errors = null;
            })
            .addCase(getAllGenres.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllGenres.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })
});

const { reducer: genresReducer, actions } = genresSlice;

const genresActions = { ...actions, getAllGenres };

export { genresReducer, genresActions };