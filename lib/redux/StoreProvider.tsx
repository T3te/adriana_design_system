'use client';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';
import { initializeTheme } from './slices/themeSlice';

// Create store outside component to avoid ref issues
let globalStore: AppStore | null = null;

function getOrCreateStore(): AppStore {
  if (!globalStore) {
    globalStore = makeStore();
  }
  return globalStore;
}

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = getOrCreateStore();

  useEffect(() => {
    // Téma inicializálása localStorage-ből
    store.dispatch(initializeTheme());
  }, [store]);
  
  return <Provider store={store}>{children}</Provider>;
}
