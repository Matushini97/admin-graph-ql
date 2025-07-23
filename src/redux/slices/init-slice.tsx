import { RootState } from '@/store/store'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const initSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {
    increase: state => {
      state.count++
    },
  },
})

export const { increase } = initSlice.actions
export default initSlice.reducer

export const countSelector = (state: RootState) => state.init.count
