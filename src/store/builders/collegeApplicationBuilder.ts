import { createSlice } from '@reduxjs/toolkit';

type CollegeApplicationBuilderState = {
  isModalOpen: boolean;
};

const initialState: CollegeApplicationBuilderState = {
  isModalOpen: false,
};

const collegeApplicationBuilderSlice = createSlice({
  name: 'collegeApplicationBuilder',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    reset: () => initialState,
  },
});

export const CollegeApplicationBuilderActions = collegeApplicationBuilderSlice.actions;
export const collegeApplicationBuilderReducer = collegeApplicationBuilderSlice.reducer;

