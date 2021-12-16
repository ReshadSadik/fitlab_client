import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './slices/servicesslice';

const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
});

export default store;
