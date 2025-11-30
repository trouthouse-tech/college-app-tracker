import { College } from '../../../model';
import { CollegesActions } from '../../dumps';
import { AppThunk } from '../../types';

const COLLEGES_STORAGE_KEY = 'colleges';

export const saveCollegeThunk = (college: College): AppThunk<void> => {
  return (dispatch, getState) => {
    // Add to Redux
    dispatch(CollegesActions.addCollege(college));

    // Get updated colleges from state and save to localStorage
    const colleges = getState().colleges;
    localStorage.setItem(COLLEGES_STORAGE_KEY, JSON.stringify(colleges));
  };
};

