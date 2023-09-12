import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSchedulesApi } from "../../api/apiSchedules";


export const fetchSchedules = createAsyncThunk(
    "schedules/fetchSchedules",
    async (data, thunkAPI) => {
        try {
            const response = await getSchedulesApi(data.user_id, data.device_id);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);


export const addSchedule = createAsyncThunk(
    "schedules/addSchedule",
    async (schedule, thunkAPI) => {
        try {
            // console.log(schedule)
            // const response = await addRoomApi(schedule);
            // if (response.status === 201) {
            //     return response.data;
            // } else {
            //     return thunkAPI.rejectWithValue({ error: response.data });
            // }
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
)


export const updateSchedule = createAsyncThunk(
    "schedules/update",
    async (schedule, thunkAPI) => {
        try {
            // const response = await updateRoomApi(schedule);
            // if (response.status === 201) {
            //     return response.data;
            // } else {
            //     return thunkAPI.rejectWithValue({ error: response.data });
            // }
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
)


const initialState = {
    schedules: [],
    status: "idle",
    error: null,
};


export const scheduleSlice = createSlice({
    name: "schedules",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSchedules.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSchedules.fulfilled, (state, action) => {
                state.status = "succeeded";
                // console.log(action.payload);
                state.schedules = action.payload;
            })
            .addCase(fetchSchedules.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addSchedule.pending, (state) => {
                state.status = "loading"; hedules
            })
            .addCase(addSchedule.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.schedules.push(action.payload);
            })
            .addCase(addSchedule.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateSchedule.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateSchedule.fulfilled, (state, action) => {
                state.status = "succeeded";
                console.log(action.payload);
                const index = state.schedules.findIndex(
                    (schedule) => schedule.id === action.payload.id
                )
                state.schedules[index] = action.payload;
            })
            .addCase(updateSchedule.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const selectSchedules = (state) => state.schedules.schedules;
export const selectSchedulesStatus = (state) => state.schedules.status;
export const selectSchedulesError = (state) => state.schedules.error;

export default scheduleSlice.reducer;