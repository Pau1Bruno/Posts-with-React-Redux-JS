import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id: 0, name: 'Дима'},
    {id: 1, name: 'Артём'},
    {id: 2, name: 'Лиза'},
]


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})


export default usersSlice.reducer;