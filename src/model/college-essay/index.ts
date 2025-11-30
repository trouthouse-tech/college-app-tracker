export type EssayStatus = 'not_started' | 'drafting' | 'complete';

export type CollegeEssay = {
  id: string;
  collegeId: string;
  userId: string;
  title: string;
  prompt: string | null;
  wordLimit: number | null;
  content: string;
  status: EssayStatus;
  createdAt: string;
  updatedAt: string;
};

