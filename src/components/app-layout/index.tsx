'use client';

import { Sidebar } from '../sidebar';
import { Breadcrumbs } from '../breadcrumbs';

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <Breadcrumbs />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: `
    flex min-h-screen bg-gray-50
  `,
  main: `
    flex-1 flex flex-col
  `,
  content: `
    flex-1 overflow-auto
  `,
};
