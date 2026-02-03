'use client';

import { 
  Title1,
  Title2,
  Caption1,
  ToggleButton,
  tokens,
} from '@fluentui/react-components';
import {
  CalendarMonthRegular,
} from '@fluentui/react-icons';
import { useState } from 'react';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

export default function ToggleButtonPage() {
  const [checkedState, setCheckedState] = useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>ToggleButton - Kapcsoló Gomb</Title1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>// Import</CodeComment>
          {`import { ToggleButton } from '@fluentui/react-components';

`}
          <CodeComment>// Használat</CodeComment>
          {`<ToggleButton>Példa</ToggleButton>`}
        </CodeBlock>
      </div>

      {/* Default */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <ToggleButton>Példa Gomb</ToggleButton>
      </div>

      {/* Shape */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Forma (Shape)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <ToggleButton shape="rounded">Lekerekített</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Rounded</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ToggleButton shape="circular">Kör</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Circular</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ToggleButton shape="square">Négyzet</ToggleButton>
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
            <ToggleButton appearance="secondary">Alapértelmezett</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Default</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ToggleButton appearance="primary">Elsődleges</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Primary</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ToggleButton appearance="outline">Körvonalas</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Outline</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ToggleButton appearance="subtle">Finom</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Subtle</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ToggleButton appearance="transparent">Átlátszó</ToggleButton>
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
          <ToggleButton icon={<CalendarMonthRegular />} iconPosition="before">
            Naptár ikon elől
          </ToggleButton>
          <ToggleButton icon={<CalendarMonthRegular />} iconPosition="after">
            Naptár ikon hátul
          </ToggleButton>
        </div>
      </div>

      {/* Size */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méret (Size)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <ToggleButton size="small">Kicsi</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Small</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ToggleButton size="medium">Közepes</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Medium</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ToggleButton size="large">Nagy</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Large</Caption1>
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
            <ToggleButton>Engedélyezett</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Enabled</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ToggleButton disabled>Letiltott</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Disabled</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ToggleButton disabledFocusable>Letiltott fókuszálható</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Disabled focusable</Caption1>
          </div>
        </div>
        <div className="mt-6">
          <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>
            A bejelölt állapotok:
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap mt-4">
          <div className="flex flex-col items-center gap-2">
            <ToggleButton checked>Engedélyezett</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Enabled</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ToggleButton checked disabled>Letiltott</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Disabled</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ToggleButton checked disabledFocusable>Letiltott fókuszálható</ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Disabled focusable</Caption1>
          </div>
        </div>
      </div>

      {/* Checked */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Bejelölt állapot (Checked)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <ToggleButton 
              checked={checkedState}
              onClick={() => setCheckedState(!checkedState)}
            >
              Vezérelt bejelölt állapot
            </ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
              {checkedState ? 'Bejelölve' : 'Nincs bejelölve'}
            </Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ToggleButton checked={false}>
              Vezérelt nincs bejelölve
            </ToggleButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Controlled unchecked</Caption1>
          </div>
        </div>
      </div>

      {/* Long Text */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Hosszú szöveggel</Title2>
        </div>
        <div style={{ maxWidth: '300px' }} className="flex flex-col gap-4">
          <ToggleButton>Rövid szöveg</ToggleButton>
          <ToggleButton>
            Hosszú szöveg, amely több sorban fog tördelődni, ha eléri a komponens maximális szélességét
          </ToggleButton>
        </div>
      </div>
    </div>
  );
}
