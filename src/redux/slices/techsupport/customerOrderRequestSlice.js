import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCustomerOrderRequestsApi , deleteCustomerOrderRequestApi} from "../../../api/apiCustomerOrderRequest";


export const fetchCustomerOrderRequests = createAsyncThunk(
    "customerOrderRequests/fetchData",
    async (thunkAPI) => {
        try {
            const response = await getAllCustomerOrderRequestsApi();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const deleteCustomerOrderRequest = createAsyncThunk(
    "customerOrderRequests/deleteCustomerOrderRequest",
    async (orderID, thunkAPI) => {
        try {
            const response = await deleteCustomerOrderRequestApi(orderID);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);



const initialState = {
    customerOrderRequests: [],
    status: "idle",
    error: null,
};

export const customerOrderRequestSlice = createSlice({
    name: "customerOrderRequests",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCustomerOrderRequests.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCustomerOrderRequests.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.customerOrderRequests = action.payload;
            })
            .addCase(fetchCustomerOrderRequests.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteCustomerOrderRequest.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteCustomerOrderRequest.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.customerOrderRequests = state.customerOrderRequests.filter(
                    (customerOrderRequest) => customerOrderRequest.order_id !== action.payload
                );
            })
            .addCase(deleteCustomerOrderRequest.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const selectCustomerOrderRequests = (state) => state.customerOrderRequests.customerOrderRequests;
export const selectCustomerOrderRequestsStatus = (state) => state.customerOrderRequests.status;
export default customerOrderRequestSlice.reducer;
