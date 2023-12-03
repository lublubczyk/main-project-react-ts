import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IMovieInfo, IError } from "../../interfaces";
import { moviesService } from "../../services";

interface IState {
    movieInfo: IMovieInfo | null;
    errors: IError | null;
    isLoading: boolean;
};

const initialState: IState = {
    movieInfo: null,
    errors: null,
    isLoading: null
};

const getMovieInfo = createAsyncThunk<IMovieInfo, string>(
    'movieInfoSlice/getMovieInfo',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await moviesService.getMovieInfo(id);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        };
    }
);

const movieInfoSlice = createSlice({
    name: 'movieInfoSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovieInfo.fulfilled, (state, action) => {
                state.movieInfo = action.payload;
                state.isLoading = false;
                state.errors = null;
            })
            .addCase(getMovieInfo.pending, state => {
                state.isLoading = true;
            })
            .addCase(getMovieInfo.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })
});

const {reducer: movieInfoReduser, actions } = movieInfoSlice;

const movieInfoActions = { ...actions, getMovieInfo };

export { movieInfoReduser, movieInfoActions };