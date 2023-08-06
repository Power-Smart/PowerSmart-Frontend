import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRoomsApi } from "../../api/apiRooms";


export const fetchRooms = createAsyncThunk(
    "rooms/fetchRooms",
    async (data, thunkAPI) => {
        try {
            console.log("ddd" + data["customer_id"], data["place_id"]);
            const response = await getRoomsApi(data["customer_id"], data["place_id"]);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

const initialState = {
    rooms: [],
    status: "idle",
    error: null,
};

export const roomSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.status = "succeeded";
                console.log(action.payload);
                state.rooms = action.payload;
            })
            .addCase(fetchRooms.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const selectRooms = (state) => state.rooms.rooms;
export const selectRoomsStatus = (state) => state.rooms.status;
export const selectPlacesError = (state) => state.rooms.error;

export default roomSlice.reducer;