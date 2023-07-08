import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    token: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            const { name, email, token } = action.payload;
            state.name = name;
            state.email = email;
            state.token = token;
        },
    },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
