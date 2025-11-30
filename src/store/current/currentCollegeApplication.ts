import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CollegeApplication } from '../../model';

const initialState: CollegeApplication = {
  id: '',
  collegeId: '',
  userId: '',
  applicationType: null,
  deadline: null,
  status: 'not_started',
  portalUrl: null,
  notes: null,
  createdAt: '',
  updatedAt: '',
};

export const currentCollegeApplicationSlice = createSlice({
  name: 'currentCollegeApplication',
  initialState,
  reducers: {
    setCollegeApplication: (_state, action: PayloadAction<CollegeApplication>) => action.payload,
    updateField: (state, action: PayloadAction<Partial<CollegeApplication>>) => {
      return { ...state, ...action.payload };
    },
    reset: () => initialState,
  },
});

export const CurrentCollegeApplicationActions = currentCollegeApplicationSlice.actions;
export const currentCollegeApplicationReducer = currentCollegeApplicationSlice.reducer;

