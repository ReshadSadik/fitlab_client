import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async () => {
    const response = await fetch('./data.JSON').then((res) => res.json());

    return response;
  }
);
export const fetchSingleServices = createAsyncThunk(
  'services/fetchSingleServices',
  async (_id) => {
    const response = await fetch('./data.JSON').then((res) => res.json());

    const getSingleService = response.find((item) => _id === item._id);

    return getSingleService;
  }
);

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    singleService: [],
  },
  reducers: {
    // servicesLoading(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.services = action.payload;
    });
    builder.addCase(fetchSingleServices.fulfilled, (state, action) => {
      state.singleService = action.payload;
    });
  },
});
export default servicesSlice.reducer;
