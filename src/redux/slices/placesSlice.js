import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPlacesApi, addPlaceApi, updatePlaceApi } from "../../api/apiPlaces";

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

export const addPlace = createAsyncThunk(
    "places/addPlace",
    async (place, thunkAPI) => {
        try {
            console.log(place);
            const response = await addPlaceApi(place);
            if (response.status === 201) {
                return response.data;
            } else {
                return thunkAPI.rejectWithValue({ error: response.data });
            }
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const updatePlace = createAsyncThunk(
    "place/update",
    async (place, thunkAPI) => {
        try {
            const response = await updatePlaceApi(place);
            if (response.status === 200) {
                return response.data;
            } else {
                return thunkAPI.rejectWithValue({ error: response.data });
            }
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
                state.places = action.payload;
            })
            .addCase(fetchPlaces.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addPlace.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addPlace.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.places.push(action.payload);
            })
            .addCase(addPlace.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(updatePlace.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updatePlace.fulfilled, (state, action) => {
                state.status = "succeeded";
                const index = state.places.findIndex(
                    (place) => place.id === action.payload.id
                );
                state.places[index] = {
                    room_count: state.places[index].room_count,
                    ...action.payload,
                };
            })
            .addCase(updatePlace.rejected, (state, action) => {
                state.status = "failed";
                console.log(action.error);
                state.error = action.error.message;
            });
    },
});

export const selectPlaces = (state) => state.places.places;
export const selectPlacesStatus = (state) => state.places.status;
export const selectPlacesError = (state) => state.places.error;

export default placesSlice.reducer;
