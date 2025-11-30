import { createSlice } from '@reduxjs/toolkit';

type CollegeEssayBuilderState = {
  isModalOpen: boolean;
  isEditorOpen: boolean;
  editingEssayId: string | null;
};

const initialState: CollegeEssayBuilderState = {
  isModalOpen: false,
  isEditorOpen: false,
  editingEssayId: null,
};

const collegeEssayBuilderSlice = createSlice({
  name: 'collegeEssayBuilder',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    openEditor: (state, action) => {
      state.isEditorOpen = true;
      state.editingEssayId = action.payload;
    },
    closeEditor: (state) => {
      state.isEditorOpen = false;
      state.editingEssayId = null;
    },
    reset: () => initialState,
  },
});

export const CollegeEssayBuilderActions = collegeEssayBuilderSlice.actions;
export const collegeEssayBuilderReducer = collegeEssayBuilderSlice.reducer;

