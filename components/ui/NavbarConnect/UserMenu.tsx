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
  tokens,
} from '@fluentui/react-components';
import { PersonRegular, ChevronDownRegular } from '@fluentui/react-icons';
import Link from 'next/link';

interface UserMenuProps {
  userName?: string;
  userEmail?: string;
  menuItems?: string[];
  logoutLabel?: string;
}

const DEFAULT_MENU_ITEMS = [
  'Profil beállítások',
  'Bankkártya beállítások',
  'Előfizetéseim',
  'Banki hozzájárulások',
  'Hozzáférési kulcsok'
];

export default function UserMenu({ 
  userName = 'Teszt Elek', 
  userEmail = 'teszt.elek@automatik.hu',
  menuItems = DEFAULT_MENU_ITEMS,
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
          <div className="ml-1">
            <ChevronDownRegular className="text-blue-700" />
          </div>
        </Button>
      </MenuTrigger>
      
      <MenuPopover className="!p-2">
        {/* User Info Header */}
        <Link href="/profile" className="no-underline">
          <div className="flex w-full p-2 mb-3 rounded hover:bg-opacity-80 transition-colors cursor-pointer" style={{ backgroundColor: 'transparent' }}>
            <Avatar 
              icon={<PersonRegular />}
            />
            <div className="flex flex-col ml-2">
              <div className="text-sm mb-1" style={{ color: tokens.colorNeutralForeground1 }}>{userName}</div>
              <div className="text-xs" style={{ color: tokens.colorNeutralForeground3 }}>{userEmail}</div>
            </div>
          </div>
        </Link>

        <MenuList>
          <Link href="/profile" className="no-underline">
            <MenuItem>Profil beállítások</MenuItem>
          </Link>
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
