import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:"test Data"
}

const testSlice=createSlice({
    name:'test',
    initialState
})

export default testSlice.reducer;