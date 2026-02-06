import {
  Info20Regular,
  Warning20Filled,
  AlertOn20Filled,
  CheckmarkCircle20Regular,
} from '@fluentui/react-icons';

export const getTypeIcon = (type: string) => {
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

export const getTypeBadgeColor = (type: string): 'warning' | 'danger' | 'success' | 'informative' => {
  switch (type) {
    case 'warning':
      return 'warning';
    case 'error':
      return 'danger';
    case 'success':
      return 'success';
    default:
      return 'informative';
  }
};

export const getTypeBadgeLabel = (type: string): string => {
  switch (type) {
    case 'warning':
      return 'Figyelmeztetés';
    case 'error':
      return 'Kritikus';
    case 'success':
      return 'Siker';
    default:
      return 'Információ';
  }
};

export const formatTimestamp = (date: Date, detailed: boolean = false) => {
  if (detailed) {
    return date.toLocaleDateString('hu-HU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

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
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
};
