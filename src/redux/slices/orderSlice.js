import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrderCustomerApi } from "../../api/apiPayment";

export const fetchOrder = createAsyncThunk(
    "order/fetchOrder",
    async (cusID) => {
        const response = await getOrderCustomerApi(cusID);
        return response.data;
    }
);

const initialState = {
    orders: [],
    status: "idle",
    error: null,
};

export const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrder.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.orders = action.payload;
            })
            .addCase(fetchOrder.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const selectOrders = (state) => state.orders.orders;
export const selectOrderStatus = (state) => state.orders.status;
export const selectOrderError = (state) => state.orders.error;

export default orderSlice.reducer;
