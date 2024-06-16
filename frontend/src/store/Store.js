import { configureStore } from '@reduxjs/toolkit'
import { ddxApi } from '../api/DdxApi'

export const store = configureStore({
  reducer: {
    [ddxApi.reducerPath]: ddxApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ddxApi.middleware)
  },
})
