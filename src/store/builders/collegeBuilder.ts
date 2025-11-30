import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CollegeBuilderState = {
  isModalOpen: boolean;
  searchText: string;
  deletingCollegeId: string | null;
};

const initialState: CollegeBuilderState = {
  isModalOpen: false,
  searchText: '',
  deletingCollegeId: null,
};

const collegeBuilderSlice = createSlice({
  name: 'collegeBuilder',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setDeletingCollegeId: (state, action: PayloadAction<string | null>) => {
      state.deletingCollegeId = action.payload;
    },
    reset: () => initialState,
  },
});

export const CollegeBuilderActions = collegeBuilderSlice.actions;
export const collegeBuilderReducer = collegeBuilderSlice.reducer;

