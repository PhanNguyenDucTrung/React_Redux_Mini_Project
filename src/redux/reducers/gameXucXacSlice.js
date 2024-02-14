import { createSlice } from '@reduxjs/toolkit';

const gameXucXacSlice = createSlice({
    name: 'gameXucXac',

    initialState: {
        xucXac: [1, 2, 3],
        trangThai: true,
        soBanThang: 0,
        soBanChoi: 0,
    },

    reducers: {
        changeTrangThai: (state, action) => {
            state.trangThai = action.payload;
        },

        playGame: state => {
            const xucXac1 = Math.floor(Math.random() * 6) + 1;
            const xucXac2 = Math.floor(Math.random() * 6) + 1;
            const xucXac3 = Math.floor(Math.random() * 6) + 1;
            state.xucXac = [xucXac1, xucXac2, xucXac3];
            state.soBanChoi += 1;
            let tongDiem = xucXac1 + xucXac2 + xucXac3;

            if (state.trangThai === true && tongDiem >= 11 && tongDiem <= 18) {
                state.soBanThang += 1;
            }
            if (state.trangThai === false && tongDiem < 11) {
                state.soBanThang += 1;
            }
        },
    },
});

export const { playGame, changeTrangThai } = gameXucXacSlice.actions;
export default gameXucXacSlice.reducer;
