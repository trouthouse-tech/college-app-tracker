import { NavBuilderActions } from '../../builders';
import { CurrentCollegeActions } from '../../current';
import { AppThunk } from '../../types';

const SECTION_MENU_ITEMS = [
  { label: 'Overview', value: 'overview' },
  { label: 'College Info', value: 'college-info' },
  { label: 'Application', value: 'application' },
  { label: 'Essays', value: 'essays' },
  { label: 'Financial Aid', value: 'financial-aid' },
  { label: 'Documents', value: 'documents' },
  { label: 'Other', value: 'other' },
];

export const setCurrentCollegeThunk = (collegeId: string): AppThunk<void> => {
  return (dispatch, getState) => {
    const college = getState().colleges[collegeId];

    if (!college) return;

    // Set the current college
    dispatch(CurrentCollegeActions.setCollege(college));

    // Set navigation state for the detail page
    dispatch(NavBuilderActions.setCurrentRoute(`/colleges/${college.id}`));
    dispatch(NavBuilderActions.setBreadcrumbs([
      { label: 'Colleges', href: '/' },
      { label: college.name, href: `/colleges/${college.id}` },
      {
        label: 'Overview',
        href: `/colleges/${college.id}`,
        menuItems: SECTION_MENU_ITEMS,
      },
    ]));
    dispatch(NavBuilderActions.setActiveSection('overview'));
  };
};

