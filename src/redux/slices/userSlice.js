import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    token: "",
    isLogged: false,
    role: 0,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            const { name, email, token, role } = action.payload;
            state.name = name;
            state.email = email;
            state.token = token;
            state.isLogged = true;
            state.role = role;
        },
        session: (state) => {
            const name = localStorage.getItem("name");
            const email = localStorage.getItem("email");
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("role");
            if (token) {
                state.name = name;
                state.email = email;
                state.token = token;
                state.isLogged = true;
                state.role = role;
            }
        },
        logout: (state) => {
            state.name = "";
            state.email = "";
            state.token = "";
            state.isLogged = false;
            state.role = 0;
        },
    },
});

export const { login, session, logout } = userSlice.actions;

export default userSlice.reducer;
