import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRoomsApi, addRoomApi, updateRoomApi } from "../../api/apiRooms";


export const fetchRooms = createAsyncThunk(
    "rooms/fetchRooms",
    async (data, thunkAPI) => {
        try {
            // console.log("ddd" + data["customer_id"], data["place_id"]);
            const response = await getRoomsApi(data["customer_id"], data["place_id"]);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);


export const addRoom = createAsyncThunk(
    "rooms/addRoom",
    async (room, thunkAPI) => {
        try{
            console.log(room);
            const response = await addRoomApi(room);
            if(response.status === 201){
                return response.data;
            }else{
                return thunkAPI.rejectWithValue({error:response.data});
            }
        }catch(error){
            return thunkAPI.rejectWithValue({error:error.message});
        }
    }
)


export const updateRoom = createAsyncThunk(
    "room/update",
    async (room, thunkAPI) => {
        try{
            const response = await updateRoomApi(room);
            if(response.status === 201){
                return response.data;
            }else{
                return thunkAPI.rejectWithValue({error:response.data});
            }
        }catch(error){
            return thunkAPI.rejectWithValue({error:error.message});
        }
    }
)


const initialState = {
    rooms: [],
    status: "idle",
    error: null,
};


export const roomSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        emptyRoomsSlice: (state) => {
            state.rooms = [];
            state.status = "idle";
            state.error = "null"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.status = "succeeded";
                // console.log(action.payload);
                state.rooms = action.payload;
            })
            .addCase(fetchRooms.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addRoom.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addRoom.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.rooms.push(action.payload);
            })
            .addCase(addRoom.rejected,(state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const selectRooms = (state) => state.rooms.rooms;
export const selectRoomsStatus = (state) => state.rooms.status;
export const selectPlacesError = (state) => state.rooms.error;

export const {emptyRoomsSlice} = roomSlice.actions;

export default roomSlice.reducer;