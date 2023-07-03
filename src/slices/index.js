import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    avis: JSON.parse(localStorage.getItem("avis")) || [],
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
    },
});

export const { createAvis, addAvis } = dataSlice.actions;

export default dataSlice.reducer;
