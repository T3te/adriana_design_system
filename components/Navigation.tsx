'use client';

import Link from 'next/link';
import { Button, Badge, tokens } from '@fluentui/react-components';
import { usePathname } from 'next/navigation';
import { ChevronDownRegular, ChevronRightRegular } from '@fluentui/react-icons';
import { useState } from 'react';

const routes: Array<{ path: string; label: string; badge?: string }> = [
  { path: '/', label: 'Kezdj itt!' },
];

const designRoutes: Array<{ path: string; label: string; badge?: string }> = [
  { path: '/design/typography', label: 'Tipográfia' },
  { path: '/design/colors', label: 'Színek' },
  { path: '/design/border-radius', label: 'Sarokkerekítés' },
  { path: '/design/shadow', label: 'Árnyékok' },
  { path: '/design/spacing', label: 'Térközök és méretek' },
  { path: '/design/icons', label: 'Ikonok' },
];

const buttonRoutes: Array<{ path: string; label: string; badge?: string }> = [
  { path: '/components/button', label: 'Button - Gomb' },
  { path: '/components/compound-button', label: 'CompoundButton - Összetett Gomb' },
  { path: '/components/menu-button', label: 'MenuButton - Menü Gomb' },
  { path: '/components/split-button', label: 'SplitButton - Osztott Gomb' },
  { path: '/components/toggle-button', label: 'ToggleButton - Kapcsoló Gomb' },
];

const badgeRoutes: Array<{ path: string; label: string; badge?: string }> = [
  { path: '/components/badge', label: 'Badge - Jelvény' },
  { path: '/components/counter-badge', label: 'CounterBadge - Számláló jelvény' },
  { path: '/components/presence-badge', label: 'PresenceBadge - Jelenlét jelvény' },
];

const cardRoutes: Array<{ path: string; label: string; badge?: string }> = [
  { path: '/components/card', label: 'Card - Kártya' },
  { path: '/components/card-footer', label: 'CardFooter' },
  { path: '/components/card-header', label: 'CardHeader' },
  { path: '/components/card-preview', label: 'CardPreview' },
];

const carouselRoutes: Array<{ path: string; label: string; badge?: string }> = [
  { path: '/components/carousel', label: 'Carousel - Körhinta' },
  { path: '/components/carousel-nav', label: 'CarouselNav' },
];

