import { createSlice } from '@reduxjs/toolkit';

const gameOanTuXiSlice = createSlice({
    name: 'gameOanTuXi',

    initialState: {
        mangDatCuoc: [
            { ma: 'keo', img: '../../../images/gameOanTuXi/keo.png', datCuoc: true },
            { ma: 'bua', img: '../../../images/gameOanTuXi/bua.png', datCuoc: false },
            { ma: 'bao', img: '../../../images/gameOanTuXi/bao.png', datCuoc: false },
        ],
        player: {
            ma: 'keo',
            img: `../../../images/gameOanTuXi/keo.png`,
        },
        computer: {
            ma: 'keo',
            img: '../../../images/gameOanTuXi/keo.png',
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
            state.mangDatCuoc = state.mangDatCuoc.map(item => {
                if (item.ma === action.payload) {
                    return { ...item, datCuoc: true };
                }
                return { ...item, datCuoc: false };
            });
            state.player.img = `../../../images/gameOanTuXi/${action.payload}.png`;
        },
        playGame: state => {
            let computerRandom = Math.floor(Math.random() * 3);
            let itemComputer = state.mangDatCuoc[computerRandom];
            state.computer = itemComputer;
            state.computer.img = `../../../images/gameOanTuXi/${itemComputer.ma}.png`;
            console.log(state.computer);
            state.soBanChoi++;
            switch (state.player.ma) {
                case 'keo':
                    if (itemComputer.ma === 'keo') {
                        state.ketQua = 'Hòa nhau !!!';
                    } else if (itemComputer.ma === 'bua') {
                        state.ketQua = 'Thua sml !!!';
                        state.soBanThua++;
                    } else {
                        state.ketQua = 'I am iron, i love you 3000 !!!';
                        state.soBanThang++;
                    }
                    break;
                case 'bua':
                    if (itemComputer.ma === 'keo') {
                        state.ketQua = 'I am iron, i love you 3000 !!!';
                        state.soBanThang++;
                    } else if (itemComputer.ma === 'bua') {
                        state.ketQua = 'Hòa nhau !!!';
                    } else {
                        state.ketQua = 'Thua sml !!!';
                        state.soBanThua++;
                    }
                    break;
                case 'bao':
                    if (itemComputer.ma === 'keo') {
                        state.ketQua = 'Thua sml !!!';
                        state.soBanThua++;
                    } else if (itemComputer.ma === 'bua') {
                        state.ketQua = 'I am iron, i love you 3000 !!!';
                        state.soBanThang++;
                    } else {
                        state.ketQua = 'Hòa nhau !!!';
                    }
                    break;
                default:
                    state.ketQua = 'I am iron, i love you 3000 !!!';
            }
        },
    },
});

export const { selectItem, playGame } = gameOanTuXiSlice.actions;
export default gameOanTuXiSlice.reducer;
