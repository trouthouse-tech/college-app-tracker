import { CollegesActions } from '../../dumps';
import { AppThunk } from '../../types';

const COLLEGES_STORAGE_KEY = 'colleges';

export const deleteCollegeThunk = (collegeId: string): AppThunk<void> => {
  return (dispatch, getState) => {
    // Remove from Redux
    dispatch(CollegesActions.deleteCollege(collegeId));

    // Get updated colleges from state and save to localStorage
    const colleges = getState().colleges;
    localStorage.setItem(COLLEGES_STORAGE_KEY, JSON.stringify(colleges));
  };
};

