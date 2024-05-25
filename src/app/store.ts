import { configureStore } from '@reduxjs/toolkit';
import ViewerState from '../features/viewerSlice';

export const store = configureStore({
  reducer: {
    viewer: ViewerState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
