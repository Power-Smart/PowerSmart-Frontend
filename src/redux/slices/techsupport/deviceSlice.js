import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDevices = createAsyncThunk(
    "devices/fetchDevices",
    async (params, thunkAPI) => {
        try {
            // const response = await getDeviceUnitsByPlace(params.userID, params.placeID);
            // return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const addDevice = createAsyncThunk(
    "devices/addDevice",
    async (params, thunkAPI) => {
        try {
            // const response = await addDeviceUnitToPlace(params.userID, params.placeID, params.data);
            // if (response.status === 200) {
            //     return response.data;
            // }
            // else {
            //     return thunkAPI.rejectWithValue({ error: response.data });
            // }
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const updateDevice = createAsyncThunk(
    "devices/updateDevice",
    async (params, thunkAPI) => {
        try {
            // const response = await updateDeviceUnit(params.userID, params.placeID, params.relayID, params.data);
            // if (response.status === 200) {
            //     return response.data;
            // }
            // else {
            //     return thunkAPI.rejectWithValue({ error: response.data });
            // }
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const deleteDevice = createAsyncThunk(
    "devices/deleteDevice",
    async (params, thunkAPI) => {
        try {
            // const response = await deleteDeviceUnit(params.userID, params.placeID, params.relayID);
            // if (response.status === 204) {
            //     return response.data;
            // } else {
            //     return thunkAPI.rejectWithValue({ error: response.data });
            // }
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
                state.devices = state.devices.filter(device => { });
                state.status = "succeeded";
            });
    }
});

export const selectDevices = (state) => state.devices.devices;
export const selectDevicesStatus = (state) => state.devices.status;
export default deviceSlice.reducer;

