import { configureStore } from "@reduxjs/toolkit";

// Slices imports
import userSlice from "./slices/userSlice";
import customerSlice from "./slices/customerSlice";
import placesSlice from "./slices/placesSlice";
import roomsSlice from "./slices/roomsSlice";
import orderSlice from "./slices/orderSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        customer: customerSlice,
        places: placesSlice,
        rooms: roomsSlice,
        orders: orderSlice,
    },
});
