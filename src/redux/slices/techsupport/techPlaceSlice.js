import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPlacesByCustomer } from "../../../api/apiTechAssigns";

export const fetchData = createAsyncThunk(
    "techPlaces/fetchData",
    async (params, thunkAPI) => {
        try {
            const response = await getPlacesByCustomer(params.user_id, params.customer_id);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

const initialState = {
    places: [],
    status: "idle",
    error: null,
};

export const techPlacesSlice = createSlice({
    name: "techPlaces",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.places = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const selectTechPlaces = (state) => state.techPlaces.places;
export const selectTechPlacesStatus = (state) => state.techPlaces.status;
export default techPlacesSlice.reducer;