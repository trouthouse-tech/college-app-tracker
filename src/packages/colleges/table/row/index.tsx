'use client';

import { College } from '@/model';
import { useAppDispatch } from '@/store';
import { CollegeBuilderActions } from '@/store/builders';
import { setCurrentCollegeThunk } from '@/store/thunks';
import { useRouter } from 'next/navigation';

type CollegeRowProps = {
  college: College;
};

const formatCurrency = (value?: number) => {
  if (value === undefined || value === null) return '—';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

const formatPercent = (value?: number) => {
  if (value === undefined || value === null) return '—';
  return `${(value * 100).toFixed(1)}%`;
};

const formatNumber = (value?: number) => {
  if (value === undefined || value === null) return '—';
  return new Intl.NumberFormat('en-US').format(value);
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

  const location = [college.city, college.state].filter(Boolean).join(', ') || '—';

  return (
    <tr className={styles.row} onClick={handleRowClick}>
      <td className={styles.td}>
        <div className={styles.nameCell}>
          <span className={styles.collegeName}>{college.name}</span>
          {college.website && (
            <a
              href={college.website.startsWith('http') ? college.website : `https://${college.website}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={styles.websiteLink}
            >
              Visit Website
            </a>
          )}
        </div>
      </td>
      <td className={styles.td}>{location}</td>
      <td className={styles.td}>{formatPercent(college.admissionRate)}</td>
      <td className={styles.td}>{formatNumber(college.studentSize)}</td>
      <td className={styles.td}>{formatCurrency(college.tuitionInState)}</td>
      <td className={styles.td}>{formatCurrency(college.tuitionOutOfState)}</td>
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
  nameCell: `
    flex flex-col gap-0.5
  `,
  collegeName: `
    font-medium text-gray-900
  `,
  websiteLink: `
    text-xs text-[#FF7C1E] hover:underline
  `,
  tdActions: `
    px-2 py-3 text-center
  `,
  actionButton: `
    w-7 h-7 flex items-center justify-center text-gray-400 
    hover:text-[#DE6521] hover:bg-orange-50 rounded-md transition-colors cursor-pointer text-base
  `,
};
