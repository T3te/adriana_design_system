'use client';

import { Button, FluentProvider, webLightTheme, tokens } from '@fluentui/react-components';
import { Settings24Regular, ChevronLeft24Regular } from '@fluentui/react-icons';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { NavbarConnect } from '@/components/ui/NavbarConnect';
import "../globals.css";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <FluentProvider theme={webLightTheme}>
      <div className="flex min-h-screen bg-gray-50">
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
            {/* Header with title and close button */}
            <div className="flex items-center justify-between p-4 pb-2">
              <Link href="/" className="no-underline flex-1">
                <div 
                  className="text-xs font-semibold uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ color: tokens.colorNeutralForeground3 }}
                >
                  Fluent UI Design System
                </div>
              </Link>
              <Button
                appearance="subtle"
                icon={<ChevronLeft24Regular />}
                onClick={() => setIsNavCollapsed(true)}
                aria-label="Close navigation menu"
                style={{ minWidth: '32px' }}
              />
            </div>
            <div className="overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
              <Navigation inDrawer onLinkClick={() => setIsNavCollapsed(true)} />
            </div>
          </div>
        )}

        {/* Main Content with Navbar */}
        <div className="flex-1 flex flex-col">
          <NavbarConnect />
          
          {/* Page Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </FluentProvider>
  );
}
