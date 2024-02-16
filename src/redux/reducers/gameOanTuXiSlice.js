import { createSlice } from '@reduxjs/toolkit';

const gameOanTuXiSlice = createSlice({
    name: 'gameOanTuXi',

    initialState: {
        mangDatCuoc: [
            { ma: 'keo', img: '../../../images/gameOanTuXi/keo.png' },
            { ma: 'bua', img: '../../../images/gameOanTuXi/bua.png' },
            { ma: 'bao', img: '../../../images/gameOanTuXi/bao.png' },
        ],
        player: {
            ma: 'keo',
            img: `../../../images/gameOanTuXi/keo.png`,
        },
        computer: {
            ma: 'keo',
            img: '../../../images/gameOanTuXi/playerComputer.png',
        },
        ketQua: 'I am iron, i love you 3000 !!!',
        soBanThang: 0,
        soBanThua: 0,
        soBanChoi: 0,
    },
    reducers: {
        selectItem: (state, action) => {
            console.log(action.payload);
            state.player.ma = action.payload;
            console.log(state.player.ma);
            state.player.img = `../../../images/gameOanTuXi/${action.payload}.png`;
        },
    },
});

export const { selectItem } = gameOanTuXiSlice.actions;
export default gameOanTuXiSlice.reducer;
