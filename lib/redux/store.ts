import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore non-serializable values in theme objects
          ignoredActions: ['theme/setTheme', 'theme/initializeTheme'],
          ignoredPaths: ['theme.currentTheme'],
        },
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
