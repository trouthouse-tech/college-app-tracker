'use client';

import { useAppSelector, useAppDispatch } from '@/store';
import { CollegeApplicationBuilderActions } from '@/store/builders';
import { useMemo } from 'react';
import { CreateApplicationModal } from '../../create-application-modal';

export const ApplicationSection = () => {
  const dispatch = useAppDispatch();
  const collegeId = useAppSelector((state) => state.currentCollege.id);
  const allApplications = useAppSelector((state) => state.collegeApplications);

  const application = useMemo(() => {
    return Object.values(allApplications).find(
      (app) => app.collegeId === collegeId
    );
  }, [allApplications, collegeId]);

  const handleStartTracking = () => {
    dispatch(CollegeApplicationBuilderActions.openModal());
  };

  if (!application) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📋</div>
          <h3 className={styles.emptyTitle}>Not tracking this application yet</h3>
          <p className={styles.emptyText}>
            Start tracking to manage deadlines, status, and notes for this college.
          </p>
          <button onClick={handleStartTracking} className={styles.startButton}>
            Start Tracking Application
          </button>
        </div>

        <div className={styles.featureList}>
          <h3 className={styles.featureTitle}>Features available when tracking:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>Application deadline (date picker)</span>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>Application type: ED / EA / RD / Rolling (dropdown)</span>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>Status: Not started / In progress / Submitted (dropdown)</span>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>Portal URL (optional text field)</span>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>Notes (text area)</span>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>&quot;Mark as submitted&quot; button</span>
            </li>
          </ul>
        </div>

        <CreateApplicationModal />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Application</h2>
        <p className={styles.subtitle}>Track your application submission</p>
      </div>

      <div className={styles.card}>
        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <span className={styles.label}>Status</span>
            <span className={styles.value}>{application.status.replace('_', ' ')}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Type</span>
            <span className={styles.value}>{application.applicationType || '—'}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Deadline</span>
            <span className={styles.value}>
              {application.deadline ? new Date(application.deadline).toLocaleDateString() : '—'}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.featureList}>
        <h3 className={styles.featureTitle}>Features coming to this section:</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Edit application deadline (date picker)</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Change application type: ED / EA / RD / Rolling</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Update status: Not started / In progress / Submitted</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Portal URL field</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Notes section</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>&quot;Mark as submitted&quot; action</span>
          </li>
        </ul>
      </div>

      <CreateApplicationModal />
    </div>
  );
};

const styles = {
  container: `
    p-6 space-y-6
  `,
  header: `
    
  `,
  title: `
    text-xl font-semibold text-gray-900
  `,
  subtitle: `
    text-sm text-gray-500 mt-1
  `,
  card: `
    bg-white border border-gray-200 rounded-lg p-5
  `,
  fieldRow: `
    flex gap-6
  `,
  field: `
    flex flex-col gap-1
  `,
  label: `
    text-xs font-medium text-gray-400 uppercase tracking-wide
  `,
  value: `
    text-base text-gray-900 capitalize
  `,
  emptyState: `
    bg-white border border-gray-200 rounded-lg p-8 text-center
  `,
  emptyIcon: `
    text-4xl mb-3
  `,
  emptyTitle: `
    text-lg font-medium text-gray-900 mb-2
  `,
  emptyText: `
    text-sm text-gray-500 mb-5 max-w-md mx-auto
  `,
  startButton: `
    px-4 py-2 bg-[#FF7C1E] text-white text-sm font-medium rounded-md
    hover:bg-[#DE6521] transition-colors cursor-pointer
  `,
  featureList: `
    bg-gray-50 border border-gray-200 rounded-lg p-5
  `,
  featureTitle: `
    text-sm font-medium text-gray-700 mb-4
  `,
  list: `
    space-y-3
  `,
  item: `
    flex items-start gap-3 text-sm text-gray-600
  `,
  bullet: `
    text-[#FF7C1E] font-bold
  `,
};

