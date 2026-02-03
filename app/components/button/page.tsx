'use client';

import { 
  Title1,
  Title2,
  Caption1,
  Button,
  tokens,
} from '@fluentui/react-components';
import {
  CalendarMonthRegular,
} from '@fluentui/react-icons';
import { useState } from 'react';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

export default function ButtonPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Button - Gomb</Title1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>// Import</CodeComment>
          {`import { Button } from '@fluentui/react-components';

`}
          <CodeComment>// Használat</CodeComment>
          {`<Button appearance="primary">Mentés</Button>
<Button appearance="secondary">Mégse</Button>
<Button icon={<CalendarMonthRegular />}>Naptár</Button>`}
        </CodeBlock>
      </div>

      {/* Default */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <Button>Példa Gomb</Button>
      </div>

      {/* Shape */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Forma (Shape)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Button shape="rounded">Lekerekített</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Rounded</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button shape="circular">Kör</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Circular</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button shape="square">Négyzet</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Square</Caption1>
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Megjelenés (Appearance)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Button appearance="secondary">Alapértelmezett</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Default</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button appearance="primary">Elsődleges</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Primary</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button appearance="outline">Körvonalas</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Outline</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button appearance="subtle">Finom</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Subtle</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button appearance="transparent">Átlátszó</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Transparent</Caption1>
          </div>
        </div>
      </div>

      {/* Icon */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Ikon</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <Button icon={<CalendarMonthRegular />} iconPosition="before">
            Naptár ikon elől
          </Button>
          <Button icon={<CalendarMonthRegular />} iconPosition="after">
            Naptár ikon hátul
          </Button>
        </div>
      </div>

      {/* Size */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méret (Size)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Button size="small">Kicsi</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Small</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="small" icon={<CalendarMonthRegular />}>
              Kicsi ikonnal
            </Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Small with icon</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="medium">Közepes</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Medium</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="medium" icon={<CalendarMonthRegular />}>
              Közepes ikonnal
            </Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Medium with icon</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="large">Nagy</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Large</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="large" icon={<CalendarMonthRegular />}>
              Nagy ikonnal
            </Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Large with icon</Caption1>
          </div>
        </div>
      </div>

      {/* Disabled */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Letiltott (Disabled)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Button>Engedélyezett</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Enabled</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button disabled>Letiltott</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Disabled</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button disabledFocusable>Letiltott fókuszálható</Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Disabled focusable</Caption1>
          </div>
        </div>
      </div>

      {/* Loading */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Töltés (Loading)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <Button 
            appearance="primary"
            onClick={handleLoadingClick}
            disabled={isLoading}
          >
            {isLoading ? 'Töltés...' : 'Töltés indítása'}
          </Button>
          <Button 
            appearance="secondary"
            onClick={() => setIsLoading(false)}
            disabled={!isLoading}
          >
            Töltés visszaállítása
          </Button>
        </div>
      </div>

      {/* Long Text */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Hosszú szöveggel</Title2>
        </div>
        <div style={{ maxWidth: '300px' }}>
          <Button>
            Ez egy nagyon hosszú gomb szöveg, amely több sorban fog tördelődni, ha eléri a komponens maximális szélességét
          </Button>
        </div>
      </div>
    </div>
  );
}
