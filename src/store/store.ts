'use client'

import authSliceReducer, { authSlice } from '@/redux/slices/auth-slice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSliceReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

setupListeners(store.dispatch)
