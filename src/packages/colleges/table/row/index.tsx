'use client';

import { College } from '@/model';
import { formatPhoneNumber } from '@/utils';
import { useAppDispatch } from '@/store';
import { CollegeBuilderActions } from '@/store/builders';
import { setCurrentCollegeThunk } from '@/store/thunks';
import { useRouter } from 'next/navigation';

type CollegeRowProps = {
  college: College;
};

export const CollegeRow = ({ college }: CollegeRowProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleRowClick = () => {
    dispatch(setCurrentCollegeThunk(college.id));
    router.push(`/colleges/${college.id}`);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(CollegeBuilderActions.setDeletingCollegeId(college.id));
  };

  return (
    <tr className={styles.row} onClick={handleRowClick}>
      <td className={styles.td}>{college.name}</td>
      <td className={styles.td}>{college.address}</td>
      <td className={styles.td}>{formatPhoneNumber(college.phoneNumber)}</td>
      <td className={styles.tdMotto}>{college.motto}</td>
      <td className={styles.tdActions}>
        <button onClick={handleDeleteClick} className={styles.actionButton}>
          ⋯
        </button>
      </td>
    </tr>
  );
};

const styles = {
  row: `
    bg-white hover:bg-orange-50 transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer
  `,
  td: `
    text-sm text-gray-700 px-4 py-3
  `,
  tdMotto: `
    text-sm text-gray-500 italic px-4 py-3
  `,
  tdActions: `
    px-2 py-3 text-center
  `,
  actionButton: `
    w-7 h-7 flex items-center justify-center text-gray-400 
    hover:text-[#DE6521] hover:bg-orange-50 rounded-md transition-colors cursor-pointer text-base
  `,
};
