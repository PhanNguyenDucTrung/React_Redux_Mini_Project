import { combineReducers } from 'redux';
import burgerReducer from './burgerSlice.js';
import shoppingCartReducer from './shoppingCartSlice.js';
import gameXucXacReducer from './gameXucXacSlice.js';
import gameOanTuXiReducer from './gameOanTuXiSlice.js';
import toDoListReducer from './toDoListSlice.js';

// store tổng ứng dụng
const rootReducer = combineReducers({
    // nơi sẽ chứa các reducer cho nghiệp vụ (store con)
    burger: burgerReducer,
    shoppingCart: shoppingCartReducer,
    gameXucXac: gameXucXacReducer,
    gameOanTuXi: gameOanTuXiReducer,
    toDoList: toDoListReducer,
    // bauCua: bauCuaSlice.reducer,
    // gameBauCua: gameBauCuaSlice.reducer,
    // datVe
});
export default rootReducer;
