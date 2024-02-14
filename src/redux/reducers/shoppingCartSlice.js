import { createSlice } from '@reduxjs/toolkit';

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);

            if (itemIndex >= 0) {
                // We're "mutating" the existing item by creating a new object based on the old one
                state[itemIndex] = {
                    ...state[itemIndex],
                    quantity: state[itemIndex].quantity + 1,
                };
            } else {
                // We're adding a new item to the cart
                state.push({ ...action.payload, quantity: 1 });
            }
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
