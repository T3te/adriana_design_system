'use client';

import { 
  Title1,
  Title2,
  Caption1,
  CompoundButton,
  tokens,
} from '@fluentui/react-components';
import {
  CalendarMonthRegular,
} from '@fluentui/react-icons';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

export default function CompoundButtonPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>CompoundButton - Összetett Gomb</Title1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>// Import</CodeComment>
          {`import { CompoundButton } from '@fluentui/react-components';

`}
          <CodeComment>// Használat</CodeComment>
          {`<CompoundButton secondaryContent="Másodlagos tartalom">
  Példa
</CompoundButton>`}
        </CodeBlock>
      </div>

      {/* Default */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <CompoundButton secondaryContent="Másodlagos tartalom">
          Példa
        </CompoundButton>
      </div>

      {/* Shape */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Forma (Shape)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <CompoundButton shape="rounded" secondaryContent="Másodlagos tartalom">
              Lekerekített
            </CompoundButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Rounded</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CompoundButton shape="circular" secondaryContent="Másodlagos tartalom">
              Kör
            </CompoundButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Circular</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CompoundButton shape="square" secondaryContent="Másodlagos tartalom">
              Négyzet
            </CompoundButton>
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
            <CompoundButton appearance="secondary" secondaryContent="Másodlagos tartalom">
              Alapértelmezett
            </CompoundButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Default</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CompoundButton appearance="primary" secondaryContent="Másodlagos tartalom">
              Elsődleges
            </CompoundButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Primary</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CompoundButton appearance="outline" secondaryContent="Másodlagos tartalom">
              Körvonalas
            </CompoundButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Outline</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CompoundButton appearance="subtle" secondaryContent="Másodlagos tartalom">
              Finom
            </CompoundButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Subtle</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CompoundButton appearance="transparent" secondaryContent="Másodlagos tartalom">
              Átlátszó
            </CompoundButton>
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
          <CompoundButton 
            icon={<CalendarMonthRegular />} 
            iconPosition="before"
            secondaryContent="Másodlagos tartalom"
          >
            Naptár ikon elől
          </CompoundButton>
          <CompoundButton 
            icon={<CalendarMonthRegular />} 
            iconPosition="after"
            secondaryContent="Másodlagos tartalom"
          >
            Naptár ikon hátul
          </CompoundButton>
        </div>
      </div>

      {/* Size */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méret (Size)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <CompoundButton size="small" secondaryContent="Másodlagos tartalom">
              Kicsi
            </CompoundButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Small</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CompoundButton size="medium" secondaryContent="Másodlagos tartalom">
              Közepes
            </CompoundButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Medium</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CompoundButton size="large" secondaryContent="Másodlagos tartalom">
              Nagy
            </CompoundButton>
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
            <CompoundButton secondaryContent="Másodlagos tartalom">
              Engedélyezett
            </CompoundButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Enabled</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CompoundButton disabled secondaryContent="Másodlagos tartalom">
              Letiltott
            </CompoundButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Disabled</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CompoundButton disabledFocusable secondaryContent="Másodlagos tartalom">
              Letiltott fókuszálható
            </CompoundButton>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Disabled focusable</Caption1>
          </div>
        </div>
      </div>

      {/* Long Text */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Hosszú szöveggel</Title2>
        </div>
        <div style={{ maxWidth: '300px' }} className="flex flex-col gap-4">
          <CompoundButton secondaryContent="Másodlagos tartalom">
            Rövid szöveg
          </CompoundButton>
          <CompoundButton secondaryContent="Másodlagos tartalom">
            Hosszú szöveg, amely több sorban fog tördelődni, ha eléri a komponens maximális szélességét
          </CompoundButton>
          <CompoundButton secondaryContent="Ez egy hosszú másodlagos tartalom, amely több sorban fog tördelődni a komponens szélességének megfelelően">
            Hosszú másodlagos tartalom
          </CompoundButton>
        </div>
      </div>
    </div>
  );
}
