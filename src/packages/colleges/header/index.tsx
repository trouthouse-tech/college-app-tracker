'use client';

import { useAppSelector, useAppDispatch } from '@/store';
import { CollegeBuilderActions } from '@/store/builders';
import { CollegeModal } from '@/packages/college-modal';

export const CollegesHeader = () => {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector((state) => state.collegeBuilder.searchText);

  const handleAddCollege = () => {
    dispatch(CollegeBuilderActions.openModal());
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CollegeBuilderActions.setSearchText(e.target.value));
  };

  return (
    <>
      <header className={styles.header}>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search colleges..."
          className={styles.searchInput}
        />
        <button onClick={handleAddCollege} className={styles.addButton}>
          + Add College
        </button>
      </header>

      <CollegeModal />
    </>
  );
};

const styles = {
  header: `
    mb-4 flex items-center gap-3
  `,
  searchInput: `
    flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md
    text-sm text-gray-900 placeholder-gray-400
    focus:outline-none focus:ring-1 focus:ring-[#FF7C1E] focus:border-[#FF7C1E]
    transition-all
  `,
  addButton: `
    px-3.5 py-2 bg-[#FF7C1E] text-white text-sm font-medium rounded-md
    hover:bg-[#DE6521] transition-colors cursor-pointer whitespace-nowrap
  `,
};
