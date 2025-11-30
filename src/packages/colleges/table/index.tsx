'use client';

import { CollegeRow } from './row';
import { useAppSelector, useAppDispatch } from '@/store';
import { CollegeBuilderActions } from '@/store/builders';
import { searchCollegesThunk } from '@/store/thunks';
import { useMemo } from 'react';

export const CollegesTable = () => {
  const dispatch = useAppDispatch();
  const colleges = useAppSelector((state) => state.colleges);
  const isLoading = useAppSelector((state) => state.collegeBuilder.isLoading);
  const hasSearched = useAppSelector((state) => state.collegeBuilder.hasSearched);
  const currentPage = useAppSelector((state) => state.collegeBuilder.currentPage);
  const perPage = useAppSelector((state) => state.collegeBuilder.perPage);
  const totalResults = useAppSelector((state) => state.collegeBuilder.totalResults);

  const collegesArray = useMemo(() => Object.values(colleges), [colleges]);

  const totalPages = Math.ceil(totalResults / perPage);
  const showPagination = hasSearched && totalResults > perPage;

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      dispatch(CollegeBuilderActions.setCurrentPage(currentPage - 1));
      dispatch(searchCollegesThunk());
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      dispatch(CollegeBuilderActions.setCurrentPage(currentPage + 1));
      dispatch(searchCollegesThunk());
    }
  };

  return (
    <div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Location</th>
              <th className={styles.th}>Admission Rate</th>
              <th className={styles.th}>Student Size</th>
              <th className={styles.th}>Tuition (In-State)</th>
              <th className={styles.th}>Tuition (Out-of-State)</th>
              <th className={styles.thActions}></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={7} className={styles.loadingState}>
                  Searching colleges...
                </td>
              </tr>
            ) : !hasSearched ? (
              <tr>
                <td colSpan={7} className={styles.emptyState}>
                  Use the filters above to search for colleges.
                </td>
              </tr>
            ) : collegesArray.length === 0 ? (
              <tr>
                <td colSpan={7} className={styles.emptyState}>
                  No colleges found matching your criteria.
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

      {showPagination && (
        <div className={styles.pagination}>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 0 || isLoading}
            className={styles.paginationButton}
          >
            Previous
          </button>
          <span className={styles.pageInfo}>
            Page {currentPage + 1} of {totalPages} ({totalResults} total results)
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages - 1 || isLoading}
            className={styles.paginationButton}
          >
            Next
          </button>
        </div>
      )}
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
  loadingState: `
    text-gray-500 text-center text-sm py-10
  `,
  pagination: `
    flex items-center justify-between mt-4 px-2
  `,
  paginationButton: `
    px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md
    hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed
    transition-colors
  `,
  pageInfo: `
    text-sm text-gray-600
  `,
};
