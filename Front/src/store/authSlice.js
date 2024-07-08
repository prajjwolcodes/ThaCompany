import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: ""
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state, action) => {
            state.user = null;
            state.token = "";
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
})

export const { login, logout, setToken } = authSlice.actions
export default authSlice.reducer