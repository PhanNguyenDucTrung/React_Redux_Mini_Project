import { createSlice } from '@reduxjs/toolkit';

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const index = state.findIndex(product => product.id === action.payload.id);
            if (index >= 0) {
                state[index].quantity += 1;
                return state;
            }
            state.push(action.payload);
            state[state.length - 1].quantity = 1;
        },
        decreaseQuantity: (state, action) => {
            const index = state.findIndex(product => product.id === action.payload);
            if (index >= 0 && state[index].quantity > 1) {
                state[index].quantity -= 1;
                return state;
            }
            return state;
        },

        removeProductCart: (state, action) => {
            return state.filter(product => product.id !== action.payload);
        },
    },
});

export const { addToCart, decreaseQuantity, removeProductCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
