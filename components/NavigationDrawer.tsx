'use client';

import { Drawer, DrawerHeader, DrawerBody, Button } from '@fluentui/react-components';
import { Dismiss24Regular } from '@fluentui/react-icons';
import Navigation from './Navigation';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  return (
    <Drawer
      type="overlay"
      separator
      open={isOpen}
      onOpenChange={(_, { open }) => !open && onClose()}
      position="start"
      size="small"
    >
      <DrawerHeader>
        <div className="flex items-center justify-between w-full">
          <span className="font-semibold text-sm uppercase tracking-wider">Design System</span>
          <Button
            appearance="subtle"
            icon={<Dismiss24Regular />}
            onClick={onClose}
            aria-label="Close navigation"
          />
        </div>
      </DrawerHeader>
      <DrawerBody className="p-0">
        <Navigation inDrawer onLinkClick={onClose} />
      </DrawerBody>
    </Drawer>
  );
}
