'use client';

export const OverviewSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Overview</h2>
        <p className={styles.subtitle}>Quick glance at everything for this college</p>
      </div>

      <div className={styles.featureList}>
        <h3 className={styles.featureTitle}>Features coming to this section:</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>College name + basic info (pulled from College doc)</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>List of upcoming deadlines (across all types)</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Overall progress indicator</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Quick actions: &quot;Add deadline&quot;, &quot;Start essay&quot;</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: `
    p-6
  `,
  header: `
    mb-6
  `,
  title: `
    text-xl font-semibold text-gray-900
  `,
  subtitle: `
    text-sm text-gray-500 mt-1
  `,
  featureList: `
    bg-white border border-gray-200 rounded-lg p-5
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

