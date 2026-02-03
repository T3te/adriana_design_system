'use client';

import { Button } from '@fluentui/react-components';
import { WeatherMoon20Regular, WeatherSunny20Regular } from '@fluentui/react-icons';

interface ThemeToggleProps {
  isDarkMode?: boolean;
  onToggle?: () => void;
}

export default function ThemeToggle({ isDarkMode = false, onToggle }: ThemeToggleProps) {
  return (
    <Button 
      appearance="subtle" 
      icon={isDarkMode ? <WeatherSunny20Regular /> : <WeatherMoon20Regular />}
      onClick={onToggle}
      title={isDarkMode ? 'Világos mód' : 'Sötét mód'}
    />
  );
}
