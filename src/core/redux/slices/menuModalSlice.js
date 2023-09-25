import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    openModal : false,
}
const menuModalSlice = createSlice({
    name: 'menuModal',
    initialState,
    reducers: {
        openMenuModal: (state) => {
            state.openModal = true;
        },
        closeMenuModal: (state) => {
            state.openModal = false;
        }
    }
})

export const {openMenuModal, closeMenuModal} = menuModalSlice.actions;

export const selectIsMenuModalOpen = (state) => state.menuModal.openModal;

export default menuModalSlice.reducer;
