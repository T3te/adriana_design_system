'use client';

import { Button, FluentProvider, tokens } from '@fluentui/react-components';
import { Settings24Regular, ChevronLeft24Regular } from '@fluentui/react-icons';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { NavbarConnect } from '@/components/ui/NavbarConnect';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { setTheme, themes } from '@/lib/redux/slices/themeSlice';
import "../globals.css";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const currentThemeName = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();
  const currentTheme = themes[currentThemeName];

  const isDarkMode = currentThemeName.includes('Dark');

  const handleThemeToggle = () => {
    // Váltás Light <-> Dark ugyanazon theme családon belül
    if (currentThemeName === 'Connect Light') {
      dispatch(setTheme('Connect Dark'));
    } else if (currentThemeName === 'Connect Dark') {
      dispatch(setTheme('Connect Light'));
    } else if (currentThemeName === 'Adriana Light') {
      dispatch(setTheme('Adriana Dark'));
    } else if (currentThemeName === 'Adriana Dark') {
      dispatch(setTheme('Adriana Light'));
    }
  };

  return (
    <FluentProvider theme={currentTheme}>
      <div className="flex min-h-screen" style={{ backgroundColor: tokens.colorNeutralBackground3 }} suppressHydrationWarning>
        {/* Floating Settings Button - Shown when collapsed */}
        {isNavCollapsed && (
          <div
            className="fixed left-4 z-50 shadow-lg cursor-pointer flex items-center justify-center"
            onClick={() => setIsNavCollapsed(false)}
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: tokens.colorNeutralBackground1,
              border: `1px solid ${tokens.colorNeutralStroke2}`,
              borderRadius: '50%',
              width: '48px',
              height: '48px',
            }}
          >
            <Settings24Regular />
          </div>
        )}

        {/* Collapsible Sidebar Navigation */}
        {!isNavCollapsed && (
          <div 
            className="relative transition-all duration-300 ease-in-out"
            style={{ 
              width: '280px',
              backgroundColor: tokens.colorNeutralBackground2,
              borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
            }}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-end p-4 pb-2">
              <Button
                appearance="subtle"
                icon={<ChevronLeft24Regular />}
                onClick={() => setIsNavCollapsed(true)}
                aria-label="Close navigation menu"
                style={{ minWidth: '32px' }}
              />
            </div>
            <div className="overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
              <Navigation onLinkClick={() => setIsNavCollapsed(true)} />
            </div>
          </div>
        )}

        {/* Main Content with Navbar */}
        <div className="flex-1 flex flex-col">
          <NavbarConnect 
            isDarkMode={isDarkMode}
            onThemeToggle={handleThemeToggle}
          />
          
          {/* Page Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </FluentProvider>
  );
}
