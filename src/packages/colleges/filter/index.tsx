'use client';

import { useAppSelector, useAppDispatch } from '@/store';
import { CollegeBuilderActions } from '@/store/builders';
import { searchCollegesThunk } from '@/store/thunks';
import { US_STATES } from '@/utils';

export const CollegesFilter = () => {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector((state) => state.collegeBuilder.searchText);
  const filterState = useAppSelector((state) => state.collegeBuilder.filterState);
  const filterCity = useAppSelector((state) => state.collegeBuilder.filterCity);
  const isLoading = useAppSelector((state) => state.collegeBuilder.isLoading);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CollegeBuilderActions.setSearchText(e.target.value));
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(CollegeBuilderActions.setFilterState(e.target.value));
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CollegeBuilderActions.setFilterCity(e.target.value));
  };

  const handleApply = () => {
    dispatch(CollegeBuilderActions.setCurrentPage(0));
    dispatch(searchCollegesThunk());
  };

  const handleReset = () => {
    dispatch(CollegeBuilderActions.resetFilters());
  };

  return (
    <div className={styles.container}>
      <div className={styles.filtersRow}>
        <div className={styles.filterGroup}>
          <label className={styles.label}>College Name</label>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search by name..."
            className={styles.input}
          />
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.label}>State</label>
          <select
            value={filterState}
            onChange={handleStateChange}
            className={styles.select}
          >
            <option value="">All States</option>
            {US_STATES.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.label}>City</label>
          <input
            type="text"
            value={filterCity}
            onChange={handleCityChange}
            placeholder="Filter by city..."
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.actionsRow}>
        <button
          onClick={handleApply}
          disabled={isLoading}
          className={styles.applyButton}
        >
          {isLoading ? 'Searching...' : 'Apply Filters'}
        </button>
        <button
          onClick={handleReset}
          disabled={isLoading}
          className={styles.resetButton}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: `
    mb-6 p-4 bg-white rounded-lg border border-gray-200
  `,
  filtersRow: `
    grid grid-cols-1 md:grid-cols-3 gap-4 mb-4
  `,
  filterGroup: `
    flex flex-col
  `,
  label: `
    text-xs font-medium text-gray-600 uppercase tracking-wide mb-1
  `,
  input: `
    px-3 py-2 bg-white border border-gray-300 rounded-md
    text-sm text-gray-900 placeholder-gray-400
    focus:outline-none focus:ring-1 focus:ring-[#FF7C1E] focus:border-[#FF7C1E]
    transition-all
  `,
  select: `
    px-3 py-2 bg-white border border-gray-300 rounded-md
    text-sm text-gray-900
    focus:outline-none focus:ring-1 focus:ring-[#FF7C1E] focus:border-[#FF7C1E]
    transition-all
  `,
  actionsRow: `
    flex gap-3
  `,
  applyButton: `
    px-4 py-2 bg-[#FF7C1E] text-white text-sm font-medium rounded-md
    hover:bg-[#e66b15] disabled:opacity-50 disabled:cursor-not-allowed
    transition-colors
  `,
  resetButton: `
    px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md
    hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed
    transition-colors
  `,
};
