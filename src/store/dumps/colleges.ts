import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { College } from '../../model';

type InitialState = {
  [key: string]: College;
};

const initialState: InitialState = {};

export const collegesSlice = createSlice({
  name: 'colleges',
  initialState,
  reducers: {
    setColleges: (_state, action: PayloadAction<InitialState>) => action.payload,
    addCollege: (state, action: PayloadAction<College>) => {
      state[action.payload.id] = action.payload;
    },
    deleteCollege: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
    reset: () => initialState,
  },
});

export const CollegesActions = collegesSlice.actions;
export const collegesReducer = collegesSlice.reducer;

