import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import courtService from './courtService'

const initialState = {
  courts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const getCourts = createAsyncThunk('courts/getAll', async(_, thunkAPI) => {
  try{
    return await courtService.getCourts()

  } catch (error) {
    const message = (error.response && error.response.data && error.repsonse.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)

  }
})

export const courtSlice = createSlice({
  name: 'court',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCourts.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getCourts.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.courts = action.payload

    })
    .addCase(getCourts.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.message = action.payload
    })
  }
})

export const { reset } = courtSlice.actions
export default courtSlice.reducer
