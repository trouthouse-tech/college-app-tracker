'use client';

import { CollegeRow } from './row';
import { useAppSelector } from '@/store';
import { useMemo } from 'react';

export const CollegesTable = () => {
  const colleges = useAppSelector((state) => state.colleges);
  const searchText = useAppSelector((state) => state.collegeBuilder.searchText);

  const collegesArray = useMemo(() => {
    const allColleges = Object.values(colleges);
    if (!searchText.trim()) return allColleges;

    const lowerSearch = searchText.toLowerCase();
    return allColleges.filter((college) =>
      college.name.toLowerCase().includes(lowerSearch)
    );
  }, [colleges, searchText]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Address</th>
            <th className={styles.th}>Phone</th>
            <th className={styles.th}>Motto</th>
            <th className={styles.thActions}></th>
          </tr>
        </thead>
        <tbody>
          {collegesArray.length === 0 ? (
            <tr>
              <td colSpan={5} className={styles.emptyState}>
                No colleges added yet. Click &quot;Add College&quot; to get started.
              </td>
            </tr>
          ) : (
            collegesArray.map((college) => (
              <CollegeRow key={college.id} college={college} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  tableContainer: `
    w-full overflow-x-auto rounded-md border border-gray-200 bg-white
  `,
  table: `
    w-full border-collapse
  `,
  headerRow: `
    bg-gray-50
  `,
  th: `
    text-left text-xs font-semibold text-gray-600 uppercase tracking-wide px-4 py-3 border-b border-gray-200
  `,
  thActions: `
    w-10 border-b border-gray-200
  `,
  emptyState: `
    text-gray-400 text-center text-sm py-10
  `,
};
