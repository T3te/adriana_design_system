'use client';

import { Button, Divider, tokens } from '@fluentui/react-components';
import Link from 'next/link';
import Image from 'next/image';
import UserMenu from './UserMenu';
import NotificationsMenu from './NotificationsMenu';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface NavbarConnectProps {
  userName?: string;
  userEmail?: string;
  logoutLabel?: string;
  unreadNotifications?: number;
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
}

export default function NavbarConnect({
  userName = 'Teszt Elek',
  userEmail = 'teszt.elek@adriana.hu',
  logoutLabel,
  unreadNotifications = 4,
  isDarkMode = false,
  onThemeToggle,
}: NavbarConnectProps) {
  return (
    <header 
      className="flex items-center justify-between py-5 px-6"
      style={{
        backgroundColor: tokens.colorNeutralBackground1,
        boxShadow: tokens.shadow4,
      }}
    >
      {/* Logo Section */}
      <Link href="/blank" className="flex items-center space-x-4">
        <div className="flex items-center">
          {/* Adriana Accounting Logo */}
          <Image
            src={isDarkMode ? "/img/adriana-logo-dk.png" : "/img/adriana-logo.png"}
            alt="Adriana Accounting logo"
            width={90}
            height={24}
            className="me-[6px]"
          />
          
          <Divider 
            vertical 
            style={{ height: '24px' }}
          />
          
          {/* Adriana Connect Logo */}
          <Image
            src={isDarkMode ? "/img/connect-logo-dk.png" : "/img/connect-logo.png"}
            alt="Adriana Connect logo"
            width={130}
            height={24}
            className="!ml-[6px]"
          />
        </div>
      </Link>

      {/* Center Text - Hidden on mobile */}
      <Link href="/profile" className="font-semibold lg:font-normal lg:text-xl md:flex hidden no-underline hover:opacity-80 transition-opacity" style={{ color: tokens.colorNeutralForeground2 }}>
        <span>Nincs cég kiválasztva</span>
      </Link>

      {/* Right Side Actions */}
      <div className="flex items-center justify-between gap-2">
        {/* Notifications Menu */}
        <NotificationsMenu unreadCount={unreadNotifications} />

        {/* Charge Amount Button - Hidden on mobile */}
        <div className="md:flex hidden items-center">
          <Button appearance="outline">
            A terhelés összege: 0 Ft
          </Button>
        </div>

        {/* Dark Mode Toggle */}
        <ThemeToggle isDarkMode={isDarkMode} onToggle={onThemeToggle} />

        {/* User Menu */}
        <UserMenu
          userName={userName}
          userEmail={userEmail}
          logoutLabel={logoutLabel}
        />
      </div>
    </header>
  );
}
