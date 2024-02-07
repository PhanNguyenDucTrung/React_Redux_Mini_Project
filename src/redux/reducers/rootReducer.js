import { combineReducers } from 'redux';
import burgerReducer from './burgerSlice.js';

// store tổng ứng dụng

const rootReducer = combineReducers({
    // nơi sẽ chứa các reducer cho nghiệp vụ (store con)
    burger: burgerReducer,
    // bauCua: bauCuaSlice.reducer,
    // gameXucXac: gameXucXacSlice.reducer,
    // gameBauCua: gameBauCuaSlice.reducer,
    // gameDanGian: gameDanGianSlice.reducer,
    // shoppingCart: shoppingCartReducer,
    // datVe
});
export default rootReducer;
