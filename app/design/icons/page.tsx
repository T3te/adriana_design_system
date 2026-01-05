'use client';

import * as FluentIcons from '@fluentui/react-icons';
import { useState, useMemo } from 'react';
import { Title1, Title2, Body1, Caption1, SearchBox, tokens, Button } from '@fluentui/react-components';
import CodeBlock from '@/components/CodeBlock';

const ICONS_PER_PAGE = 100;

export default function IconsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Get all Regular icons (simple and safe)
  const allIcons = useMemo(() => {
    return Object.entries(FluentIcons)
      .filter(([name]) => {
        // Only unsized Regular icons (e.g., SendRegular, NOT Send24Regular)
        return name.endsWith('Regular') && !/\d/.test(name);
      })
      .map(([name, Component]) => ({
        name,
        Component: Component as React.ComponentType<any>
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  // Filter icons based on search term
  const filteredIcons = useMemo(() => {
    if (!searchTerm) return allIcons;
    const lowerSearch = searchTerm.toLowerCase();
    return allIcons.filter(icon => 
      icon.name.toLowerCase().includes(lowerSearch)
    );
  }, [allIcons, searchTerm]);

  // Paginated icons - only render current page
  const paginatedIcons = useMemo(() => {
    const startIndex = (currentPage - 1) * ICONS_PER_PAGE;
    const endIndex = startIndex + ICONS_PER_PAGE;
    return filteredIcons.slice(startIndex, endIndex);
  }, [filteredIcons, currentPage]);

  const totalPages = Math.ceil(filteredIcons.length / ICONS_PER_PAGE);

  // Reset to page 1 when search changes
  const handleSearchChange = (_: any, data: { value: string }) => {
    setSearchTerm(data.value);
    setCurrentPage(1);
  };

  const handleIconClick = (iconName: string) => {
    navigator.clipboard.writeText(iconName);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Ikonok</Title1>
      </div>

      {/* Méretezett vs Méret nélküli ikonok */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méretezett vs Méret nélküli ikonok</Title2>
        </div>
        <Body1 style={{ marginBottom: '12px', color: tokens.colorNeutralForeground2 }}>
          A <strong>méret nélküli ikonok</strong> (pl. SendRegular, SendFilled, stb.) mérete 1em és arányosan módosítható a fontSize tulajdonsággal.
        </Body1>
        <Body1 style={{ marginBottom: '12px', color: tokens.colorNeutralForeground2 }}>
          A <strong>méretezett ikonok</strong> (pl. Send24Regular, Send32Regular) rögzített méretűek és nem skálázódnak.
        </Body1>
        <Body1 style={{ color: tokens.colorNeutralForeground2 }}>
          Általános ajánlásként a méret nélküli ikonokat érdemes használni, mivel ugyanaz az ikon többször újrafelhasználható. 
          Azonban vannak esetek, amikor az ikonok nem skálázódnak megfelelően. Például a logókat és jeleket tartalmazó ikonok gyakran 
          változó karaktermérettel rendelkeznek. Ilyen esetekben a méretezett ikonok használata javasolt.
        </Body1>
      </div>

      {/* createSvgIcon Section */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>createSvgIcon</Title2>
        </div>
        <Body1 style={{ marginBottom: '16px', color: tokens.colorNeutralForeground2 }}>
          A V0 exportál egy createSvgIcon függvényt, amely lehetővé teszi egyedi ikonok létrehozását, például:
        </Body1>
        <CodeBlock>
          {`export const MyIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <g className={classes.outlinePart}>
        <path d="..." />
      </g>
      <g className={classes.filledPart}>
        <path d="..." />
      </g>
    </svg>
  ),
  displayName: 'MyIcon',
});`}
        </CodeBlock>
        <Body1 style={{ marginTop: '16px', marginBottom: '16px', color: tokens.colorNeutralForeground2 }}>
          A használata pedig így néz ki:
        </Body1>
        <CodeBlock>
          {`// Használati példa

// Alapértelmezett kitöltött ikon
<MyIcon />

// Vonalazott ikon
<MyIcon outline />`}
        </CodeBlock>
        <Body1 style={{ marginTop: '16px', marginBottom: '16px', color: tokens.colorNeutralForeground2 }}>
          Ugyanennek eléréséhez V9-ben a wrapIcon és bundleIcon kombinációját kell használnunk.
        </Body1>
        <CodeBlock>
          {`// MyIcon.tsx
import { FluentIconsProps, bundleIcon, wrapIcon } from '@fluentui/react-icons';

export const MyOutlineIcon = wrapIcon((props: FluentIconsProps) => {
  return (
    <svg height="1rem" width="1rem" role="presentation" focusable="false" viewBox="2 2 16 16" {...props}>
      <g>
        <path d="..." />
      </g>
    </svg>
  );
}, 'MyOutlineIcon');

export const MyFilledIcon = wrapIcon((props: FluentIconsProps) => {
  return (
    <svg height="1rem" width="1rem" role="presentation" focusable="false" viewBox="2 2 16 16" {...props}>
      <g>
        <path d="..." />
      </g>
    </svg>
  );
}, 'MyFilledIcon');

export const MyIcon = bundleIcon(MyFilledIcon, MyOutlineIcon);`}
        </CodeBlock>
        <Body1 style={{ marginTop: '16px', marginBottom: '16px', color: tokens.colorNeutralForeground2 }}>
          A használata pedig így néz ki:
        </Body1>
        <CodeBlock>
          {`// Használati példa

// Alapértelmezett vonalazott ikon
<MyIcon />

// Kitöltött ikon
<MyIcon filled />`}
        </CodeBlock>
        <Body1 style={{ marginTop: '16px', color: tokens.colorNeutralForeground2 }}>
          A <code>createSvgIcon</code>-nal létrehozott ikon alapértelmezetten kitöltött, míg a <code>wrapIcon</code>-nal létrehozott ikon 
          alapértelmezetten vonalazott, így a createSvgIcon cseréjekor ne felejtsd el hozzáadni a filled tulajdonságot az ikon használatához.
        </Body1>
      </div>

      {/* Sizing Section */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méretezés</Title2>
        </div>

        <CodeBlock>
          {`<MyIcon fontSize={24} />`}
        </CodeBlock>
        <Body1 style={{ marginTop: '16px', color: tokens.colorNeutralForeground2 }}>
          A V9 ikonok stílusozhatók a CSS font-size tulajdonság használatával is.
        </Body1>
      </div>


      {/* Bundle Icon */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Csomagolt Ikon</Title2>
        </div>
        <Body1 style={{ marginBottom: '16px', color: tokens.colorNeutralForeground2 }}>
          A <code>bundleIcon()</code> az ikonok Regular és Filled verzióinak kombinálására szolgál, és használható a közöttük való váltásra hover esetén. 
          Néhány Fluent UI React komponens beépítetten rendelkezik "fill-on-hover" viselkedéssel, például a Button és MenuItem.
        </Body1>
        <CodeBlock>
          {`import { bundleIcon, SendFilled, SendRegular } from '@fluentui/react-icons';

const Send = bundleIcon(SendFilled, SendRegular);

// Használat
<Send />           // Alapértelmezett: Regular
<Send filled />    // Kitöltött verzió`}
        </CodeBlock>
      </div>

      {/* Styling */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Stílusozás</Title2>
        </div>
        <Body1 style={{ marginBottom: '16px', color: tokens.colorNeutralForeground2 }}>
          Az ikonok színe és mérete CSS-sel módosítható. A csomagolt ikonok is ugyanígy stílusozhatók.
        </Body1>
        <Body1 style={{ marginBottom: '16px', color: tokens.colorNeutralForeground2 }}>
          Mivel az ikonok SVG elemek, a fontSize tulajdonsággal stílusozhatók:
        </Body1>
        <CodeBlock>
          {`import { HomeRegular } from '@fluentui/react-icons';

// fontSize tulajdonság használata
<HomeRegular fontSize={24} />

// style használata
<HomeRegular style={{ fontSize: '32px', color: 'red' }} />

// CSS className használata
<HomeRegular className="custom-icon" />`}
        </CodeBlock>
      </div>

      {/* Search Section */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Ikon Kereső</Title2>
        </div>
        <Caption1 style={{ marginBottom: '16px', color: tokens.colorNeutralForeground3 }}>
          Kereshetsz {allIcons.length} ikon között. Csak méret nélküli Regular ikonok jelennek meg a stabilitás érdekében.
        </Caption1>
        <div className="mb-4">
          <SearchBox
            placeholder="Ikonok keresése..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ maxWidth: '400px' }}
          />
          <Caption1 
            className="mt-2" 
            style={{ color: tokens.colorNeutralForeground3 }}
          >
            {filteredIcons.length} {filteredIcons.length === 1 ? 'ikon' : 'ikon'} találat
            {searchTerm && ` a "${searchTerm}" kifejezésre`}
            {filteredIcons.length > 0 && ` - ${currentPage}. oldal / ${totalPages} (${ICONS_PER_PAGE} ikon oldalanként)`}
          </Caption1>
        </div>

        {/* Icon Grid */}
        <div 
          className="grid gap-4 mt-6" 
          style={{ 
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))'
          }}
        >
          {paginatedIcons.map(({ name, Component }) => (
            <div
              key={name}
              onClick={() => handleIconClick(name)}
              className="flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all duration-200"
              style={{
                border: `1px solid ${tokens.colorNeutralStroke1}`,
                backgroundColor: tokens.colorNeutralBackground1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = tokens.colorNeutralBackground1Hover;
                e.currentTarget.style.borderColor = tokens.colorBrandStroke1;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = tokens.shadow8;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = tokens.colorNeutralBackground1;
                e.currentTarget.style.borderColor = tokens.colorNeutralStroke1;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Component 
                style={{ 
                  fontSize: '32px', 
                  marginBottom: '8px',
                  color: tokens.colorBrandForeground1
                }} 
              />
              <Caption1 
                className="text-center break-words w-full"
                style={{ color: tokens.colorNeutralForeground2 }}
              >
                {name}
              </Caption1>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {filteredIcons.length > 0 && totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              appearance="secondary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            >
              Előző
            </Button>
            <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>
              {currentPage}. oldal / {totalPages}
            </Caption1>
            <Button
              appearance="secondary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            >
              Következő
            </Button>
          </div>
        )}

        {filteredIcons.length === 0 && (
          <div 
            className="text-center py-12"
            style={{ color: tokens.colorNeutralForeground3 }}
          >
            
            <Body1>Nincs találat a "{searchTerm}" kifejezésre</Body1>
          </div>
        )}
      </div>
    </div>
  );
}
