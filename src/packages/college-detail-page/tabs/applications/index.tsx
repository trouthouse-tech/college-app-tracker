'use client';

import { useAppSelector, useAppDispatch } from '@/store';
import { CollegeApplicationBuilderActions } from '@/store/builders';
import { useMemo } from 'react';
import {CreateApplicationModal} from '../../create-application-modal';

export const ApplicationsTab = () => {
  const dispatch = useAppDispatch();
  const collegeId = useAppSelector((state) => state.currentCollege.id);
  const allApplications = useAppSelector((state) => state.collegeApplications);

  const applications = useMemo(() => {
    return Object.values(allApplications).filter(
      (app) => app.collegeId === collegeId
    );
  }, [allApplications, collegeId]);

  const handleAddApplication = () => {
    dispatch(CollegeApplicationBuilderActions.openModal());
  };

  return (
    <div>
      <div className={styles.header}>
        <button onClick={handleAddApplication} className={styles.addButton}>
          + Add Application
        </button>
      </div>

      {applications.length === 0 ? (
        <div className={styles.empty}>
          <p>No applications yet.</p>
        </div>
      ) : (
        <div className={styles.list}>
          {applications.map((app) => (
            <div key={app.id} className={styles.item}>
              <span className={styles.date}>
                Created: {new Date(app.dateCreated).toLocaleDateString()}
              </span>
              <span className={styles.date}>
                Updated: {new Date(app.lastUpdated).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      )}

      <CreateApplicationModal />
    </div>
  );
};

const styles = {
  header: `
    flex justify-end mb-4
  `,
  addButton: `
    px-3 py-1.5 bg-[#FF7C1E] text-white text-sm font-medium rounded-md
    hover:bg-[#DE6521] transition-colors cursor-pointer
  `,
  empty: `
    text-gray-400 text-center text-sm py-8
  `,
  list: `
    flex flex-col gap-2
  `,
  item: `
    bg-white border border-gray-200 rounded-md p-3 flex gap-5
  `,
  date: `
    text-gray-500 text-sm
  `,
};
