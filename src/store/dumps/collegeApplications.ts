import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CollegeApplication } from '../../model';

type InitialState = {
  [key: string]: CollegeApplication;
};

const initialState: InitialState = {};

export const collegeApplicationsSlice = createSlice({
  name: 'collegeApplications',
  initialState,
  reducers: {
    setCollegeApplications: (_state, action: PayloadAction<InitialState>) => action.payload,
    addCollegeApplication: (state, action: PayloadAction<CollegeApplication>) => {
      state[action.payload.id] = action.payload;
    },
    deleteCollegeApplication: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
    reset: () => initialState,
  },
});

export const CollegeApplicationsActions = collegeApplicationsSlice.actions;
export const collegeApplicationsReducer = collegeApplicationsSlice.reducer;

