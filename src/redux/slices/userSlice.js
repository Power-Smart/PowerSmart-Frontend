import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
    isLogged: false,
    user: {
        id: null,
        first_name: "",
        last_name: "",
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
                const { first_name, last_name, email, role, id } =
                    jwtDecode(token);
                state.user.id = id;
                state.user.first_name = first_name;
                state.user.last_name = last_name;
                state.user.email = email;
                state.user.role = role;
                state.isLogged = true;
            }
        },
        session: (state) => {
            let token = localStorage.getItem("token");
            if (token) {
                const { first_name, last_name, email, role, id } =
                    jwtDecode(token);
                state.user.id = id;
                state.user.first_name = first_name;
                state.user.last_name = last_name;
                state.user.email = email;
                state.isLogged = true;
                state.user.role = role;
            }
        },
        logout: (state) => {
            localStorage.removeItem("token");
            state.user.id = null;
            state.user.first_name = "";
            state.user.last_name = "";
            state.user.email = "";
            state.user.role = 0;
            state.isLogged = false;
        },
        updateName: (state, action) => {
            state.user.name = action.payload;
        },
        completeProfileInfo: (state, action) => {
            state.user.id = action.payload;
        },
    },
});

export const { login, session, logout, updateName, completeProfileInfo } =
    userSlice.actions;
export const selectUserID = (state) => state.user.user.id;

export default userSlice.reducer;
