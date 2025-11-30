'use client';

export const CollegeInfoSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>College Info</h2>
        <p className={styles.subtitle}>View-only info about the school (from API)</p>
      </div>

      <div className={styles.featureList}>
        <h3 className={styles.featureTitle}>Features coming to this section:</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Name, location, type (public/private)</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Acceptance rate</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Tuition (in-state, out-of-state)</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>Website link</span>
          </li>
          <li className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span className={styles.note}>All read-only, pulled from College Scorecard API</span>
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
  note: `
    italic text-gray-400
  `,
};

