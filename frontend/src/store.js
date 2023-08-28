import { configureStore } from "@reduxjs/toolkit";
import { apiSLice } from "./slices/apiSlice.js";
import pendingSliceReducer from './slices/pendingSlice.js'
const store = configureStore({
 reducer: {
    [apiSLice.reducerPath]: apiSLice.reducer,
    pending: pendingSliceReducer,
 },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSLice.middleware),
 devTools: true,
});

export default store