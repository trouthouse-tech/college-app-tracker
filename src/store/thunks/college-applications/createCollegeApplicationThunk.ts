import { CollegeApplicationsActions } from '../../dumps';
import { CollegeApplicationBuilderActions } from '../../builders';
import { AppThunk } from '../../types';
import { getISOTimestamp } from '../../../utils';
import { CollegeApplication } from '../../../model';

const COLLEGE_APPLICATIONS_STORAGE_KEY = 'collegeApplications';

export const createCollegeApplicationThunk = (collegeId: string): AppThunk<void> => {
  return (dispatch, getState) => {
    const now = getISOTimestamp();

    const application: CollegeApplication = {
      id: crypto.randomUUID(),
      collegeId,
      userId: '', // TODO: Add user management
      applicationType: null,
      deadline: null,
      status: 'not_started',
      portalUrl: null,
      notes: null,
      createdAt: now,
      updatedAt: now,
    };

    // Add to Redux
    dispatch(CollegeApplicationsActions.addCollegeApplication(application));

    // Close modal
    dispatch(CollegeApplicationBuilderActions.closeModal());

    // Save to localStorage
    const collegeApplications = getState().collegeApplications;
    localStorage.setItem(COLLEGE_APPLICATIONS_STORAGE_KEY, JSON.stringify(collegeApplications));
  };
};

