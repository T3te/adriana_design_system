'use client';

import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';
import { initializeTheme } from './slices/themeSlice';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    // Téma inicializálása localStorage-ből
    if (storeRef.current) {
      storeRef.current.dispatch(initializeTheme());
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
