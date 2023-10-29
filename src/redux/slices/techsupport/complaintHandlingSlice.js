import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllComplaintsApi,accpetOrRejectComplaintApi } from "../../../api/apiComplaintHandling";

export const getAllComplaints = createAsyncThunk(
    "complaintHandling/getAllComplaints",
    async (techSupportID,thunkAPI) => {
        try {
            const response = await getAllComplaintsApi(techSupportID);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const accpetOrRejectComplaint = createAsyncThunk(
    "complaintHandling/accpetOrRejectComplaint",
    async (updateData, thunkAPI) => {
        try {
            const response = await accpetOrRejectComplaintApi(updateData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);


let initialState = {
    complaints: [],
    status: "idle",
    error: null,
};

export const complaintHandlingSlice = createSlice({
    name: "complaintHandling",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllComplaints.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllComplaints.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.complaints = action.payload;
            })
            .addCase(getAllComplaints.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(accpetOrRejectComplaint.pending, (state) => {
                state.status = "loading";
            })
            .addCase(accpetOrRejectComplaint.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.complaints = action.payload;
            })
            .addCase(accpetOrRejectComplaint.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});


export const selectComplaints = (state) => state.complaintHandling.complaints;
export const selectComplaintsStatus = (state) => state.complaintHandling.status;
export default complaintHandlingSlice.reducer;