import {configureStore} from "@reduxjs/toolkit";
import menuModalReducer from '../redux/slices/menuModalSlice';

const store = configureStore({
    devTools: true,
    reducer : {
        menuModal: menuModalReducer,
    }
})

export default store;
