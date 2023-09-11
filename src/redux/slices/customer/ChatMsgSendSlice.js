import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getChatHistoryofCustomerTechSupportSenderMsgApi,sendMsgToTechSupportApi } from "../../../api/apiChat";


export const fetchChatHistoryofCustomerTechSupportSenderMsg = createAsyncThunk(
    "chat/fetchChatHistoryofCustomerTechSupport",
    async (data) => {
        const response = await getChatHistoryofCustomerTechSupportSenderMsgApi(data['customerID'], data['techSupportID']);
        return response.data;
    }
);

export const sendMsgToTechSupport = createAsyncThunk(
    "chat/sendMsgToTechSupport",
    async (data) => {
        const response = await sendMsgToTechSupportApi(data);
        return response.data;
    }
);


const initialState = {
    chatHistorySendMsg: [],
    status: "idle",
    error: null,
};

export const ChatMsgSendSlice = createSlice({
    name: "chatHistorySendMsg",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchChatHistoryofCustomerTechSupportSenderMsg.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchChatHistoryofCustomerTechSupportSenderMsg.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.chatHistorySendMsg = action.payload;
            })
            .addCase(fetchChatHistoryofCustomerTechSupportSenderMsg.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const selectChatHistoryofCustomerTechSupportSenderMsg = (state) => state.chatHistorySendMsg.chatHistorySendMsg;

export default ChatMsgSendSlice.reducer;
