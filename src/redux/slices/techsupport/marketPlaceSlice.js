import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMarketPlaceItemsApi } from "../../../api/apiMarketPlace";

export const fetchMarketPlaceItems = createAsyncThunk(
    "marketPlace/fetchData",
    async (thunkAPI) => {   
        try {
            const response = await getMarketPlaceItemsApi();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);



const initialState = {
    marketPlaceItems: [],
    status: "idle",
    error: null,
};

export const marketPlaceSlice = createSlice({
    name: "marketPlace",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMarketPlaceItems.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMarketPlaceItems.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.marketPlaceItems = action.payload;
            })
            .addCase(fetchMarketPlaceItems.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const selectMarketPlaceItems = (state) => state.marketPlace.marketPlaceItems;
export const selectMarketPlaceStatus = (state) => state.marketPlace.status;
export default marketPlaceSlice.reducer;

