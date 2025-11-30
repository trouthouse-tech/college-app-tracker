import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CollegeEssay } from '../../model';

const initialState: CollegeEssay = {
  id: '',
  collegeId: '',
  userId: '',
  title: '',
  prompt: null,
  wordLimit: null,
  content: '',
  status: 'not_started',
  createdAt: '',
  updatedAt: '',
};

export const currentCollegeEssaySlice = createSlice({
  name: 'currentCollegeEssay',
  initialState,
  reducers: {
    setCollegeEssay: (_state, action: PayloadAction<CollegeEssay>) => action.payload,
    updateField: (state, action: PayloadAction<Partial<CollegeEssay>>) => {
      return { ...state, ...action.payload };
    },
    reset: () => initialState,
  },
});

export const CurrentCollegeEssayActions = currentCollegeEssaySlice.actions;
export const currentCollegeEssayReducer = currentCollegeEssaySlice.reducer;

