import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTechSupportApi, updateTechSupportProfileApi } from "../../api/apiTechSupport";


export const fetchTechSupport = createAsyncThunk(
    "techSupport/fetchTechSupport=",
    async (userID) => {
        const response = await getTechSupportApi(userID);
        return response.data;
    }
);


export const updateTechSupportProfile = createAsyncThunk(
    "techSupport/updateTechSupportProfile",
    async (data, thunkAPI) => {
        const response = await updateTechSupportProfileApi(data);
        if (response.status === 200) {
            // console.log("response : ", response.data);
            return response.data;
        } else {
            console.log("error : ", response.data);
            return thunkAPI.rejectWithValue({ error: response.data });
        }
    }
);




const initialState = {
    tel_no: [],
    is_banned: false,
    profile_pic: null,
    status: "idle",
    error: null,
};


export const userSlice = createSlice({
    name: "techSupport",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTechSupport.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTechSupport.fulfilled, (state, action) => {
                state.status = "succeeded";
                const data = action.payload;
                state.tel_no = data.tel_no;
                state.address = data.address;
                state.is_banned = data.is_banned;
                state.profile_pic = data.profile_pic;
            })
            .addCase(fetchTechSupport.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(updateTechSupportProfile.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateTechSupportProfile.fulfilled, (state, action) => {
                state.status = "succeeded";
                const data = action.payload;
                state.tel_no = data.tel_no;
            })
            .addCase(updateTechSupportProfile.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const selectTechSupport = (state) => state.techSupport;

export default userSlice.reducer;
