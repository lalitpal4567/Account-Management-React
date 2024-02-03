import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducers/createAccountSlice";

export const store = configureStore({
    reducer: {
        signUp: accountReducer,
    }
})