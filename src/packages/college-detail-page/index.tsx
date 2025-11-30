'use client';

import { useAppSelector } from '@/store';
import {
  OverviewSection,
  CollegeInfoSection,
  ApplicationSection,
  EssaysSection,
  FinancialAidSection,
  DocumentsSection,
  OtherSection,
} from './sections';

export const CollegeDetailPage = () => {
  const activeSection = useAppSelector((state) => state.navBuilder.activeSection);

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'college-info':
        return <CollegeInfoSection />;
      case 'application':
        return <ApplicationSection />;
      case 'essays':
        return <EssaysSection />;
      case 'financial-aid':
        return <FinancialAidSection />;
      case 'documents':
        return <DocumentsSection />;
      case 'other':
        return <OtherSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className={styles.container}>
      {renderSection()}
    </div>
  );
};

const styles = {
  container: `
    
  `,
};
