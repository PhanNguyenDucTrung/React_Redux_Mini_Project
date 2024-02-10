import { combineReducers } from 'redux';
import burgerReducer from './burgerSlice.js';
import shoppingCartReducer from './shoppingCartSlice.js';

// store tổng ứng dụng
const rootReducer = combineReducers({
    // nơi sẽ chứa các reducer cho nghiệp vụ (store con)
    burger: burgerReducer,
    shoppingCart: shoppingCartReducer,
    // bauCua: bauCuaSlice.reducer,
    // gameXucXac: gameXucXacSlice.reducer,
    // gameBauCua: gameBauCuaSlice.reducer,
    // gameDanGian: gameDanGianSlice.reducer,
    // datVe
});
export default rootReducer;
