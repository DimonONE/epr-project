import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductCards } from '../models/IProductCard';

const initialState: IProductCards = {
    isWholeScreen: false,
};

export const productCardSlice = createSlice({
    name: 'productCard',
    initialState,
    reducers: {
        wholeScreen: (state, action: PayloadAction<boolean>) => {
            state.isWholeScreen = action.payload;
        },
    },
});

export default productCardSlice.reducer;
