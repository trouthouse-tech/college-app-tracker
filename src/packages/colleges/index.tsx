'use client';

import { CollegesHeader } from './header';
import { CollegesFilter } from './filter';
import { CollegesTable } from './table';
import { DeleteCollegeModal } from './delete-modal';

export const CollegesPage = () => {
  return (
    <div className={styles.container}>
      <CollegesHeader />
      <CollegesFilter />
      <CollegesTable />
      <DeleteCollegeModal />
    </div>
  );
};

const styles = {
  container: `
    p-6
  `,
};