const componentRoutes: Array<{ path: string; label: string; badge?: string }> = [
  { path: '/components/accordion', label: 'Accordion - Harmonika' },
  { path: '/components/avatar', label: 'Avatar - Avatár' },
  { path: '/components/avatar-group', label: 'AvatarGroup - Avatar csoport' },
  { path: '/components/breadcrumb', label: 'Breadcrumb - Morzsaút' },
  { path: '/components/checkbox', label: 'Checkbox - Jelölőnégyzet' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isDesignOpen, setIsDesignOpen] = useState(pathname.startsWith('/design'));
  const [isComponentsOpen, setIsComponentsOpen] = useState(pathname.startsWith('/components'));
  const [isButtonsOpen, setIsButtonsOpen] = useState(
    pathname.startsWith('/components/button') || 
    pathname.startsWith('/components/compound-button') || 
    pathname.startsWith('/components/menu-button') || 
    pathname.startsWith('/components/split-button') || 
    pathname.startsWith('/components/toggle-button')
  );
  const [isBadgesOpen, setIsBadgesOpen] = useState(
    pathname.startsWith('/components/badge') || 
    pathname.startsWith('/components/counter-badge') || 
    pathname.startsWith('/components/presence-badge')
  );
  const [isCardsOpen, setIsCardsOpen] = useState(
    pathname.startsWith('/components/card')
  );
  const [isCarouselsOpen, setIsCarouselsOpen] = useState(
    pathname.startsWith('/components/carousel')
  );

  return (
    <nav 
      className="w-[280px] p-6 h-screen sticky top-0 overflow-y-auto"
      style={{ 
        backgroundColor: tokens.colorNeutralBackground2,
        borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
      }}
    >
      <div 
        className="text-xs font-semibold mb-6 uppercase tracking-wider"
        style={{ color: tokens.colorNeutralForeground3 }}
      >
        Fluent UI Design System
      </div>
      
      <ul className="flex flex-col gap-1 list-none p-0 m-0">
        {routes.map((route) => {
          const isActive = pathname === route.path;
          return (
            <li key={route.path}>
              <Link
                href={route.path}
                className="block px-3 py-2.5 rounded-md text-sm transition-all no-underline"
                style={{
                  color: isActive ? tokens.colorNeutralForegroundOnBrand : tokens.colorNeutralForeground1,
                  backgroundColor: isActive ? tokens.colorBrandBackground : 'transparent',
                  fontWeight: isActive ? tokens.fontWeightSemibold : tokens.fontWeightRegular,
                }}
              >
                {route.label}
              </Link>
            </li>
          );
        })}

        <li className="mb-2">
          <div 
            className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md transition-all"
            onClick={() => setIsDesignOpen(!isDesignOpen)}
          >
            <span 
              className="text-sm font-semibold"
              style={{ color: tokens.colorNeutralForeground1 }}
            >
              Design
            </span>
            <Button
              appearance="transparent"
              icon={isDesignOpen ? <ChevronDownRegular /> : <ChevronRightRegular />}
              size="small"
              style={{ minWidth: 0, padding: '4px', color: tokens.colorNeutralForeground3 }}
            />
          </div>
          {isDesignOpen && (
            <div className="pl-4 mt-1 flex flex-col gap-0.5">
              {designRoutes.map((route) => {
                const isActive = pathname === route.path;
                return (
                  <Link
                    key={route.path}
                    href={route.path}
                    className="px-3 py-2.5 rounded-md text-sm transition-all no-underline"
                    style={{
                      color: isActive ? tokens.colorNeutralForegroundOnBrand : tokens.colorNeutralForeground1,
                      backgroundColor: isActive ? tokens.colorBrandBackground : 'transparent',
                      fontWeight: isActive ? tokens.fontWeightSemibold : tokens.fontWeightRegular,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{route.label}</span>
                      {route.badge && (
                        <Badge size="small" appearance="outline">
                          {route.badge}
                        </Badge>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </li>

        <li className="mb-2">
          <div 
            className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md transition-all"
            onClick={() => setIsComponentsOpen(!isComponentsOpen)}
          >
            <span 
              className="text-sm font-semibold"
              style={{ color: tokens.colorNeutralForeground1 }}
            >
              Komponensek
            </span>
            <Button
              appearance="transparent"
              icon={isComponentsOpen ? <ChevronDownRegular /> : <ChevronRightRegular />}
              size="small"
              style={{ minWidth: 0, padding: '4px', color: tokens.colorNeutralForeground3 }}
            />
          </div>
          {isComponentsOpen && (
            <div className="pl-4 mt-1 flex flex-col gap-0.5">
              {componentRoutes.map((route) => {
                const isActive = pathname === route.path;
                return (
                  <Link
                    key={route.path}
                    href={route.path}
                    className="block px-3 py-2.5 rounded-md text-sm transition-all no-underline"
                    style={{
                      color: isActive ? tokens.colorNeutralForegroundOnBrand : tokens.colorNeutralForeground1,
                      backgroundColor: isActive ? tokens.colorBrandBackground : 'transparent',
                      fontWeight: isActive ? tokens.fontWeightSemibold : tokens.fontWeightRegular,
                    }}
                  >
                    {route.label}
                  </Link>
                );
              })}
              
              <div className="mt-1">
                <div 
                  className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md transition-all"
                  onClick={() => setIsBadgesOpen(!isBadgesOpen)}
                >
                  <span 
                    className="text-sm font-semibold"
                    style={{ color: tokens.colorNeutralForeground1 }}
                  >
                    Badges - Jelvények
                  </span>
                  <Button
                    appearance="transparent"
                    icon={isBadgesOpen ? <ChevronDownRegular /> : <ChevronRightRegular />}
                    size="small"
                    style={{ minWidth: 0, padding: '4px', color: tokens.colorNeutralForeground3 }}
                  />
                </div>
                {isBadgesOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-0.5">
                    {badgeRoutes.map((route) => {
                      const isActive = pathname === route.path;
                      return (
                        <Link
                          key={route.path}
                          href={route.path}
                          className="block px-3 py-2.5 rounded-md text-sm transition-all no-underline"
                          style={{
                            color: isActive ? tokens.colorNeutralForegroundOnBrand : tokens.colorNeutralForeground1,
                            backgroundColor: isActive ? tokens.colorBrandBackground : 'transparent',
                            fontWeight: isActive ? tokens.fontWeightSemibold : tokens.fontWeightRegular,
                          }}
                        >
                          {route.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="mt-1">
                <div 
                  className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md transition-all"
                  onClick={() => setIsCardsOpen(!isCardsOpen)}
                >
                  <span 
                    className="text-sm font-semibold"
                    style={{ color: tokens.colorNeutralForeground1 }}
                  >
                    Cards - Kártyák
                  </span>
                  <Button
                    appearance="transparent"
                    icon={isCardsOpen ? <ChevronDownRegular /> : <ChevronRightRegular />}
                    size="small"
                    style={{ minWidth: 0, padding: '4px', color: tokens.colorNeutralForeground3 }}
                  />
                </div>
                {isCardsOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-0.5">
                    {cardRoutes.map((route) => {
                      const isActive = pathname === route.path;
                      return (
                        <Link
                          key={route.path}
                          href={route.path}
                          className="block px-3 py-2.5 rounded-md text-sm transition-all no-underline"
                          style={{
                            color: isActive ? tokens.colorNeutralForegroundOnBrand : tokens.colorNeutralForeground1,
                            backgroundColor: isActive ? tokens.colorBrandBackground : 'transparent',
                            fontWeight: isActive ? tokens.fontWeightSemibold : tokens.fontWeightRegular,
                          }}
                        >
                          {route.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="mt-1">
                <div 
                  className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md transition-all"
                  onClick={() => setIsCarouselsOpen(!isCarouselsOpen)}
                >
                  <span 
                    className="text-sm font-semibold"
                    style={{ color: tokens.colorNeutralForeground1 }}
                  >
                    Carousels - Körhintók
                  </span>
                  <Button
                    appearance="transparent"
                    icon={isCarouselsOpen ? <ChevronDownRegular /> : <ChevronRightRegular />}
                    size="small"
                    style={{ minWidth: 0, padding: '4px', color: tokens.colorNeutralForeground3 }}
                  />
                </div>
                {isCarouselsOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-0.5">
                    {carouselRoutes.map((route) => {
                      const isActive = pathname === route.path;
                      return (
                        <Link
                          key={route.path}
                          href={route.path}
                          className="block px-3 py-2.5 rounded-md text-sm transition-all no-underline"
                          style={{
                            color: isActive ? tokens.colorNeutralForegroundOnBrand : tokens.colorNeutralForeground1,
                            backgroundColor: isActive ? tokens.colorBrandBackground : 'transparent',
                            fontWeight: isActive ? tokens.fontWeightSemibold : tokens.fontWeightRegular,
                          }}
                        >
                          {route.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="mt-1">
                <div 
                  className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md transition-all"
                  onClick={() => setIsButtonsOpen(!isButtonsOpen)}
                >
                  <span 
                    className="text-sm font-semibold"
                    style={{ color: tokens.colorNeutralForeground1 }}
                  >
                    Buttons - Gombok
                  </span>
                  <Button
                    appearance="transparent"
                    icon={isButtonsOpen ? <ChevronDownRegular /> : <ChevronRightRegular />}
                    size="small"
                    style={{ minWidth: 0, padding: '4px', color: tokens.colorNeutralForeground3 }}
                  />
                </div>
                {isButtonsOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-0.5">
                    {buttonRoutes.map((route) => {
                      const isActive = pathname === route.path;
                      return (
                        <Link
                          key={route.path}
                          href={route.path}
                          className="block px-3 py-2.5 rounded-md text-sm transition-all no-underline"
                          style={{
                            color: isActive ? tokens.colorNeutralForegroundOnBrand : tokens.colorNeutralForeground1,
                            backgroundColor: isActive ? tokens.colorBrandBackground : 'transparent',
                            fontWeight: isActive ? tokens.fontWeightSemibold : tokens.fontWeightRegular,
                          }}
                        >
                          {route.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
