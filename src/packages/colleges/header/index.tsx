'use client';

import { useState } from 'react';
import { useAppDispatch } from '@/store';
import { CollegeBuilderActions } from '@/store/builders';
import { CollegeModal } from '@/packages/college-modal';
import { seedColleges } from '@/api';

export const CollegesHeader = () => {
  const dispatch = useAppDispatch();
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedStatus, setSeedStatus] = useState<string | null>(null);

  const handleAddCollege = () => {
    dispatch(CollegeBuilderActions.openModal());
  };

  const handleSeedData = async () => {
    if (isSeeding) return;

    const confirmed = window.confirm(
      'This will import colleges from the College Scorecard API. Continue?'
    );
    if (!confirmed) return;

    setIsSeeding(true);
    setSeedStatus('Seeding...');

    try {
      const response = await seedColleges({ maxPages: 5 }); // Limit to 5 pages (~500 colleges)

      if (response.success && response.data) {
        setSeedStatus(
          `✅ Done! Imported ${response.data.totalImported}, skipped ${response.data.totalSkipped}`
        );
      } else {
        setSeedStatus(`❌ Error: ${response.message}`);
      }
    } catch (error) {
      setSeedStatus(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSeeding(false);
      // Clear status after 5 seconds
      setTimeout(() => setSeedStatus(null), 5000);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Colleges</h1>
        <div className={styles.actions}>
          {/* TEMP: Seed button */}
          <button
            onClick={handleSeedData}
            disabled={isSeeding}
            className={styles.seedButton}
          >
            {isSeeding ? '⏳ Seeding...' : '🌱 Seed Data'}
          </button>
          <button onClick={handleAddCollege} className={styles.addButton}>
            + Add College
          </button>
        </div>
      </header>

      {seedStatus && (
        <div className={styles.statusBanner}>
          {seedStatus}
        </div>
      )}

      <CollegeModal />
    </>
  );
};

const styles = {
  header: `
    mb-4 flex items-center justify-between
  `,
  title: `
    text-xl font-semibold text-gray-900
  `,
  actions: `
    flex items-center gap-3
  `,
  seedButton: `
    px-3.5 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md
    hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed
    transition-colors cursor-pointer whitespace-nowrap
  `,
  addButton: `
    px-3.5 py-2 bg-[#FF7C1E] text-white text-sm font-medium rounded-md
    hover:bg-[#DE6521] transition-colors cursor-pointer whitespace-nowrap
  `,
  statusBanner: `
    mb-4 px-4 py-2 bg-gray-100 border border-gray-200 rounded-md text-sm text-gray-700
  `,
};
