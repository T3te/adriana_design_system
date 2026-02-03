'use client';

import {
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  Badge,
  Caption1,
  Body1Strong,
  tokens,
} from '@fluentui/react-components';
import {
  Alert20Regular,
  Info20Regular,
  Warning20Filled,
  AlertOn20Filled,
  CheckmarkCircle20Regular,
} from '@fluentui/react-icons';
import Link from 'next/link';
import { type Notification, mockNotifications as MOCK_NOTIFICATIONS } from '@/lib/mockNotifications';
import { getTypeIcon, formatTimestamp } from '@/components/ui/NotificationHelpers';

interface NotificationsMenuProps {
  notifications?: Notification[];
  unreadCount?: number;
}

export default function NotificationsMenu({
  notifications = MOCK_NOTIFICATIONS,
  unreadCount = 4,
}: NotificationsMenuProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <Warning20Filled className="text-yellow-600" />;
      case 'error':
        return <AlertOn20Filled className="text-red-600" />;
      case 'success':
        return <CheckmarkCircle20Regular className="text-green-600" />;
      default:
        return <Info20Regular className="text-blue-600" />;
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return `${diffMins} perce`;
    } else if (diffHours < 24) {
      return `${diffHours} órája`;
    } else if (diffDays < 7) {
      return `${diffDays} napja`;
    } else {
      return date.toLocaleDateString('hu-HU', {
        month: 'short',
        day: 'numeric',
      });
    }
  };

  const latestNotifications = notifications.slice(0, 5);

  return (
    <Menu>
      <MenuTrigger>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button appearance="outline" icon={<Alert20Regular />}>
            Értesítések
          </Button>
          {unreadCount > 0 && (
            <Badge
              appearance="filled"
              color="danger"
              size="small"
              style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
              }}
            >
              {unreadCount}
            </Badge>
          )}
        </div>
      </MenuTrigger>

      <MenuPopover className="!p-2">
        {/* Header */}
        <div className="flex items-center justify-between w-full p-2 mb-3">
          <Body1Strong>Értesítések</Body1Strong>
          {unreadCount > 0 && (
            <Badge appearance="filled" color="important" size="small">
              {unreadCount} új
            </Badge>
          )}
        </div>

        <MenuList>
          {latestNotifications.map((notification) => (
            <Link 
              key={notification.id} 
              href={`/notifications/${notification.id}`}
              style={{ textDecoration: 'none', width: '100%' }}
            >
              <MenuItem>
                <div className="flex gap-3 w-full">
                  <div className="flex-shrink-0 mt-1">
                    {getTypeIcon(notification.type)}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-grow">
                        <Body1Strong className="truncate">
                          {notification.title}
                        </Body1Strong>
                        <div className="flex items-center gap-2 mt-1">
                        <Caption1 className="text-xs" style={{ color: tokens.colorNeutralForeground2 }}>
                          {notification.source}
                        </Caption1>
                        <Caption1 className="text-xs" style={{ color: tokens.colorNeutralForeground3 }}>•</Caption1>
                        <Caption1 className="text-xs" style={{ color: tokens.colorNeutralForeground2 }}>
                          {formatTimestamp(notification.timestamp)}
                        </Caption1>
                      </div>
                    </div>
                    {!notification.isRead && (
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: tokens.colorBrandBackground,
                          flexShrink: 0,
                          marginTop: '4px',
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </MenuItem>
          </Link>
          ))}
        </MenuList>

        <MenuDivider />

        <MenuList>
          <Link href="/notifications" style={{ textDecoration: 'none', width: '100%' }}>
            <MenuItem>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <Body1Strong style={{ color: tokens.colorBrandForeground1 }}>
                  Összes megtekintése
                </Body1Strong>
              </div>
            </MenuItem>
          </Link>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}
