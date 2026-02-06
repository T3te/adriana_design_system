'use client';

import { 
  Title1,
  Title2,
  Caption1,
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  tokens,
} from '@fluentui/react-components';
import {
  CalendarMonthRegular,
  ChevronDownRegular,
} from '@fluentui/react-icons';
import { useState } from 'react';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

export default function AccordionPage() {
  const [openItems, setOpenItems] = useState(['1']);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Accordion - Harmonika</Title1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>{'// Import'}</CodeComment>
          {`import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from '@fluentui/react-components';

`}
          <CodeComment>{'// Használat'}</CodeComment>
          {`<Accordion>
  <AccordionItem value="1">
    <AccordionHeader>Fejléc 1</AccordionHeader>
    <AccordionPanel>
      <div>Tartalom 1</div>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionHeader>Fejléc 2</AccordionHeader>
    <AccordionPanel>
      <div>Tartalom 2</div>
    </AccordionPanel>
  </AccordionItem>
</Accordion>`}
        </CodeBlock>
      </div>

      {/* Default */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <Accordion>
          <AccordionItem value="1">
            <AccordionHeader>Accordion Fejléc 1</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 1</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader>Accordion Fejléc 2</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 2</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionHeader>Accordion Fejléc 3</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 3</div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Collapsible */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Összecsukható (Collapsible)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground2 }} className="mb-4 block">
          Több panel is be lehet csukva egyszerre.
        </Caption1>
        <Accordion collapsible>
          <AccordionItem value="1">
            <AccordionHeader>Accordion Fejléc 1</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 1</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader>Accordion Fejléc 2</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 2</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionHeader>Accordion Fejléc 3</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 3</div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Controlled */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Vezérelt (Controlled)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground2 }} className="mb-4 block">
          Vezérelt állapotú accordion, ahol az openItems prop segítségével szabályozzuk a megnyitott elemeket.
        </Caption1>
        <Accordion 
          openItems={openItems}
          onToggle={(_event, data) => setOpenItems(data.openItems as string[])}
          multiple
          collapsible
        >
          <AccordionItem value="1">
            <AccordionHeader>Accordion Fejléc 1</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 1</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader>Accordion Fejléc 2</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 2</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionHeader>Accordion Fejléc 3</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 3</div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Multiple */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Több egyidejű (Multiple)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground2 }} className="mb-4 block">
          Több panel is nyitva lehet egyszerre.
        </Caption1>
        <Accordion multiple>
          <AccordionItem value="1">
            <AccordionHeader>Accordion Fejléc 1</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 1</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader>Accordion Fejléc 2</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 2</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionHeader>Accordion Fejléc 3</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 3</div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Open Items */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Nyitott elemek (Open Items)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground2 }} className="mb-4 block">
          Alapértelmezetten meghatározható, mely panelek legyenek nyitva.
        </Caption1>
        <Accordion defaultOpenItems={['1']}>
          <AccordionItem value="1">
            <AccordionHeader>Accordion Fejléc 1</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 1</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader>Accordion Fejléc 2</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 2</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionHeader>Accordion Fejléc 3</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 3</div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Sizes */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méretek (Sizes)</Title2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-2">
            <Accordion>
              <AccordionItem value="1">
                <AccordionHeader size="small">Kicsi fejléc</AccordionHeader>
                <AccordionPanel>
                  <div>Tartalom</div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Small</Caption1>
          </div>
          <div className="flex flex-col items-start gap-2">
            <Accordion>
              <AccordionItem value="1">
                <AccordionHeader size="medium">Közepes fejléc</AccordionHeader>
                <AccordionPanel>
                  <div>Tartalom</div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Medium</Caption1>
          </div>
          <div className="flex flex-col items-start gap-2">
            <Accordion>
              <AccordionItem value="1">
                <AccordionHeader size="large">Nagy fejléc</AccordionHeader>
                <AccordionPanel>
                  <div>Tartalom</div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Large</Caption1>
          </div>
          <div className="flex flex-col items-start gap-2">
            <Accordion>
              <AccordionItem value="1">
                <AccordionHeader size="extra-large">Extra nagy fejléc</AccordionHeader>
                <AccordionPanel>
                  <div>Tartalom</div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Extra-Large</Caption1>
          </div>
        </div>
      </div>

      {/* Heading Levels */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Címsor szintek (Heading Levels)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground2 }} className="mb-4 block">
          WAI-ARIA szabvány szerint javasolt megfelelő heading szintet használni.
        </Caption1>
        <Accordion>
          <AccordionItem value="1">
            <AccordionHeader as="h1">Accordion Fejléc mint h1</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 1</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader as="h2">Accordion Fejléc mint h2</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 2</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionHeader as="h3">Accordion Fejléc mint h3</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 3</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionHeader as="h4">Accordion Fejléc mint h4</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 4</div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Inline */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Soron belüli (Inline)</Title2>
        </div>
        <Accordion>
          <AccordionItem value="1">
            <AccordionHeader inline>Accordion Fejléc 1</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 1</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader inline>Accordion Fejléc 2</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 2</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionHeader inline>Accordion Fejléc 3</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 3</div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Disabled */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Letiltott (Disabled)</Title2>
        </div>
        <Accordion>
          <AccordionItem value="1">
            <AccordionHeader>Accordion Fejléc 1</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 1</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2" disabled>
            <AccordionHeader>Accordion Fejléc 2 (Letiltott)</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 2</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionHeader>Accordion Fejléc 3</AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 3</div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Expand Icon */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Egyedi kinyitó ikon (Expand Icon)</Title2>
        </div>
        <Accordion>
          <AccordionItem value="1">
            <AccordionHeader expandIcon={<ChevronDownRegular />}>
              Accordion Fejléc 1
            </AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 1</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader expandIcon={<ChevronDownRegular />}>
              Accordion Fejléc 2
            </AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 2</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionHeader expandIcon={<ChevronDownRegular />}>
              Accordion Fejléc 3
            </AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 3</div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Expand Icon Position */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Kinyitó ikon pozíciója (Expand Icon Position)</Title2>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <Caption1 style={{ color: tokens.colorNeutralForeground2 }} className="mb-4 block">
              Ikon a bal oldalon (Start):
            </Caption1>
            <Accordion>
              <AccordionItem value="1">
                <AccordionHeader expandIconPosition="start">
                  Accordion Fejléc 1
                </AccordionHeader>
                <AccordionPanel>
                  <div>Accordion Panel 1</div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="2">
                <AccordionHeader expandIconPosition="start">
                  Accordion Fejléc 2
                </AccordionHeader>
                <AccordionPanel>
                  <div>Accordion Panel 2</div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Caption1 style={{ color: tokens.colorNeutralForeground2 }} className="mb-4 block">
              Ikon a jobb oldalon (End - alapértelmezett):
            </Caption1>
            <Accordion>
              <AccordionItem value="1">
                <AccordionHeader expandIconPosition="end">
                  Accordion Fejléc 1
                </AccordionHeader>
                <AccordionPanel>
                  <div>Accordion Panel 1</div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="2">
                <AccordionHeader expandIconPosition="end">
                  Accordion Fejléc 2
                </AccordionHeader>
                <AccordionPanel>
                  <div>Accordion Panel 2</div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* With Icon */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Ikonnal (With Icon)</Title2>
        </div>
        <Accordion>
          <AccordionItem value="1">
            <AccordionHeader icon={<CalendarMonthRegular />}>
              Accordion Fejléc 1
            </AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 1</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader icon={<CalendarMonthRegular />}>
              Accordion Fejléc 2
            </AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 2</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionHeader icon={<CalendarMonthRegular />}>
              Accordion Fejléc 3
            </AccordionHeader>
            <AccordionPanel>
              <div>Accordion Panel 3</div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
