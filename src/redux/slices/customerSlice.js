import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCustomerApi } from "../../api/apiUser";

export const fetchCustomer = createAsyncThunk(
    "customer/fetchCustomer",
    async (param) => {
        const response = await getCustomerApi(param);
        return response.data;
    }
);

const initialState = {
    id: null,
    points: null,
    year_subscription: null,
    tel_no: [],
    address: null,
    is_banned: false,
    profile_pic: null,
    achievements: [],

    status: "idle",
    error: null,
};

export const userSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCustomer.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCustomer.fulfilled, (state, action) => {
                state.status = "succeeded";
                const data = action.payload;
                state.points = data.points;
                state.year_subscription = data.year_subscription;
                state.tel_no = data.tel_no;
                state.address = data.address;
                state.is_banned = data.is_banned;
                state.profile_pic = data.profile_pic;
                state.achievements = data.achievements;
                state.id = data.customer_id;
            })
            .addCase(fetchCustomer.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const selectCustomer = (state) => state.customer;

export default userSlice.reducer;
