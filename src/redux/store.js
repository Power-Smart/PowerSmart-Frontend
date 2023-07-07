import { configureStore } from "@reduxjs/toolkit";

// Slices imports
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
});
