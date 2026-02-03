'use client';

import { Button, FluentProvider, webLightTheme, tokens } from '@fluentui/react-components';
import { Settings24Regular, ChevronLeft24Regular } from '@fluentui/react-icons';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { NavbarConnect } from '@/components/ui/NavbarConnect';

export default function BlankPage() {
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
            <div className="overflow-y-auto px-6 pb-6" style={{ height: 'calc(100vh - 64px)' }}>
              <Navigation inDrawer />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <NavbarConnect />

        {/* Main Content Area */}
        <main className="flex-1 container mx-auto p-6">
          <div className="bg-white rounded-lg shadow p-8">
            <h1 className="text-2xl font-bold mb-4">Üdvözöljük!</h1>
            <p className="text-gray-600">
              Ez egy teljesen önálló blank oldal az Adriana Connect navbar-ral.
            </p>
            <p className="text-gray-600 mt-2">
              Ez az oldal nem használja a design system layout-ját - van egy összecsukható navigation sidebar.
            </p>
            <p className="text-gray-600 mt-2">
              A navbar tartalmazza:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Adriana Accounting és Connect logókat (valódi képek)</li>
              <li>Központi szöveg (eltűnik mobilon)</li>
              <li>Terhelés összege gomb (eltűnik mobilon)</li>
              <li>Felhasználói profil menü</li>
            </ul>
            <p className="text-gray-600 mt-4">
              <strong>Navigáció:</strong> A bal oldali fogaskerékre kattintva nyitható ki a menü, majd a nyíllal zárható be.
            </p>
            <div className="mt-6">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Vissza a design system főoldalára
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
    </FluentProvider>
  );
}
