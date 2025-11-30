'use client';

export const OtherSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Other</h2>
        <p className={styles.subtitle}>Custom deadlines that don&apos;t fit elsewhere</p>
      </div>

      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>➕</div>
        <h3 className={styles.emptyTitle}>Custom deadlines coming soon</h3>
        <p className={styles.emptyText}>
          Add custom items like interviews, campus visits, or portfolio submissions.
        </p>
      </div>

      <div className={styles.featureList}>
        <h3 className={styles.featureTitle}>Features coming to this section:</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>List of custom items</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Per item: Label (text)</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Per item: Due date (date picker)</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Per item: Status (Pending / Complete)</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>&quot;Add Item&quot; button</span>
          </li>
        </ul>
      </div>

      <div className={styles.note}>
        <span className={styles.noteIcon}>💡</span>
        <span className={styles.noteText}>
          Simple key-value deadlines. Sync required before implementation.
        </span>
      </div>
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
    text-sm text-gray-500 max-w-md mx-auto
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
  note: `
    flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg p-3
  `,
  noteIcon: `
    text-lg
  `,
  noteText: `
    text-sm text-blue-700
  `,
};

