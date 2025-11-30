import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { College } from '../../model';

const initialState: College = {
  id: '',
  name: '',
  address: '',
  phoneNumber: '',
  motto: '',
  createdAt: 0,
  updatedAt: 0,
};

export const currentCollegeSlice = createSlice({
  name: 'currentCollege',
  initialState,
  reducers: {
    setCollege: (_state, action: PayloadAction<College>) => action.payload,
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setMotto: (state, action: PayloadAction<string>) => {
      state.motto = action.payload;
    },
    reset: () => initialState,
  },
});

export const CurrentCollegeActions = currentCollegeSlice.actions;
export const currentCollegeReducer = currentCollegeSlice.reducer;
