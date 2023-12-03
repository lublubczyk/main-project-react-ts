import { createSlice } from "@reduxjs/toolkit";

interface IState {
    themeTrigger: boolean;
};

const initialState: IState = {
    themeTrigger: null
};

const triggerSlice = createSlice({
    name: 'triggerSlice',
    initialState,
    reducers: {
        setThemeTrigger: (state) => {
            state.themeTrigger = !state.themeTrigger;
        }
    }
});


const { reducer: triggerReducer, actions: triggerActions } = triggerSlice;


export { triggerActions, triggerReducer };