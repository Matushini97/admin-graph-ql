import { RootState } from '@/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuthenticated = payload
    },
  },
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer

export const isAuthenticatedSelector = (state: RootState) => state.auth.isAuthenticated
