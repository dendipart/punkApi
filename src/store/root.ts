import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { beerApi } from "../services/api";

export const store = configureStore({
  reducer: { [beerApi.reducerPath]: beerApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
