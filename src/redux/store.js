import { configureStore } from "@reduxjs/toolkit";

// Slices imports
import userSlice from "./slices/userSlice";
import customerSlice from "./slices/customerSlice";
import placesSlice from "./slices/placesSlice";
import roomsSlice from "./slices/roomsSlice";
import orderSlice from "./slices/orderSlice";
import techCustomersSlice from "./slices/techsupport/techCustomersSlice";
import techPlacesSlice from "./slices/techsupport/techPlaceSlice";
import marketPlaceSlice from "./slices/techsupport/marketPlaceSlice";
import customerCartSlice from "./slices/techsupport/customerCartSlice";
import customerOrderRequestSlice from "./slices/techsupport/customerOrderRequestSlice";
import relaySlice from "./slices/techsupport/relaySlice";
import deviceSlice from "./slices/techsupport/deviceSlice";
import cusAssginTechSupportSlice from "./slices/customer/CusAssginTechSupport";
import ChatMsgReceiveSlice from "./slices/customer/ChatMsgReceiveSlice";
import ChatMsgSendSlice from "./slices/customer/ChatMsgSendSlice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        customer: customerSlice,
        places: placesSlice,
        rooms: roomsSlice,
        orders: orderSlice,
        techCustomers: techCustomersSlice,
        techPlaces: techPlacesSlice,
        marketPlace: marketPlaceSlice,
        customerCart: customerCartSlice,
        customerOrderRequests: customerOrderRequestSlice,
        relays: relaySlice,
        devices: deviceSlice,
        cusAssginTechSupport: cusAssginTechSupportSlice,
        chatHistorySendMsg: ChatMsgSendSlice,
        chatHistoryReceiveMsg: ChatMsgReceiveSlice,
    }
});
