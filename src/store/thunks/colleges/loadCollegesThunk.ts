import { CollegesActions } from '../../dumps';
import { AppThunk } from '../../types';

const COLLEGES_STORAGE_KEY = 'colleges';

export const loadCollegesThunk = (): AppThunk<void> => {
  return (dispatch) => {
    const stored = localStorage.getItem(COLLEGES_STORAGE_KEY);

    if (!stored) return;

    try {
      const colleges = JSON.parse(stored);
      dispatch(CollegesActions.setColleges(colleges));
    } catch (error) {
      console.error('Failed to parse colleges from localStorage:', error);
    }
  };
};

