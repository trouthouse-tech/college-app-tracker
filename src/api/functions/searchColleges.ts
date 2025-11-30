import { httpsCallable } from 'firebase/functions';
import { functions } from '../firestore/config';
import { SearchCollegesRequest, SearchCollegesResponse } from './types';

export const searchColleges = async (
  params: SearchCollegesRequest
): Promise<SearchCollegesResponse> => {
  try {
    const { data } = await httpsCallable<
      SearchCollegesRequest,
      SearchCollegesResponse
    >(
      functions,
      'searchColleges'
    )(params);

    console.log('searchColleges response:', data);

    return data;
  } catch (error: any) {
    console.error('Error calling searchColleges:', error);
    return {
      success: false,
      message: error.message || 'Failed to search colleges',
    };
  }
};
