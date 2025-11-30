export type ApplicationType = 'early_decision' | 'early_action' | 'regular_decision' | 'rolling';

export type ApplicationStatus = 'not_started' | 'in_progress' | 'submitted';

export type CollegeApplication = {
  id: string;
  collegeId: string;
  userId: string;
  applicationType: ApplicationType | null;
  deadline: string | null;
  status: ApplicationStatus;
  portalUrl: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};

