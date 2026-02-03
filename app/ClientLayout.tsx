'use client';

import { FluentProvider, Menu, MenuTrigger, MenuPopover, MenuList, MenuItem, Button } from '@fluentui/react-components';
import { ColorRegular } from '@fluentui/react-icons';
import Navigation, { pageRoutes } from '@/components/Navigation';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { setTheme, themes, type ThemeName } from '@/lib/redux/slices/themeSlice';
import { usePathname } from 'next/navigation';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentThemeName = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();
  const currentTheme = themes[currentThemeName];
  const pathname = usePathname();

  const handleThemeChange = (themeName: ThemeName) => {
    dispatch(setTheme(themeName));
  };

  // (blank) route group oldalai esetén ne rendereljük a navigation-t és a témaváltót
  const isBlankPage = pageRoutes.some(route => pathname === route.path);

  if (isBlankPage) {
    return (
      <FluentProvider theme={currentTheme}>
        {children}
      </FluentProvider>
    );
  }

  return (
    <FluentProvider theme={currentTheme}>
      <div className="flex min-h-screen" style={{ backgroundColor: currentTheme.colorNeutralBackground1 }}>
        <Navigation />
        <main className="flex-1 p-12 max-w-7xl" style={{ backgroundColor: currentTheme.colorNeutralBackground1, color: currentTheme.colorNeutralForeground1 }}>
          <div className="fixed top-4 right-4 z-50">
            <Menu>
              <MenuTrigger>
                <Button appearance="primary" icon={<ColorRegular />}>
                  {currentThemeName}
                </Button>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  {(Object.keys(themes) as ThemeName[]).map((themeName) => (
                    <MenuItem key={themeName} onClick={() => handleThemeChange(themeName)}>
                      {themeName}
                    </MenuItem>
                  ))}
                </MenuList>
              </MenuPopover>
            </Menu>
          </div>
          {children}
        </main>
      </div>
    </FluentProvider>
  );
}
