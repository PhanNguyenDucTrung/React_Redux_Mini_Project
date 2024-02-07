import { createSlice } from '@reduxjs/toolkit';

const bauCuaSlice = createSlice({
    // createSlice() tạo ra một slice
    name: 'bauCua', // name: tên của slice

    initialState: {
        // initialState: giá trị ban đầu của slice

        danhSachCuoc: [
            { ma: 'cua', hinhAnh: './img/cua.png', diemCuoc: 0 },
            { ma: 'ca', hinhAnh: './img/ca.png', diemCuoc: 0 },
            { ma: 'tom', hinhAnh: './img/tom.png', diemCuoc: 0 },
            { ma: 'nai', hinhAnh: './img/nai.png', diemCuoc: 0 },
            { ma: 'ga', hinhAnh: './img/ga.png', diemCuoc: 0 },
            { ma: 'bau', hinhAnh: './img/bau.png', diemCuoc: 0 },
        ],
        diemThuong: 1000, // diemThuong: điểm thưởng ban đầu
        diemCuoc: 0, // diemCuoc: điểm cược ban đầu
    }, // initialState: giá trị ban đầu của slice

    reducers: {
        // reducers: chứa các hàm reducers

        tangGiamCuoc: (state, action) => {
            // tangGiamCuoc: hàm reducer tăng giảm cược

            let index = state.danhSachCuoc.findIndex(item => item.ma === action.payload.ma); // tìm index của item có ma trùng với ma của action.payload trong danhSachCuoc

            if (index !== -1) {
                // nếu index khác -1

                if (action.payload.tangGiam) {
                    // nếu action.payload.tangGiam là true

                    if (state.diemCuoc >= state.diemThuong) {
                        // nếu state.diemCuoc lớn hơn hoặc bằng state.diemThuong

                        state.diemCuoc += action.payload.tangGiam ? 100 : -100; // state.diemCuoc tăng 100, ngược lại giảm 100

                        state.danhSachCuoc[index].diemCuoc += action.payload.tangGiam ? 100 : -100; // state.danhSachCuoc[index].diemCuoc tăng 100, ngược lại giảm 100
                    }
                }
            }

            return state; // trả về state
        }, // tangGiamCuoc: hàm reducer tăng giảm cược
    }, // reducers: chứa các hàm reducers
}); // createSlice() tạo ra một slice

export const { actions: bauCuaSliceActions, reducer: bauCuaReducer } = bauCuaSlice; // lấy ra actions và reducer từ bauCuaSlice
