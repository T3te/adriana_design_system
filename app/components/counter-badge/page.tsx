'use client';

import { 
  Title1,
  Title2,
  Caption1,
  CounterBadge,
  tokens,
} from '@fluentui/react-components';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

export default function CounterBadgePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>CounterBadge - Számláló jelvény</Title1>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          A számlálós jelvény egy numerikus értéket megjelenítő jelvény.
        </Caption1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>{'// Import'}</CodeComment>
          {`import { CounterBadge } from '@fluentui/react-components';

`}
          <CodeComment>{'// Használat'}</CodeComment>
          {`<CounterBadge count={5} />
<CounterBadge count={100} overflowCount={99} />
<CounterBadge dot />`}
        </CodeBlock>
      </div>

      {/* Alapértelmezett */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <CounterBadge count={5} />
      </div>

      {/* Megjelenés */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Megjelenés (Appearance)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A számlálós jelvény lehet filled (kitöltött) vagy ghost (szellem) megjelenésű. Az alapértelmezett a filled.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <CounterBadge appearance="filled" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Filled</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CounterBadge appearance="ghost" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Ghost</Caption1>
          </div>
        </div>
      </div>

      {/* Alakzatok */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alakzatok (Shapes)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A számlálós jelvény lehet kerekített (rounded) vagy kör alakú (circular). Az alapértelmezett a circular.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <CounterBadge shape="circular" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Circular</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CounterBadge shape="rounded" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Rounded</Caption1>
          </div>
        </div>
      </div>

      {/* Méretek */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méretek (Sizes)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A számlálós jelvény támogatja a tiny, extra-small, small, medium, large és extra-large méreteket. Az alapértelmezett a medium.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <CounterBadge size="tiny" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Tiny</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CounterBadge size="extra-small" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Extra-small</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CounterBadge size="small" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Small</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CounterBadge size="medium" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Medium</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CounterBadge size="large" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Large</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CounterBadge size="extra-large" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Extra-large</Caption1>
          </div>
        </div>
      </div>

      {/* Színek */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Színek (Color)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A számlálós jelvény különböző színekben jelenhet meg: brand, danger, important vagy informative. Az alapértelmezett a brand. 
            A színnel közvetített információt más módon is kommunikálni kell az akadálymentesítési követelmények teljesítése érdekében.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <CounterBadge color="brand" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Brand</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CounterBadge color="danger" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Danger</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CounterBadge color="important" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Important</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CounterBadge color="informative" count={5} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Informative</Caption1>
          </div>
        </div>
      </div>

      {/* Pont */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Pont (Dot)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A számlálós jelvény megjeleníthet egy kis pontot a szám helyett.
          </Caption1>
        </div>
        <CounterBadge dot />
      </div>

      {/* Túlcsordulás */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Túlcsordulási szám (Overflow Count)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az overflowCount tulajdonsággal beállítható a maximum megjelenítendő szám. Az alapértelmezett 99.
            Ha a count meghaladja ezt az értéket, akkor &quot;99+&quot; formátumban jelenik meg.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <CounterBadge count={100} overflowCount={99} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>100 → 99+</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CounterBadge count={1000} overflowCount={999} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>1000 → 999+</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CounterBadge count={50} overflowCount={99} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>50 → 50</Caption1>
          </div>
        </div>
      </div>

      {/* Nulla megjelenítése */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Nulla megjelenítése (Show Zero)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A showZero tulajdonsággal beállítható, hogy a jelvény megjelenjen-e 0 érték esetén is. Az alapértelmezés szerint nem jelenik meg.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <CounterBadge count={0} showZero={false} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>showZero=false (nincs megjelenítve)</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CounterBadge count={0} showZero={true} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>showZero=true</Caption1>
          </div>
        </div>
      </div>
    </div>
  );
}
