'use client';

import { Button, Divider } from '@fluentui/react-components';
import Link from 'next/link';
import Image from 'next/image';
import UserMenu from './UserMenu';

export default function NavbarConnect() {
  return (
    <header className="flex items-center justify-between py-5 px-6 bg-white shadow-md">
      {/* Logo Section */}
      <Link href="/" className="flex items-center space-x-4">
        <div className="flex items-center">
          {/* Adriana Accounting Logo */}
          <Image
            src="/img/adriana-logo.png"
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
            src="/img/connect-logo.png"
            alt="Adriana Connect logo"
            width={130}
            height={24}
            className="!ml-[6px]"
          />
        </div>
      </Link>

      {/* Center Text - Hidden on mobile */}
      <div className="text-gray-600 font-semibold lg:font-normal lg:text-xl md:flex hidden">
        <span>Nincs cég kiválasztva</span>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center justify-between gap-2">
        {/* Charge Amount Button - Hidden on mobile */}
        <div className="md:flex hidden items-center">
          <Button appearance="outline">
            A terhelés összege: 0 Ft
          </Button>
        </div>

        {/* User Menu */}
        <UserMenu />
      </div>
    </header>
  );
}
