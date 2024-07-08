import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { loadState, saveState } from '../utils/localStorage';

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    preloadedState
});

// Save the state to localStorage whenever it changes
store.subscribe(() => {
    saveState(store.getState());
});

export default store;
