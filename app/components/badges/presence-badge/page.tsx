'use client';

import { 
  Title1,
  Title2,
  Caption1,
  PresenceBadge,
  tokens,
} from '@fluentui/react-components';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

export default function PresenceBadgePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>PresenceBadge - Jelenlét jelvény</Title1>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          A jelenlét jelvény egy állapotjelzőt megjelenítő jelvény, mint például elérhető, távol vagy elfoglalt.
        </Caption1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>// Import</CodeComment>
          {`import { PresenceBadge } from '@fluentui/react-components';

`}
          <CodeComment>// Használat</CodeComment>
          {`<PresenceBadge status="available" />
<PresenceBadge status="busy" />
<PresenceBadge status="away" outOfOffice />`}
        </CodeBlock>
      </div>

      {/* Alapértelmezett */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <PresenceBadge />
      </div>

      {/* Méretek */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méretek (Sizes)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A jelenlét jelvény támogatja a tiny, extra-small, small, medium és extra-large méreteket. Az alapértelmezett a medium.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge size="tiny" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Tiny</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge size="extra-small" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Extra-small</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge size="small" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Small</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge size="medium" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Medium</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge size="large" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Large</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge size="extra-large" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Extra-large</Caption1>
          </div>
        </div>
      </div>

      {/* Státusz */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Státusz (Status)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A jelenlét jelvény támogatja az available, away, busy, do-not-disturb, offline, out-of-office, blocked és unknown státuszokat. 
            Az alapértelmezett az available.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="available" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Available</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="away" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Away</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="busy" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Busy</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="do-not-disturb" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Do not disturb</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="offline" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Offline</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="out-of-office" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Out of office</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="blocked" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Blocked</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="unknown" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Unknown</Caption1>
          </div>
        </div>
      </div>

      {/* Irodán kívül */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Irodán kívül (Out Of Office)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A jelenlét jelvény támogatja az outOfOffice módosítót, amely bármely státusszal kombinálható, 
            hogy az adott státusz irodán kívüli változatát jelenítse meg.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="available" outOfOffice />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Available OOO</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="away" outOfOffice />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Away OOO</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="busy" outOfOffice />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Busy OOO</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="do-not-disturb" outOfOffice />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>DND OOO</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="offline" outOfOffice />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Offline OOO</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="blocked" outOfOffice />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Blocked OOO</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PresenceBadge status="unknown" outOfOffice />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Unknown OOO</Caption1>
          </div>
        </div>
      </div>
    </div>
  );
}
