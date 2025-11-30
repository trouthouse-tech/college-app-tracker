'use client';

import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import { store } from '../store/store';
import { loadCollegesThunk } from '../store/thunks';

const DataLoader = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    store.dispatch(loadCollegesThunk());
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
      </div>
    );
  }

  return <>{children}</>;
};

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <DataLoader>{children}</DataLoader>
    </Provider>
  );
};

const styles = {
  loadingContainer: `
    min-h-screen bg-zinc-900 flex items-center justify-center
  `,
  spinner: `
    w-8 h-8 border-2 border-zinc-700 border-t-teal-500 rounded-full animate-spin
  `,
};
