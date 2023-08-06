import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPlacesApi } from "../../api/apiPlaces";

export const fetchPlaces = createAsyncThunk(
    "places/fetchPlaces",
    async (userID, thunkAPI) => {
        try {
            const response = await getPlacesApi(userID);
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

export const placesSlice = createSlice({
    name: "places",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlaces.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPlaces.fulfilled, (state, action) => {
                state.status = "succeeded";
                console.log(action.payload);
                state.places = action.payload;
            })
            .addCase(fetchPlaces.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const selectPlaces = (state) => state.places.places;
export const selectPlacesStatus = (state) => state.places.status;
export const selectPlacesError = (state) => state.places.error;

export default placesSlice.reducer;