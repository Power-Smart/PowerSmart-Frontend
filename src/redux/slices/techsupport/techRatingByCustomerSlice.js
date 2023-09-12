import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTechSupportRatingByCustomerApi } from "../../../api/apiTechSupportRatingByCustomer";

export const getTechSupportRatingByCustomer = createAsyncThunk(
    "techSupportRatingByCustomer/getTechSupportRatingByCustomer",
    async (techSupportId, thunkAPI) => {
        try {
            const response = await getTechSupportRatingByCustomerApi(techSupportId);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

const initialState = {
    techSupportRatingByCustomer: [],
    status: "idle",
    error: null,
};

export const techSupportRatingByCustomerSlice = createSlice({
    name: "techSupportRatingByCustomer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTechSupportRatingByCustomer.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getTechSupportRatingByCustomer.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.techSupportRatingByCustomer = action.payload;
            })
            .addCase(getTechSupportRatingByCustomer.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const selectTechSupportRatingByCustomer = (state) => state.techSupportRatingByCustomer.techSupportRatingByCustomer;
export const selectTechSupportRatingByCustomerStatus = (state) => state.techSupportRatingByCustomer.status;
export default techSupportRatingByCustomerSlice.reducer;