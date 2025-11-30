import { httpsCallable } from 'firebase/functions';
import { functions } from '../firestore/config';

type SeedCollegesRequest = {
  stateFilter?: string;
  maxPages?: number;
};

type SeedCollegesResponse = {
  success: boolean;
  message?: string;
  data?: {
    totalFromApi: number;
    totalImported: number;
    totalSkipped: number;
    pagesProcessed: number;
  };
};

export const seedColleges = async (
  params?: SeedCollegesRequest
): Promise<SeedCollegesResponse> => {
  try {
    const { data } = await httpsCallable<
      SeedCollegesRequest,
      SeedCollegesResponse
    >(
      functions,
      'seedCollegesCallable'
    )(params || {});

    console.log('seedColleges response:', data);

    return data;
  } catch (error: any) {
    console.error('Error calling seedColleges:', error);
    return {
      success: false,
      message: error.message || 'Failed to seed colleges',
    };
  }
};

