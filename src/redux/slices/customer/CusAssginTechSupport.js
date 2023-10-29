import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAssignedTechSupportForCustomerApi } from "../../../api/apiCusAssginTechSupport";

export const fetchAssignedTechSupportForCustomer = createAsyncThunk(
    "customer/fetchAssignedTechSupportForCustomer",
    async (customerID) => {
        const response = await getAssignedTechSupportForCustomerApi(customerID);
        return response.data;
    }
);

const initialState = {
    assignedTechSupport: [],
    status: "idle",
    error: null,
};

export const cusAssginTechSupportSlice = createSlice({
    name: "cusAssginTechSupport",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAssignedTechSupportForCustomer.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAssignedTechSupportForCustomer.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.assignedTechSupport = action.payload;
            })
            .addCase(fetchAssignedTechSupportForCustomer.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const selectAssignedTechSupportForCustomer = (state) => state.cusAssginTechSupport.assignedTechSupport;

export default cusAssginTechSupportSlice.reducer;
