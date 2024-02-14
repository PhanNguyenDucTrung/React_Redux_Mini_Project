import { combineReducers } from 'redux';
import burgerReducer from './burgerSlice.js';
import shoppingCartReducer from './shoppingCartSlice.js';
import gameXucXacReducer from './gameXucXacSlice.js';

// store tổng ứng dụng
const rootReducer = combineReducers({
    // nơi sẽ chứa các reducer cho nghiệp vụ (store con)
    burger: burgerReducer,
    shoppingCart: shoppingCartReducer,
    gameXucXac: gameXucXacReducer,
    // bauCua: bauCuaSlice.reducer,

    // gameBauCua: gameBauCuaSlice.reducer,
    // gameDanGian: gameDanGianSlice.reducer,
    // datVe
});
export default rootReducer;
