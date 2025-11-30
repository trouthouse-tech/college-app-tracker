import { College } from '@/model';

export type SearchCollegesRequest = {
  name?: string;
  state?: string;
  city?: string;
  page?: number;
  perPage?: number;
};

export type SearchCollegesResponse = {
  success: boolean;
  message?: string;
  data?: {
    total: number;
    page: number;
    perPage: number;
    colleges: College[];
  };
};

