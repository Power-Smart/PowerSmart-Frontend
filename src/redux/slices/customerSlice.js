import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCustomerApi, updateCustomerProfileApi } from "../../api/apiUser";

export const fetchCustomer = createAsyncThunk(
    "customer/fetchCustomer",
    async (param) => {
        const response = await getCustomerApi(param);
        return response.data;
    }
);

export const updateCustomerProfile = createAsyncThunk(
    "customer/updateCustomerProfile",
    async (data, thunkAPI) => {
        const response = await updateCustomerProfileApi(data);
        if (response.status === 200) {
            // console.log("response : ", response.data);
            return response.data;
        } else {
            console.log("error : ", response.data);
            return thunkAPI.rejectWithValue({ error: response.data });
        }
    }
);



const initialState = {
    points: null,
    year_subscription: null,
    tel_no: [],
    address: null,
    is_banned: false,
    profile_pic: null,
    achievements: [],
    first_name: "",
    last_name: "",

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

                state.first_name = data.first_name;
                state.last_name = data.last_name;
            })
            .addCase(fetchCustomer.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(updateCustomerProfile.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateCustomerProfile.fulfilled, (state, action) => {
                state.status = "succeeded";
                const data = action.payload;
                state.tel_no = data.tel_no;
                state.address = data.address;
            })
            .addCase(updateCustomerProfile.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const selectCustomer = (state) => state.customer;

export default userSlice.reducer;
