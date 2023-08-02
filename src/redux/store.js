import { configureStore } from "@reduxjs/toolkit";

// Slices imports
import userSlice from "./slices/userSlice";
import customerSlice from "./slices/customerSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        customer: customerSlice,
    },
});
