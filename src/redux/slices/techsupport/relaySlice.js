import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addRelayUnitToPlace, deleteRelayUnit, getRelayUnitsByPlace, updateRelayUnit } from "../../../api/apiTechAssigns";

export const fetchRelays = createAsyncThunk(
    "relays/fetchRelays",
    async (params, thunkAPI) => {
        try {
            const response = await getRelayUnitsByPlace(params.userID, params.placeID);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const addRelay = createAsyncThunk(
    "relays/addRelay",
    async (params, thunkAPI) => {
        try {
            const response = await addRelayUnitToPlace(params.userID, params.placeID, params.data);
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

export const updateRelay = createAsyncThunk(
    "relays/updateRelay",
    async (params, thunkAPI) => {
        try {
            const response = await updateRelayUnit(params.userID, params.placeID, params.relayID, params.data);
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

export const deleteRelay = createAsyncThunk(
    "relays/deleteRelay",
    async (params, thunkAPI) => {
        try {
            const response = await deleteRelayUnit(params.userID, params.placeID, params.relayID);
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
    relays: [],
    status: "idle",
    error: null,
};

export const relaySlice = createSlice({
    name: "relays",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelays.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchRelays.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.relays = action.payload;
            })
            .addCase(fetchRelays.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addRelay.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.relays = [...state.relays, action.payload];
            })
            .addCase(addRelay.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(updateRelay.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.relays = state.relays.map((relay) => {
                    if (relay.relay_unit_id === action.payload.relay_unit_id) {
                        return {
                            ...relay,
                            ...action.payload
                        }
                    } else {
                        return relay;
                    }
                });
            })
            .addCase(updateRelay.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteRelay.fulfilled, (state, action) => {
                state.relays = state.relays.filter(relay => relay.relay_unit_id !== +action.payload.relay_unit_id);
                state.status = "succeeded";
            });
    }
});

export const selectRelays = (state) => state.relays.relays;
export const selectRelaysStatus = (state) => state.relays.status;
export default relaySlice.reducer;

