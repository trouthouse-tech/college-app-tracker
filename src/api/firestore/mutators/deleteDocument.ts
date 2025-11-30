import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config';
import { FIRESTORE_COLLECTIONS, ApiResponse, HTTP_STATUS } from '../types';

export const deleteDocument = async (
  collection: FIRESTORE_COLLECTIONS,
  documentId: string
): Promise<ApiResponse> => {
  try {
    const docRef = doc(db, collection, documentId);
    await deleteDoc(docRef);

    return {
      success: true,
      statusCode: HTTP_STATUS.OK,
    };
  } catch (error: any) {
    return {
      success: false,
      error: {
        code: error.code || 'UNKNOWN_ERROR',
        message: error.message || 'Failed to delete document',
        details: error,
      },
      statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR,
    };
  }
};

