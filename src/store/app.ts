import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  name: string;
  isLoading: boolean;
}

const initialState: AppState = {
  name: 'Tutorials',
  isLoading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const AppActions = appSlice.actions;
export const appReducer = appSlice.reducer;

