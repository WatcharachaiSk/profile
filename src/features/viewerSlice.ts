import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import configAxios from '../axios/configAxios';
import { API } from '../axios/endpoint';


interface ViewerState {
  data: { count_view: number | null };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ViewerState = {
  data: { count_view: 0 },
  status: 'idle',
  error: null,
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const url = `${API.viewer}/p1-2x0637795f-3b47-493c-a921-46185c94eace-os01`
  try {
    const response = await axios(configAxios('get', url));
    return response.data;
  } catch (error) {
    console.log(error);

  }
});

export const updateViewer = createAsyncThunk('data/fetchData', async () => {
  const url = `${API.viewer}/p1-2x0637795f-3b47-493c-a921-46185c94eace-os01`
  try {
    const response = await axios(configAxios('put', url));
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const viewerSlice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch data';
      });
  },
});

export default viewerSlice.reducer;
