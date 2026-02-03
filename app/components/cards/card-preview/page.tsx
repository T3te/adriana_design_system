'use client';

import { 
  Title1,
  Title2,
  Caption1,
  CardPreview,
  tokens,
} from '@fluentui/react-components';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";
  return `${ASSET_URL}${asset}`;
};

export default function CardPreviewPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>CardPreview</Title1>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          A CardPreview komponens a Card belsejében használható, lehetővé teszi
          a felhasználónak, hogy jobban vizualizálja a kártya tartalmát.
        </Caption1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>// Import</CodeComment>
          {`import { CardPreview } from '@fluentui/react-components';

`}
          <CodeComment>// Használat</CodeComment>
          {`<CardPreview logo={<img src="..." alt="Logo" />}>
  <img src="..." alt="Preview" />
</CardPreview>`}
        </CodeBlock>
      </div>

      {/* Alapértelmezett */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          CardPreview egy előnézeti képpel és logóval.
        </Caption1>
        <CardPreview
          style={{ width: '400px' }}
          logo={
            <img
              src={resolveAsset("app_logo.svg")}
              alt="Logo"
              style={{ width: '32px', height: '32px' }}
            />
          }
        >
          <img
            src={resolveAsset("app_logo.svg")}
            alt="Preview"
            style={{ width: '100%', height: '200px', objectFit: 'cover', backgroundColor: '#f5f5f5' }}
          />
        </CardPreview>
      </div>

      {/* Logo nélkül */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Logo nélkül</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          CardPreview csak előnézeti képpel, logo nélkül.
        </Caption1>
        <CardPreview style={{ width: '400px' }}>
          <img
            src={resolveAsset("app_logo.svg")}
            alt="Preview"
            style={{ width: '100%', height: '200px', objectFit: 'cover', backgroundColor: '#f5f5f5' }}
          />
        </CardPreview>
      </div>

      {/* Videó előnézet */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Videó előnézet</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          CardPreview használható videók előnézetéhez is.
        </Caption1>
        <CardPreview
          style={{ width: '400px' }}
          logo={
            <img
              src={resolveAsset("app_logo.svg")}
              alt="Video Logo"
              style={{ width: '32px', height: '32px' }}
            />
          }
        >
          <div
            style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '48px',
            }}
          >
            ▶
          </div>
        </CardPreview>
      </div>

      {/* Egyedi tartalom */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Egyedi tartalom</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A CardPreview tetszőleges tartalommal használható, nem csak képekkel.
        </Caption1>
        <CardPreview
          style={{ width: '400px' }}
          logo={
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: tokens.colorBrandBackground,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              A
            </div>
          }
        >
          <div
            style={{
              width: '100%',
              height: '200px',
              backgroundColor: tokens.colorNeutralBackground3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Egyedi tartalom</div>
            <div style={{ color: tokens.colorNeutralForeground3 }}>
              Bármilyen JSX elem elhelyezhető itt
            </div>
          </div>
        </CardPreview>
      </div>
    </div>
  );
}
