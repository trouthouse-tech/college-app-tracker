'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { NavBuilderActions } from '@/store/builders';
import type { Breadcrumb, BreadcrumbMenuItem } from '@/store/builders/navBuilder';

export const Breadcrumbs = () => {
  const dispatch = useAppDispatch();
  const breadcrumbs = useAppSelector((state) => state.navBuilder.breadcrumbs);
  const activeSection = useAppSelector((state) => state.navBuilder.activeSection);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const menuRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openMenuIndex === null) return;
      const currentMenuElement = menuRefs.current[openMenuIndex];
      if (currentMenuElement && !currentMenuElement.contains(event.target as Node)) {
        setOpenMenuIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openMenuIndex]);

  const handleClick = (href: string, index: number) => {
    dispatch(NavBuilderActions.setCurrentRoute(href));
    dispatch(NavBuilderActions.setBreadcrumbs(breadcrumbs.slice(0, index + 1)));
  };

  const handleToggleSidebar = () => {
    dispatch(NavBuilderActions.toggleSidebar());
  };

  const handleMenuToggle = (index: number) => {
    setOpenMenuIndex((current) => (current === index ? null : index));
  };

  const handleMenuItemSelect = (item: BreadcrumbMenuItem) => {
    dispatch(NavBuilderActions.setActiveSection(item.value));
    setOpenMenuIndex(null);
  };

  const renderBreadcrumbItem = (crumb: Breadcrumb, index: number) => {
    const isLast = index === breadcrumbs.length - 1;
    const hasMenu = crumb.menuItems && crumb.menuItems.length > 0;
    const isMenuOpen = openMenuIndex === index;

    if (hasMenu) {
      const activeItem = crumb.menuItems?.find((item) => item.value === activeSection);
      const displayLabel = activeItem?.label || crumb.label;

      return (
        <li
          key={crumb.href}
          className={styles.item}
          ref={(el) => { menuRefs.current[index] = el; }}
        >
          {index > 0 && <span className={styles.separator}>/</span>}
          <div className={styles.dropdownWrapper}>
            <button
              type="button"
              className={styles.dropdownButton}
              onClick={() => handleMenuToggle(index)}
              aria-expanded={isMenuOpen}
            >
              <span>{displayLabel}</span>
              <svg
                className={`${styles.chevron} ${isMenuOpen ? styles.chevronOpen : ''}`}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isMenuOpen && crumb.menuItems && (
              <div className={styles.dropdownMenu}>
                {crumb.menuItems.map((item, itemIndex) => {
                  const isActive = item.value === activeSection;
                  const isFirstGroup = itemIndex < 2;
                  const showDivider = itemIndex === 2;

                  return (
                    <div key={item.value}>
                      {showDivider && <div className={styles.menuDivider} />}
                      <button
                        type="button"
                        className={`${styles.menuItem} ${isActive ? styles.menuItemActive : ''}`}
                        onClick={() => handleMenuItemSelect(item)}
                      >
                        {item.label}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </li>
      );
    }

    return (
      <li key={crumb.href} className={styles.item}>
        {index > 0 && <span className={styles.separator}>/</span>}
        {!isLast ? (
          <Link
            href={crumb.href}
            className={styles.link}
            onClick={() => handleClick(crumb.href, index)}
          >
            {crumb.label}
          </Link>
        ) : (
          <span className={styles.current}>{crumb.label}</span>
        )}
      </li>
    );
  };

  return (
    <nav className={styles.container}>
      <button
        type="button"
        onClick={handleToggleSidebar}
        className={styles.menuButton}
        aria-label="Toggle sidebar"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <ol className={styles.list}>
        {breadcrumbs.map((crumb, index) => renderBreadcrumbItem(crumb, index))}
      </ol>
    </nav>
  );
};

const styles = {
  container: `
    px-4 py-2.5 border-b border-gray-200 bg-white flex items-center gap-3
  `,
  menuButton: `
    p-1.5 text-gray-500 hover:text-[#DE6521] hover:bg-orange-50 rounded-md transition-colors cursor-pointer
  `,
  list: `
    flex items-center gap-2
  `,
  item: `
    relative flex items-center gap-2
  `,
  link: `
    text-sm text-gray-500 hover:text-[#DE6521] transition-colors
  `,
  separator: `
    text-gray-300
  `,
  current: `
    text-sm text-gray-900 font-medium
  `,
  dropdownWrapper: `
    relative
  `,
  dropdownButton: `
    flex items-center gap-1.5 px-2 py-1 text-sm font-medium text-gray-700
    hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors cursor-pointer
  `,
  chevron: `
    w-4 h-4 text-gray-500 transition-transform duration-150
  `,
  chevronOpen: `
    rotate-180
  `,
  dropdownMenu: `
    absolute left-0 top-full z-50 mt-1.5 min-w-[200px] py-1
    bg-white border border-gray-200 rounded-lg shadow-lg
  `,
  menuItem: `
    w-full px-3 py-2 text-left text-sm text-gray-700
    hover:bg-orange-50 hover:text-[#DE6521] transition-colors cursor-pointer
  `,
  menuItemActive: `
    bg-orange-100 text-[#DE6521] font-medium
  `,
  menuDivider: `
    h-px bg-gray-200 my-1
  `,
};
