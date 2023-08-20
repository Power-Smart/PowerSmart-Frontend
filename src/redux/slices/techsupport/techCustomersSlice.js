import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCustomersApi } from "../../../api/apiTechAssigns";

export const fetchData = createAsyncThunk(
    "techCustomers/fetchData",
    async (userID, thunkAPI) => {
        try {
            const response = await getCustomersApi(userID);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

const initialState = {
    customers: [],
    status: "idle",
    error: null,
};

export const techCustomersSlice = createSlice({
    name: "techCustomers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.customers = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});
export const selectCustomers = (state) => state.techCustomers.customers;
export const selectStatus = (state) => state.techCustomers.status;
export default techCustomersSlice.reducer;
