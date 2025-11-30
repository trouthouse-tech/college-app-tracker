'use client';

import { useState } from 'react';
import { ApplicationsTab } from './applications';

const TABS = [
  { id: 'applications', label: 'Applications' },
] as const;

type TabId = typeof TABS[number]['id'];

export const CollegeDetailTabs = () => {
  const [activeTab, setActiveTab] = useState<TabId>('applications');

  return (
    <div className={styles.container}>
      <div className={styles.tabList}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? styles.tabActive : styles.tab}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'applications' && <ApplicationsTab />}
      </div>
    </div>
  );
};

const styles = {
  container: `
    mt-6
  `,
  tabList: `
    flex gap-0.5 border-b border-gray-200
  `,
  tab: `
    px-3 py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer
    border-b-2 border-transparent -mb-px
  `,
  tabActive: `
    px-3 py-2 text-sm text-[#DE6521] cursor-pointer font-medium
    border-b-2 border-[#FF7C1E] -mb-px
  `,
  tabContent: `
    pt-5
  `,
};
