import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
    isLogged: false,
    user: {
        name: "",
        email: "",
        role: 0,
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            const { token } = action.payload;
            if (token) {
                const { name, email, role } = jwtDecode(token);
                state.user.name = name;
                state.user.email = email;
                state.user.role = role;
                state.isLogged = true;
            }
        },
        session: (state) => {
            let token = localStorage.getItem("token");
            if (token) {
                const { name, email, role } = jwtDecode(token);
                state.user.name = name;
                state.user.email = email;
                state.isLogged = true;
                state.user.role = role;
            }
        },
        logout: (state) => {
            state.user.name = "";
            state.user.email = "";
            state.user.role = 0;
            state.isLogged = false;
        },
    },
});

export const { login, session, logout } = userSlice.actions;

export default userSlice.reducer;
