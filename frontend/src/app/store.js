import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from './authStore';

const store = configureStore({

    reducer:{authReducer}
})

export default store;