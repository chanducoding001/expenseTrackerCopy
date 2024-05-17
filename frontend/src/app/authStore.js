import {createSlice} from '@reduxjs/toolkit';
import { signUpData } from './authRequests';

export const responseStates = {
    loading:'idle',
    data:[],
    error:null
}
const initialState = {
    signUpData:responseStates
}

const authSlicer = createSlice({
    name:'auth slicer',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(signUpData.pending,(state)=>{
            state.signUpData.loading = 'pending'
        })
        .addCase(signUpData.fulfilled,(state,action)=>{
            state.signUpData.loading = 'fulfilled';
            state.signUpData.data = action.payload.data;
            state.signUpData.error = null;
        })
        .addCase(signUpData.rejected,(state,action)=>{
            state.signUpData.loading = 'rejected';
            state.signUpData.data = [];
            state.signUpData.error = action.payload;
        })

    }
})

export const authReducer = authSlicer.reducer;