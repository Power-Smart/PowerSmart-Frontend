import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCustomerServiceRequestsApi } from "../../../api/apiCustomerServiceRequest";

export const getAllCustomerServiceRequests = createAsyncThunk(
    "customerServiceRequest/getAllCustomerServiceRequests",
    async (techSupportID) => {
        const response = await getAllCustomerServiceRequestsApi(techSupportID);
        return response;
    }
);

const initialState = {
    customerServiceRequests: [],
    status: "idle",
    error: null,
};

export const customerServiceRequestSlice = createSlice({
    name: "customerServiceRequest",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCustomerServiceRequests.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllCustomerServiceRequests.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.customerServiceRequests = action.payload;
            })
            .addCase(getAllCustomerServiceRequests.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const selectCustomerServiceRequests = (state) => state.customerServiceRequest.customerServiceRequests;
export const selectStatus = (state) => state.customerServiceRequest.status;
export default customerServiceRequestSlice.reducer;
