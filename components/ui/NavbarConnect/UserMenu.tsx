'use client';

import { 
  Menu, 
  MenuTrigger, 
  MenuPopover, 
  MenuList, 
  MenuItem,
  MenuDivider,
  Button, 
  Avatar,
} from '@fluentui/react-components';
import { PersonRegular, ChevronDownRegular } from '@fluentui/react-icons';
import Link from 'next/link';

interface UserMenuProps {
  userName?: string;
  userEmail?: string;
  logoutLabel?: string;
}

export default function UserMenu({ 
  userName = 'Teszt Elek', 
  userEmail = 'teszt.elek@automatik.hu',
  logoutLabel = 'Kijelentkezés'
}: UserMenuProps) {
  return (
    <Menu>
      <MenuTrigger>
        <Button
          appearance="subtle"
          icon={
            <Avatar 
              icon={<PersonRegular />}
              aria-label="User profile"
              size={24}
            />
          }
          iconPosition="before"
        >
          <ChevronDownRegular className="text-blue-700 ml-1" />
        </Button>
      </MenuTrigger>
      
      <MenuPopover className="!p-2">
        {/* User Info Header */}
        <Link href="/profile" className="no-underline">
          <div className="flex w-full p-2 mb-3 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer">
            <Avatar 
              icon={<PersonRegular />}
            />
            <div className="flex flex-col ml-2">
              <div className="text-sm font-medium mb-1">{userName}</div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">{userEmail}</div>
            </div>
          </div>
        </Link>

        <MenuList>
          <MenuItem>Bankkártya beállítások</MenuItem>
          <MenuItem>Előfizetéseim</MenuItem>
          <Link href="/integrations" className="no-underline">
            <MenuItem>Integrációk</MenuItem>
          </Link>
          <Link href="/bank-consents" className="no-underline">
            <MenuItem>Banki hozzájárulások</MenuItem>
          </Link>
          <MenuItem>Hozzáférési kulcsok</MenuItem>
        </MenuList>

        <MenuDivider />

        <MenuList>
          <MenuItem>{logoutLabel}</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}
