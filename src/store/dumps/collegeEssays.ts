import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CollegeEssay } from '../../model';

type CollegeEssaysState = Record<string, CollegeEssay>;

const initialState: CollegeEssaysState = {};

const collegeEssaysSlice = createSlice({
  name: 'collegeEssays',
  initialState,
  reducers: {
    setCollegeEssays: (_state, action: PayloadAction<CollegeEssaysState>) => action.payload,
    addCollegeEssay: (state, action: PayloadAction<CollegeEssay>) => {
      state[action.payload.id] = action.payload;
    },
    updateCollegeEssay: (state, action: PayloadAction<CollegeEssay>) => {
      state[action.payload.id] = action.payload;
    },
    removeCollegeEssay: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
    reset: () => initialState,
  },
});

export const CollegeEssaysActions = collegeEssaysSlice.actions;
export const collegeEssaysReducer = collegeEssaysSlice.reducer;

