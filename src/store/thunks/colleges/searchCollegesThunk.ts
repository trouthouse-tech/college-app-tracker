import { searchColleges } from '@/api';
import { CollegesActions } from '../../dumps';
import { CollegeBuilderActions } from '../../builders';
import { AppThunk } from '../../types';

export const searchCollegesThunk = (): AppThunk<Promise<void>> => {
  return async (dispatch, getState) => {
    const state = getState();
    const { searchText, filterState, filterCity, currentPage, perPage } = state.collegeBuilder;

    dispatch(CollegeBuilderActions.setIsLoading(true));

    try {
      const response = await searchColleges({
        name: searchText || undefined,
        state: filterState || undefined,
        city: filterCity || undefined,
        page: currentPage,
        perPage,
      });

      if (response.success && response.data) {
        // Convert array to record for Redux store
        const collegesRecord: Record<string, typeof response.data.colleges[0]> = {};
        response.data.colleges.forEach((college) => {
          collegesRecord[college.id] = college;
        });

        dispatch(CollegesActions.setColleges(collegesRecord));
        dispatch(CollegeBuilderActions.setTotalResults(response.data.total));
        dispatch(CollegeBuilderActions.setHasSearched(true));
      } else {
        console.error('Search failed:', response.message);
      }
    } catch (error) {
      console.error('Error searching colleges:', error);
    } finally {
      dispatch(CollegeBuilderActions.setIsLoading(false));
    }
  };
};

