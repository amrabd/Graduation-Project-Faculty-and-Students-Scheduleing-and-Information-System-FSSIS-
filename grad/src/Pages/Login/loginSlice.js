import { createSlice } from '@reduxjs/toolkit';

const userData = JSON.parse(localStorage.getItem('userData')) || {};
const token = localStorage.getItem('token') || null;

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            userName: userData.userName || null,
            ssn: userData.ssn || null,
            role: userData.role || null,
            schedule: userData.schedule || null,
        },
        token: token,
        error: null,
        loading: false,
    },
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user.userName = action.payload.userName;
            state.user.ssn = action.payload.ssn;
            state.user.role = action.payload.role;
            state.token = action.payload.token;
            state.token = action.payload.schedule;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user.userName = null;
            state.user.ssn = null;
            state.user.role = null;
            state.token = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
