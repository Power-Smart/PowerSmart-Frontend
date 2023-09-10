import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getChatHistoryofCustomerTechSupportReceiverMsgApi } from "../../../api/apiChat";


export const fetchChatHistoryofCustomerTechSupportReceiverMsg = createAsyncThunk(
    "chat/fetchChatHistoryofCustomerTechSupport",
    async (data) => {
        const response = await getChatHistoryofCustomerTechSupportReceiverMsgApi(data['customerID'], data['techSupportID']);
        return response.data;
    }
);



const initialState = {
    chatHistoryReceiveMsg: [],
    status: "idle",
    error: null,
};

export const ChatMsgReceiveSlice = createSlice({
    name: "chatHistoryReceiveMsg",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchChatHistoryofCustomerTechSupportReceiverMsg.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchChatHistoryofCustomerTechSupportReceiverMsg.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.chatHistoryReceiveMsg = action.payload;
            })
            .addCase(fetchChatHistoryofCustomerTechSupportReceiverMsg.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const selectChatHistoryofCustomerTechSupportReceiverMsg = (state) => state.chatHistoryReceiveMsg.chatHistoryReceiveMsg;

export default ChatMsgReceiveSlice.reducer;