import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CollegeBuilderState = {
  isModalOpen: boolean;
  searchText: string;
  deletingCollegeId: string | null;
  // Filter state
  filterState: string;
  filterCity: string;
  currentPage: number;
  perPage: number;
  totalResults: number;
  isLoading: boolean;
  hasSearched: boolean;
};

const initialState: CollegeBuilderState = {
  isModalOpen: false,
  searchText: '',
  deletingCollegeId: null,
  // Filter state
  filterState: '',
  filterCity: '',
  currentPage: 0,
  perPage: 20,
  totalResults: 0,
  isLoading: false,
  hasSearched: false,
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
    setFilterState: (state, action: PayloadAction<string>) => {
      state.filterState = action.payload;
    },
    setFilterCity: (state, action: PayloadAction<string>) => {
      state.filterCity = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPerPage: (state, action: PayloadAction<number>) => {
      state.perPage = action.payload;
    },
    setTotalResults: (state, action: PayloadAction<number>) => {
      state.totalResults = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setHasSearched: (state, action: PayloadAction<boolean>) => {
      state.hasSearched = action.payload;
    },
    resetFilters: (state) => {
      state.searchText = '';
      state.filterState = '';
      state.filterCity = '';
      state.currentPage = 0;
      state.hasSearched = false;
    },
    reset: () => initialState,
  },
});

export const CollegeBuilderActions = collegeBuilderSlice.actions;
export const collegeBuilderReducer = collegeBuilderSlice.reducer;
