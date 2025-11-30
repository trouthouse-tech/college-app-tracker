'use client';

import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/store';
import { NavBuilderActions } from '@/store/builders';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const currentRoute = useAppSelector((state) => state.navBuilder.currentRoute);
  const isVisible = useAppSelector((state) => state.navBuilder.isSidebarVisible);

  const handleNavigate = (href: string) => {
    dispatch(NavBuilderActions.setCurrentRoute(href));
    dispatch(NavBuilderActions.setBreadcrumbs([{ label: 'Colleges', href: '/' }]));
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return currentRoute === '/' || currentRoute.startsWith('/colleges');
    }
    return currentRoute.startsWith(href);
  };

  return (
    <aside className={`${styles.sidebar} ${!isVisible ? styles.sidebarHidden : ''}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.logoMark} />
          <span className={styles.logoText}>College Tracker</span>
        </div>

        <nav className={styles.navigation}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link
                href="/"
                className={`${styles.menuButton} ${isActive('/') ? styles.menuButtonActive : ''}`}
                onClick={() => handleNavigate('/')}
              >
                <span>Colleges</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.footer}>
          <p className={styles.footerText}>Application Tracker v1.0</p>
        </div>
      </div>
    </aside>
  );
};

const styles = {
  sidebar: `
    flex h-screen w-52 flex-col border-r border-gray-200 bg-white
    transition-all duration-200
  `,
  sidebarHidden: `
    !w-0 !overflow-hidden !border-r-0
  `,
  inner: `
    flex h-full flex-1 flex-col gap-3 p-3 min-w-52
  `,
  header: `
    flex items-center gap-2.5 rounded-md bg-orange-50 px-2.5 py-2.5
  `,
  logoMark: `
    w-7 h-7 rounded-md bg-gradient-to-br from-[#FF7C1E] to-[#DE6521]
  `,
  logoText: `
    text-sm font-semibold text-gray-900
  `,
  navigation: `
    flex-1
  `,
  menuList: `
    flex flex-col gap-0.5
  `,
  menuItem: `
    
  `,
  menuButton: `
    flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-sm font-medium
    text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900
  `,
  menuButtonActive: `
    bg-orange-50 text-[#DE6521]
  `,
  footer: `
    border-t border-gray-200 pt-3
  `,
  footerText: `
    text-xs text-gray-400
  `,
};
