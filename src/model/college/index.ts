export type College = {
  // Core identifiers
  id: string;
  scorecardId?: number;

  // Basic info
  name: string;
  city?: string;
  state?: string;
  zip?: string;
  address?: string;
  phoneNumber?: string;
  website?: string;

  // Location
  latitude?: number;
  longitude?: number;

  // Institution details
  ownership?: 'public' | 'private-nonprofit' | 'private-for-profit';
  institutionType?: string;
  predominantDegree?: string;
  highestDegree?: string;

  // Admissions
  admissionRate?: number;
  satAverageScore?: number;
  actCumulativeMidpoint?: number;

  // Costs
  tuitionInState?: number;
  tuitionOutOfState?: number;
  averageNetPrice?: number;

  // Outcomes
  completionRate?: number;
  retentionRate?: number;
  medianEarnings?: number;

  // Student body
  studentSize?: number;
  undergradSize?: number;

  // Metadata
  createdAt: number;
  updatedAt: number;
  importedFromScorecard?: boolean;

  // Legacy fields (for backwards compatibility)
  motto?: string;
};
