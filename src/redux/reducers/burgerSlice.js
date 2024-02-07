import { createSlice } from '@reduxjs/toolkit';

const burgerSlice = createSlice({
    name: 'burger', // name: tên của slice
    initialState: {
        burger: { salad: 1, cheese: 1, beef: 1 },
        menu: {
            salad: 10,
            cheese: 20,
            beef: 30,
        },
        totalPrice: 60,
    },
    reducers: {
        addIngredient: (state, action) => {
            state.burger[action.payload] += 1;
            state.totalPrice += state.menu[action.payload];
        },
        removeIngredient: (state, action) => {
            if (state.burger[action.payload] > 0) {
                state.burger[action.payload] -= 1;
                state.totalPrice -= state.menu[action.payload];
            }
        },
    },
});

export const { addIngredient, removeIngredient } = burgerSlice.actions;
export default burgerSlice.reducer;
