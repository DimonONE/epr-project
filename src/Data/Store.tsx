import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productCard from './reducer/productСard';

const rootReducer = combineReducers({
    productCard,
});

export const Store = () => configureStore({
        reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof Store>
export type AppDispatch = AppStore['dispatch']
