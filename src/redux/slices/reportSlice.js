import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addFeedbackApi, addReportApi } from "../../api/apiReport";


export const addReport = createAsyncThunk(
    "support/Report",
    async (report, thunkAPI) => {
        try {
            console.log(report);
            const response = await addReportApi(report);
            if (response.status === 201) {
                console.log("response")
                return response.data;
            } else {
                return thunkAPI.rejectWithValue({ error: response.data });
            }
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const addFeedback = createAsyncThunk(
    "support/Feedback",
    async (feedback, thunkAPI) => {
        try {
            console.log(feedback);
            const response = await addFeedbackApi(feedback);
            if (response.status === 201) {
                console.log(response)
                return response.data;
            } else {
                console.log(response)
                return thunkAPI.rejectWithValue({ error: response.data });
            }
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

const initialState = {
    report: [],
    feedback: [],
    status: "idle",
    error: null,
};

export const reportSlice = createSlice({
    name: "report",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addReport.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addReport.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.report.push(action.payload);
            })
            .addCase(addReport.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addFeedback.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addFeedback.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.feedback.push(action.payload);
            })
            .addCase(addFeedback.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    },
});





export default reportSlice.reducer;
