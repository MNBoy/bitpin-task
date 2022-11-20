import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query/react';
import { bitpinApi } from '../services/bitpin';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [bitpinApi.reducerPath]: bitpinApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bitpinApi.middleware),
});

setupListeners(store.dispatch);
