import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BreadcrumbMenuItem = {
  label: string;
  value: string;
  isActive?: boolean;
};

export type Breadcrumb = {
  label: string;
  href: string;
  menuItems?: BreadcrumbMenuItem[];
};

type NavBuilderState = {
  currentRoute: string;
  breadcrumbs: Breadcrumb[];
  isSidebarVisible: boolean;
  activeSection: string;
};

const initialState: NavBuilderState = {
  currentRoute: '/',
  breadcrumbs: [{ label: 'Colleges', href: '/' }],
  isSidebarVisible: true,
  activeSection: 'overview',
};

const navBuilderSlice = createSlice({
  name: 'navBuilder',
  initialState,
  reducers: {
    setCurrentRoute: (state, action: PayloadAction<string>) => {
      state.currentRoute = action.payload;
    },
    setBreadcrumbs: (state, action: PayloadAction<Breadcrumb[]>) => {
      state.breadcrumbs = action.payload;
    },
    pushBreadcrumb: (state, action: PayloadAction<Breadcrumb>) => {
      state.breadcrumbs.push(action.payload);
    },
    popBreadcrumb: (state) => {
      if (state.breadcrumbs.length > 1) {
        state.breadcrumbs.pop();
      }
    },
    toggleSidebar: (state) => {
      state.isSidebarVisible = !state.isSidebarVisible;
    },
    setSidebarVisible: (state, action: PayloadAction<boolean>) => {
      state.isSidebarVisible = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    reset: () => initialState,
  },
});

export const NavBuilderActions = navBuilderSlice.actions;
export const navBuilderReducer = navBuilderSlice.reducer;

