import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const addItems = createAsyncThunk(
    "customerCart/addItems",
    async (items, thunkAPI) => {
        try {
            return items;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);


let initialState = {
    customerCart: [],
    status: "idle",
    error: null,
};

export const customerCartSlice = createSlice({
    name: "customerCart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addItems.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addItems.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.customerCart = state.customerCart.concat(action.payload);
            })
            .addCase(addItems.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

export const selectCustomerCart = (state) => state.customerCart.customerCart;
export const selectCustomerCartStatus = (state) => state.customerCart.status;
export default customerCartSlice.reducer;

