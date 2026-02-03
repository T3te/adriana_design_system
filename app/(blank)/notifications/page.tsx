'use client';

import React, { useState } from 'react';
import {
  Card,
  Body1Strong,
  Body1,
  Caption1,
  Title3,
  Badge,
  Button,
  Divider,
  tokens,
} from '@fluentui/react-components';
import Link from 'next/link';
import {
  Alert20Regular
} from '@fluentui/react-icons';
import { type Notification, mockNotifications } from '@/lib/mockNotifications';
import { getTypeIcon, getTypeBadgeColor, getTypeBadgeLabel, formatTimestamp } from '@/components/ui/NotificationHelpers';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const handleDismiss = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const filteredNotifications =
    filter === 'unread'
      ? notifications.filter((n) => !n.isRead)
      : notifications;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Title3 style={{ marginBottom: '4px' }}>Értesítések</Title3>
          <Caption1 style={{ color: tokens.colorNeutralForeground2, display: 'block' }}>
            Integrátor partnerek értesítései és frissítései
          </Caption1>
        </div>
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <Badge appearance="filled" color="important" size="large">
              {unreadCount} olvasatlan
            </Badge>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        <Button
          appearance={filter === 'all' ? 'primary' : 'secondary'}
          onClick={() => setFilter('all')}
        >
          Összes ({notifications.length})
        </Button>
        <Button
          appearance={filter === 'unread' ? 'primary' : 'secondary'}
          onClick={() => setFilter('unread')}
        >
          Olvasatlan ({unreadCount})
        </Button>
        {unreadCount > 0 && (
          <>
            <Divider vertical />
            <Button appearance="subtle" onClick={handleMarkAllAsRead}>
              Összes megjelölése olvasottként
            </Button>
          </>
        )}
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <Card className="p-8">
            <div className="text-center" style={{ color: tokens.colorNeutralForeground3 }}>
              <Alert20Regular className="text-4xl mb-2" />
              <Body1>Nincs megjeleníthető értesítés</Body1>
            </div>
          </Card>
        ) : (
          filteredNotifications.map((notification) => (
            <Link 
              key={notification.id}
              href={`/notifications/${notification.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Card
                id={`notification-${notification.id}`}
                className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
                style={{
                  borderLeft: !notification.isRead ? `4px solid ${tokens.colorBrandBackground}` : undefined,
                  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                }}
              >
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getTypeIcon(notification.type)}
                </div>
                <div className="flex-grow space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-grow">
                      <div className="flex items-center gap-2">
                        <Body1Strong>{notification.title}</Body1Strong>
                        {!notification.isRead && (
                          <Badge
                            appearance="filled"
                            color="important"
                            size="small"
                          >
                            Új
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>
                          {notification.source}
                        </Caption1>
                        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>•</Caption1>
                        <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>
                          {formatTimestamp(notification.timestamp)}
                        </Caption1>
                        <Badge
                          appearance="outline"
                          color={getTypeBadgeColor(notification.type) as any}
                          size="small"
                        >
                          {getTypeBadgeLabel(notification.type)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Body1>{notification.message}</Body1>
                  {!notification.isRead && (
                    <div className="pt-2">
                      <Button
                        appearance="subtle"
                        size="small"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleMarkAsRead(notification.id);
                        }}
                      >
                        Megjelölés olvasottként
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </Link>
          ))
        )}
      </div>
    </div>
  );
}
