'use client';

import { 
  Title1,
  Title2,
  Caption1,
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  partitionAvatarGroupItems,
  tokens,
  Tooltip,
} from '@fluentui/react-components';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

const names = [
  'Kovács János',
  'Nagy Eszter',
  'Szabó Péter',
  'Tóth Anna',
  'Kiss Márton',
  'Varga Éva',
  'Horváth Gábor',
  'Molnár Zsófia',
  'Farkas László',
  'Balogh Katalin',
  'Takács Ferenc',
];

export default function AvatarGroupPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>AvatarGroup - Avatar csoport</Title1>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          Az AvatarGroup egy adott entitáshoz kapcsolódó több személy grafikus ábrázolása.
          Az AvatarGroup az Avatar komponenst használja, ahol minden Avatar egy személyt képvisel.
          Megjeleníthető spread, stack vagy pie elrendezésben.
        </Caption1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>// Import</CodeComment>
          {`import { 
  AvatarGroup, 
  AvatarGroupItem, 
  AvatarGroupPopover,
  partitionAvatarGroupItems 
} from '@fluentui/react-components';

`}
          <CodeComment>// Használat</CodeComment>
          {`const names = ['Kovács János', 'Nagy Eszter', ...];
const { inlineItems, overflowItems } = partitionAvatarGroupItems({
  items: names,
});

<AvatarGroup>
  {inlineItems.map((name) => (
    <AvatarGroupItem name={name} key={name} />
  ))}
  {overflowItems && (
    <AvatarGroupPopover>
      {overflowItems.map((name) => (
        <AvatarGroupItem name={name} key={name} />
      ))}
    </AvatarGroupPopover>
  )}
</AvatarGroup>`}
        </CodeBlock>
      </div>

      {/* Alapértelmezett */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A partitionAvatarGroupItems segítségével automatikusan feloszthatók az elemek inline és overflow csoportokra.
          </Caption1>
        </div>
        <AvatarGroup>
          {partitionAvatarGroupItems({ items: names }).inlineItems.map((name) => (
            <AvatarGroupItem name={name} key={name} />
          ))}
          {partitionAvatarGroupItems({ items: names }).overflowItems && (
            <AvatarGroupPopover>
              {partitionAvatarGroupItems({ items: names }).overflowItems!.map((name) => (
                <AvatarGroupItem name={name} key={name} />
              ))}
            </AvatarGroupPopover>
          )}
        </AvatarGroup>
      </div>

      {/* Elrendezés */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Elrendezés (Layout)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az AvatarGroup három elrendezést támogat: spread (szétterített), stack (halmozott) és pie (körcikk). Az alapértelmezett a spread.
          </Caption1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div style={{ width: '120px' }}>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Spread</Caption1>
            </div>
            <AvatarGroup layout="spread">
              {partitionAvatarGroupItems({ items: names }).inlineItems.map((name) => (
                <AvatarGroupItem name={name} key={name} />
              ))}
              {partitionAvatarGroupItems({ items: names }).overflowItems && (
                <AvatarGroupPopover>
                  {partitionAvatarGroupItems({ items: names }).overflowItems!.map((name) => (
                    <AvatarGroupItem name={name} key={name} />
                  ))}
                </AvatarGroupPopover>
              )}
            </AvatarGroup>
          </div>
          <div className="flex items-center gap-4">
            <div style={{ width: '120px' }}>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Stack</Caption1>
            </div>
            <AvatarGroup layout="stack">
              {partitionAvatarGroupItems({ items: names }).inlineItems.map((name) => (
                <AvatarGroupItem name={name} key={name} />
              ))}
              {partitionAvatarGroupItems({ items: names }).overflowItems && (
                <AvatarGroupPopover>
                  {partitionAvatarGroupItems({ items: names }).overflowItems!.map((name) => (
                    <AvatarGroupItem name={name} key={name} />
                  ))}
                </AvatarGroupPopover>
              )}
            </AvatarGroup>
          </div>
          <div className="flex items-center gap-4">
            <div style={{ width: '120px' }}>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Pie</Caption1>
            </div>
            <AvatarGroup layout="pie">
              <AvatarGroupPopover>
                {names.slice(0, 3).map((name) => (
                  <AvatarGroupItem name={name} key={name} />
                ))}
              </AvatarGroupPopover>
            </AvatarGroup>
          </div>
        </div>
      </div>

      {/* Jelző */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Jelző (Indicator)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az AvatarGroup támogatja az ikon és a szám jelzőt. Ha a méret kisebb mint 24, alapértelmezetten ikon jelenik meg.
          </Caption1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div style={{ width: '120px' }}>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Szám (size 32)</Caption1>
            </div>
            <AvatarGroup size={32}>
              {partitionAvatarGroupItems({ items: names }).inlineItems.map((name) => (
                <AvatarGroupItem name={name} key={name} />
              ))}
              {partitionAvatarGroupItems({ items: names }).overflowItems && (
                <AvatarGroupPopover>
                  {partitionAvatarGroupItems({ items: names }).overflowItems!.map((name) => (
                    <AvatarGroupItem name={name} key={name} />
                  ))}
                </AvatarGroupPopover>
              )}
            </AvatarGroup>
          </div>
          <div className="flex items-center gap-4">
            <div style={{ width: '120px' }}>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Ikon (size 20)</Caption1>
            </div>
            <AvatarGroup size={20}>
              {partitionAvatarGroupItems({ items: names }).inlineItems.map((name) => (
                <AvatarGroupItem name={name} key={name} />
              ))}
              {partitionAvatarGroupItems({ items: names }).overflowItems && (
                <AvatarGroupPopover>
                  {partitionAvatarGroupItems({ items: names }).overflowItems!.map((name) => (
                    <AvatarGroupItem name={name} key={name} />
                  ))}
                </AvatarGroupPopover>
              )}
            </AvatarGroup>
          </div>
        </div>
      </div>

      {/* Méret spread */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méret spread (Size Spread)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az AvatarGroup spread elrendezéssel 16-tól 128-ig támogatja a méreteket. Az alapértelmezett 32.
          </Caption1>
        </div>
        <div className="flex flex-col gap-4">
          {[16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128].map((size) => (
            <div key={size} className="flex items-center gap-4">
              <div style={{ width: '80px' }}>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>{size}</Caption1>
              </div>
              <AvatarGroup layout="spread" size={size as any}>
                {partitionAvatarGroupItems({ items: names }).inlineItems.map((name) => (
                  <AvatarGroupItem name={name} key={name} />
                ))}
                {partitionAvatarGroupItems({ items: names }).overflowItems && (
                  <AvatarGroupPopover>
                    {partitionAvatarGroupItems({ items: names }).overflowItems!.map((name) => (
                      <AvatarGroupItem name={name} key={name} />
                    ))}
                  </AvatarGroupPopover>
                )}
              </AvatarGroup>
            </div>
          ))}
        </div>
      </div>

      {/* Méret stack */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méret stack (Size Stack)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az AvatarGroup stack elrendezéssel 16-tól 128-ig támogatja a méreteket. Az alapértelmezett 32.
            Figyelem: ne tegyen több interaktív avatart stack elrendezésbe, hacsak a méret nincs legalább 28.
          </Caption1>
        </div>
        <div className="flex flex-col gap-4">
          {[16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128].map((size) => (
            <div key={size} className="flex items-center gap-4">
              <div style={{ width: '80px' }}>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>{size}</Caption1>
              </div>
              <AvatarGroup layout="stack" size={size as any}>
                {partitionAvatarGroupItems({ items: names }).inlineItems.map((name) => (
                  <AvatarGroupItem name={name} key={name} />
                ))}
                {partitionAvatarGroupItems({ items: names }).overflowItems && (
                  <AvatarGroupPopover>
                    {partitionAvatarGroupItems({ items: names }).overflowItems!.map((name) => (
                      <AvatarGroupItem name={name} key={name} />
                    ))}
                  </AvatarGroupPopover>
                )}
              </AvatarGroup>
            </div>
          ))}
        </div>
      </div>

      {/* Méret pie */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méret pie (Size Pie)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az AvatarGroup pie elrendezéssel 16-tól 128-ig támogatja a méreteket. Az alapértelmezett 32.
            Ne használjon 3-nál több AvatarGroupItem-et pie elrendezésben.
          </Caption1>
        </div>
        <div className="flex flex-col gap-4">
          {[16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128].map((size) => (
            <div key={size} className="flex items-center gap-4">
              <div style={{ width: '80px' }}>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>{size}</Caption1>
              </div>
              <AvatarGroup layout="pie" size={size as any}>
                <AvatarGroupPopover>
                  {names.slice(0, 3).map((name) => (
                    <AvatarGroupItem name={name} key={name} />
                  ))}
                </AvatarGroupPopover>
              </AvatarGroup>
            </div>
          ))}
        </div>
      </div>

      {/* Eszköztipp */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Eszköztipp (Tooltip)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Személyre szabhatja az AvatarGroupPopover eszköztippjét, például fordításokhoz.
          </Caption1>
        </div>
        <AvatarGroup>
          {partitionAvatarGroupItems({ items: names }).inlineItems.map((name) => (
            <AvatarGroupItem name={name} key={name} />
          ))}
          {partitionAvatarGroupItems({ items: names }).overflowItems && (
            <AvatarGroupPopover>
              {partitionAvatarGroupItems({ items: names }).overflowItems!.map((name) => (
                <AvatarGroupItem name={name} key={name} />
              ))}
            </AvatarGroupPopover>
          )}
        </AvatarGroup>
      </div>
    </div>
  );
}
