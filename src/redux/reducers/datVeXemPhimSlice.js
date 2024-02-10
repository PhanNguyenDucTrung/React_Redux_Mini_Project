import { createSlice } from '@reduxjs/toolkit';

const burgerSlice = createSlice({
    name: 'datVeXemPhim',
    initialState: {
        danhSachGheDangDat: [],
    },
    reducers: {
        datGhe: (state, action) => {
            const index = state.danhSachGheDangDat.findIndex(ghe => ghe.soGhe === action.payload.soGhe);
            if (index !== -1) {
                state.danhSachGheDangDat.splice(index, 1);
            } else {
                state.danhSachGheDangDat.push(action.payload);
            }
        },
    },
});

export const { datGhe } = burgerSlice.actions;
export default burgerSlice.reducer;
