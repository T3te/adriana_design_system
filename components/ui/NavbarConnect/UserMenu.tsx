'use client';

import { 
  Menu, 
  MenuTrigger, 
  MenuPopover, 
  MenuList, 
  MenuItem,
  MenuDivider,
  Button, 
  Avatar 
} from '@fluentui/react-components';
import { PersonRegular, ChevronDownRegular } from '@fluentui/react-icons';

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
        <div className="flex w-full p-2 mb-3">
          <Avatar 
            icon={<PersonRegular />}
          />
          <div className="flex flex-col ml-2">
            <div className="text-sm mb-1">{userName}</div>
            <div className="text-xs text-gray-500">{userEmail}</div>
          </div>
        </div>

        <MenuList>
          {menuItems.map((item, index) => (
            <MenuItem key={index}>{item}</MenuItem>
          ))}
        </MenuList>

        <MenuDivider />

        <MenuList>
          <MenuItem>{logoutLabel}</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}
