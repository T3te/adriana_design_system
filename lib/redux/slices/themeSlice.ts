import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Theme } from '@fluentui/react-components';
import { adrianaLightTheme, adrianaDarkTheme, connectLightTheme, connectDarkTheme } from '@/lib/themes';

export type ThemeName = 'Adriana Light' | 'Adriana Dark' | 'Connect Light' | 'Connect Dark';

export const themes: Record<ThemeName, Theme> = {
  'Adriana Light': adrianaLightTheme,
  'Adriana Dark': adrianaDarkTheme,
  'Connect Light': connectLightTheme,
  'Connect Dark': connectDarkTheme,
};

interface ThemeState {
  currentTheme: ThemeName;
}

const initialState: ThemeState = {
  currentTheme: 'Adriana Light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeName>) => {
      state.currentTheme = action.payload;
      // LocalStorage mentés (kliens oldalon)
      if (typeof window !== 'undefined') {
        localStorage.setItem('selectedTheme', action.payload);
      }
    },
    initializeTheme: (state) => {
      // LocalStorage betöltés (kliens oldalon)
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('selectedTheme') as ThemeName | null;
        if (savedTheme && themes[savedTheme]) {
          state.currentTheme = savedTheme;
        }
      }
    },
  },
});

export const { setTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;
