'use client';

import { useAppSelector, useAppDispatch } from '@/store';
import { CollegeBuilderActions } from '@/store/builders';

export const CollegesFilter = () => {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector((state) => state.collegeBuilder.searchText);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CollegeBuilderActions.setSearchText(e.target.value));
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search colleges by name..."
        className={styles.input}
      />
    </div>
  );
};

const styles = {
  container: `
    mb-4
  `,
  input: `
    w-full px-3 py-2 bg-white border border-gray-300 rounded-md
    text-sm text-gray-900 placeholder-gray-400
    focus:outline-none focus:ring-1 focus:ring-[#FF7C1E] focus:border-[#FF7C1E]
    transition-all
  `,
};
