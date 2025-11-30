'use client';

import { useAppSelector, useAppDispatch } from '@/store';
import { CollegeEssayBuilderActions } from '@/store/builders';
import { useMemo } from 'react';

export const EssaysSection = () => {
  const dispatch = useAppDispatch();
  const collegeId = useAppSelector((state) => state.currentCollege.id);
  const allEssays = useAppSelector((state) => state.collegeEssays);

  const essays = useMemo(() => {
    return Object.values(allEssays).filter(
      (essay) => essay.collegeId === collegeId
    );
  }, [allEssays, collegeId]);

  const handleAddEssay = () => {
    dispatch(CollegeEssayBuilderActions.openModal());
  };

  if (essays.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>✍️</div>
          <h3 className={styles.emptyTitle}>No essays yet</h3>
          <p className={styles.emptyText}>
            Add essays to track your writing progress and get AI-powered feedback.
          </p>
          <button onClick={handleAddEssay} className={styles.startButton}>
            Add First Essay
          </button>
        </div>

        <div className={styles.featureList}>
          <h3 className={styles.featureTitle}>Features coming to this section:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>List of essays for this college</span>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>Per essay: Title/label (e.g., &quot;Why NYU&quot;)</span>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>Per essay: Prompt (text the student enters)</span>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>Per essay: Word limit (number)</span>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>Per essay: Status (Not started / Drafting / Complete)</span>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>&quot;Edit&quot; button → opens AI editor</span>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>&quot;Add Essay&quot; button</span>
            </li>
          </ul>
        </div>

        <div className={styles.featureList}>
          <h3 className={styles.featureTitle}>AI Editor features:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>Text editor with word count</span>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>&quot;AI Review&quot; button for feedback</span>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>•</span>
              <span>Save draft functionality</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Essays</h2>
          <p className={styles.subtitle}>Track and write essays for this college</p>
        </div>
        <button onClick={handleAddEssay} className={styles.addButton}>
          + Add Essay
        </button>
      </div>

      <div className={styles.essayList}>
        {essays.map((essay) => (
          <div key={essay.id} className={styles.essayCard}>
            <div className={styles.essayHeader}>
              <h3 className={styles.essayTitle}>{essay.title}</h3>
              <span className={`${styles.status} ${styles[`status_${essay.status}`]}`}>
                {essay.status.replace('_', ' ')}
              </span>
            </div>
            {essay.prompt && (
              <p className={styles.prompt}>{essay.prompt}</p>
            )}
            <div className={styles.essayMeta}>
              {essay.wordLimit && (
                <span className={styles.wordLimit}>
                  {essay.content.split(/\s+/).filter(Boolean).length} / {essay.wordLimit} words
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.featureList}>
        <h3 className={styles.featureTitle}>Features coming to this section:</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>&quot;Edit&quot; button → opens AI editor</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>AI Review button for feedback</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Draft versioning</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: `
    p-6 space-y-6
  `,
  header: `
    flex items-start justify-between
  `,
  title: `
    text-xl font-semibold text-gray-900
  `,
  subtitle: `
    text-sm text-gray-500 mt-1
  `,
  addButton: `
    px-3 py-1.5 bg-[#FF7C1E] text-white text-sm font-medium rounded-md
    hover:bg-[#DE6521] transition-colors cursor-pointer
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
  essayList: `
    space-y-3
  `,
  essayCard: `
    bg-white border border-gray-200 rounded-lg p-4
  `,
  essayHeader: `
    flex items-center justify-between mb-2
  `,
  essayTitle: `
    font-medium text-gray-900
  `,
  status: `
    text-xs px-2 py-1 rounded-full capitalize
  `,
  status_not_started: `
    bg-gray-100 text-gray-600
  `,
  status_drafting: `
    bg-yellow-100 text-yellow-700
  `,
  status_complete: `
    bg-green-100 text-green-700
  `,
  prompt: `
    text-sm text-gray-500 italic mb-2
  `,
  essayMeta: `
    text-xs text-gray-400
  `,
  wordLimit: `
    
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

