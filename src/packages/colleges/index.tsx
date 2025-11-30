'use client';

import { CollegesHeader } from './header';
import { CollegesTable } from './table';
import { DeleteCollegeModal } from './delete-modal';

export const CollegesPage = () => {
  return (
    <div className={styles.container}>
      <CollegesHeader />
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
