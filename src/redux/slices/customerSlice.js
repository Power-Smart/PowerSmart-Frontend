import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    points: null,
    year_subscription: null,
    tel_no: [],
    address: null,
    is_banned: false,
    profile_pic: null,
    achievements: [],
};

export const userSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        getCustomer: (state, action) => {
            const data = action.payload;
            
            state.points = data.points;
            state.year_subscription = data.year_subscription;
            state.tel_no = data.tel_no;
            state.address = data.address;
            state.is_banned = data.is_banned;
            state.profile_pic = data.profile_pic;
            state.achievements = data.achievements;
            state.id = data.id;
        },
    },
});

export const { getCustomer } = userSlice.actions;

export default userSlice.reducer;
