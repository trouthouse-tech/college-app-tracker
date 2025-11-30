export enum FIRESTORE_COLLECTIONS {
  COLLEGES = 'colleges',
  COLLEGE_APPLICATIONS = 'collegeApplications',
  COLLEGE_ESSAYS = 'collegeEssays',
}

export enum HTTP_STATUS {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  statusCode: number;
}

export interface DocumentOptions {
  merge?: boolean;
  timeout?: number;
}

