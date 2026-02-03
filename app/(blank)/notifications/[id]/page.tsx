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
  tokens,
} from '@fluentui/react-components';
import {
  ArrowLeft24Regular,
  Info20Regular,
  Warning20Filled,
  AlertOn20Filled,
  CheckmarkCircle20Regular,
  Checkmark24Regular,
} from '@fluentui/react-icons';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { type Notification, mockNotifications } from '@/lib/mockNotifications';
import { getTypeIcon, getTypeBadgeColor, getTypeBadgeLabel, formatTimestamp } from '@/components/ui/NotificationHelpers';

export default function NotificationDetailPage() {
  const params = useParams();
  const notificationId = params.id as string;
  
  const notification = mockNotifications.find(n => n.id === notificationId);
  const [isRead, setIsRead] = useState(notification?.isRead || false);

  if (!notification) {
    return (
      <div className="container mx-auto p-6">
        <Card className="p-8">
          <div className="text-center">
            <Title3>Értesítés nem található</Title3>
            <div className="mt-4">
              <Link href="/notifications">
                <Button appearance="primary" icon={<ArrowLeft24Regular />}>
                  Vissza az értesítésekhez
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  const handleMarkAsRead = () => {
    setIsRead(true);
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Back Button */}
      <div>
        <Link href="/notifications">
          <Button appearance="subtle" icon={<ArrowLeft24Regular />}>
            Vissza az értesítésekhez
          </Button>
        </Link>
      </div>

      {/* Notification Detail Card */}
      <Card className="p-8">
        <div className="space-y-6">
          {/* Header with Icon and Badge */}
          <div className="flex items-start gap-4">
            <div className="text-4xl mt-1">
              {getTypeIcon(notification.type)}
            </div>
            <div className="flex-grow">
              <div className="flex items-start justify-between gap-4 mb-2">
                <Title3>{notification.title}</Title3>
                <div className="flex gap-2">
                  <Badge appearance="outline" color={getTypeBadgeColor(notification.type)}>
                    {getTypeBadgeLabel(notification.type)}
                  </Badge>
                  {!isRead && (
                    <Badge appearance="filled" color="important">
                      Új
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Meta Information */}
              <div className="flex items-center gap-3 mb-4">
                <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>
                  <strong>Forrás:</strong> {notification.source}
                </Caption1>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>•</Caption1>
                <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>
                  {formatTimestamp(notification.timestamp, true)}
                </Caption1>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div 
            className="p-6 rounded-lg" 
            style={{ 
              backgroundColor: tokens.colorNeutralBackground3,
              borderLeft: `4px solid ${
                notification.type === 'warning' 
                  ? tokens.colorPaletteYellowBackground3
                  : notification.type === 'error'
                  ? tokens.colorPaletteRedBackground3
                  : notification.type === 'success'
                  ? tokens.colorPaletteGreenBackground3
                  : tokens.colorBrandBackground
              }`
            }}
          >
            <Body1>{notification.message}</Body1>
          </div>

          {/* Actions */}
          {!isRead && (
            <div className="flex justify-end">
              <Button 
                appearance="primary" 
                icon={<Checkmark24Regular />}
                onClick={handleMarkAsRead}
              >
                Megjelölés olvasottként
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
