import {createAsyncThunk} from '@reduxjs/toolkit';
import { baseUrl } from './utils';

export const signUpData = createAsyncThunk('sign up',async (payload,thunkApi)=>{

    const response = await fetch(baseUrl+'signUp',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            // 'Authorization':`Bearer ${token}`
        },
        body:JSON.stringify(payload)
    });
    const data = await response.json();
    if(!response.ok) return thunkApi.rejectWithValue(data.error);
    return data;
    
})