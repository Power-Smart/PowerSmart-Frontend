import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getDevicesByRoom,
    addDeviceToRoom,
    updateDeviceToRoom,
    deleteDeviceFromRoom
} from "../../../api/apiTechAssigns";

export const fetchDevices = createAsyncThunk(
    "devices/fetchDevices",
    async (params, thunkAPI) => {
        try {
            const response = await getDevicesByRoom(params.userID, params.placeID, params.roomID);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const addDevice = createAsyncThunk(
    "devices/addDevice",
    async (params, thunkAPI) => {
        try {
            const response = await addDeviceToRoom(params.userID, params.placeID, params.roomID, params.data);
            if (response.status === 200) {
                return response.data;
            }
            else {
                return thunkAPI.rejectWithValue({ error: response.data });
            }
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const updateDevice = createAsyncThunk(
    "devices/updateDevice",
    async (params, thunkAPI) => {
        try {
            const response = await updateDeviceToRoom(params.userID, params.placeID, params.roomID, params.deviceID, params.data);
            if (response.status === 200) {
                return response.data;
            }
            else {
                return thunkAPI.rejectWithValue({ error: response.data });
            }
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const deleteDevice = createAsyncThunk(
    "devices/deleteDevice",
    async (params, thunkAPI) => {
        try {
            const response = await deleteDeviceFromRoom(params.userID, params.placeID, params.roomID, params.deviceID);
            if (response.status === 200) {
                return response.data;
            } else {
                return thunkAPI.rejectWithValue({ error: response.data });
            }
        }
        catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
)


const initialState = {
    devices: [],
    status: "idle",
    error: null,
};

export const deviceSlice = createSlice({
    name: "devices",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDevices.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchDevices.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.devices = action.payload;
            })
            .addCase(fetchDevices.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addDevice.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.devices = [...state.devices, action.payload];
            })
            .addCase(addDevice.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(updateDevice.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.devices = state.devices.map((device) => {
                    // if (relay.relay_unit_id === action.payload.relay_unit_id) {
                    //     return {
                    //         ...relay,
                    //         ...action.payload
                    //     }
                    // } else {
                    //     return relay;
                    // }
                });
            })
            .addCase(updateDevice.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteDevice.fulfilled, (state, action) => {
                state.devices = state.devices.filter(device => device.device_id !== +action.payload.device_id);
                state.status = "succeeded";
            });
    }
});

export const selectDevices = (state) => state.devices.devices;
export const selectDevicesStatus = (state) => state.devices.status;
export default deviceSlice.reducer;

