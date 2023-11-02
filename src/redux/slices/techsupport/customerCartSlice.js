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

export const removeItems = createAsyncThunk(
    "customerCart/removeItems",
    async (itemID, thunkAPI) => {
        try {
            return itemID;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const setCustomer = createAsyncThunk(
    "customerCart/setCustomer",
    async (customerID, thunkAPI) => {
        try {
            return customerID;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const removeAll = createAsyncThunk(
    "customerCart/removeAll",
    async (id, thunkAPI) => {
        try {
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);


let initialState = {
    customerCart: [],
    customer: 0,
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
            .addCase(removeItems.pending, (state) => {
                state.status = "loading";
            })
            .addCase(removeItems.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.customerCart = state.customerCart.filter((item) => item.item_id !== action.payload);
            })
            .addCase(removeItems.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            }).addCase(setCustomer.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.customer = action.payload;
            }).addCase(removeAll.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.customerCart = [];
            });
    }
});

export const selectCustomerCart = (state) => state.customerCart.customerCart;
export const selectCustomer = (state) => state.customerCart.customer;
export const selectCustomerCartStatus = (state) => state.customerCart.status;
export default customerCartSlice.reducer;

