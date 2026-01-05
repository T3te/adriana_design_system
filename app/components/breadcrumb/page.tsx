'use client';

import { 
  Title1,
  Title2,
  Caption1,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
  tokens,
} from '@fluentui/react-components';
import {
  CalendarMonthFilled,
  CalendarMonthRegular,
  bundleIcon,
} from '@fluentui/react-icons';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

export default function BreadcrumbPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Breadcrumb - Morzsaút</Title1>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          A morzsaút navigációs segédeszköz, amely megmutatja a jelenlegi oldal helyét a webhely hierarchiájában.
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
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbButton, 
  BreadcrumbDivider 
} from '@fluentui/react-components';

`}
          <CodeComment>// Használat</CodeComment>
          {`<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbButton href="/">Elem 1</BreadcrumbButton>
  </BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem>
    <BreadcrumbButton href="/item2">Elem 2</BreadcrumbButton>
  </BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem>
    <BreadcrumbButton current>Elem 3</BreadcrumbButton>
  </BreadcrumbItem>
</Breadcrumb>`}
        </CodeBlock>
      </div>

      {/* Alapértelmezett */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <Breadcrumb aria-label="Breadcrumb alapértelmezett példa">
          <BreadcrumbItem>
            <BreadcrumbButton>Elem 1</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton icon={<CalendarMonth />}>Elem 2</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton>Elem 3</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton current>Elem 4</BreadcrumbButton>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      {/* Méretek */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méretek (Size)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A morzsaút támogatja a small, medium és large méreteket. Az alapértelmezett a medium.
          </Caption1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Small</Caption1>
            <Breadcrumb size="small" aria-label="Small breadcrumb">
              <BreadcrumbItem>
                <BreadcrumbButton>Elem 1</BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton>Elem 2</BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton>Elem 3</BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton current>Elem 4</BreadcrumbButton>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="flex flex-col gap-2">
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Medium</Caption1>
            <Breadcrumb size="medium" aria-label="Medium breadcrumb">
              <BreadcrumbItem>
                <BreadcrumbButton>Elem 1</BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton>Elem 2</BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton>Elem 3</BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton current>Elem 4</BreadcrumbButton>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="flex flex-col gap-2">
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Large</Caption1>
            <Breadcrumb size="large" aria-label="Large breadcrumb">
              <BreadcrumbItem>
                <BreadcrumbButton>Elem 1</BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton>Elem 2</BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton>Elem 3</BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton current>Elem 4</BreadcrumbButton>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* Fókusz mód */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Fókusz mód (Focus Mode)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A focusMode tulajdonság beállítja a fókusz viselkedést a Breadcrumb komponensben.
            A "tab" mód a Tab billentyűvel ciklikusan végighalad az elemeken.
            Az "arrow" mód a nyíl billentyűkkel navigál az elemek között.
            Az alapértelmezett a "tab".
          </Caption1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Tab mód (alapértelmezett)</Caption1>
            <Breadcrumb focusMode="tab" aria-label="Tab focus mode">
              <BreadcrumbItem>
                <BreadcrumbButton>Elem 1</BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton>Elem 2</BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton current>Elem 3</BreadcrumbButton>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="flex flex-col gap-2">
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Arrow mód</Caption1>
            <Breadcrumb focusMode="arrow" aria-label="Arrow focus mode">
              <BreadcrumbItem>
                <BreadcrumbButton>Elem 1</BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton>Elem 2</BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton current>Elem 3</BreadcrumbButton>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* Ikonokkal */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Ikonokkal</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A BreadcrumbButton támogatja az icon tulajdonságot, amely lehetővé teszi ikonok hozzáadását az elemekhez.
          </Caption1>
        </div>
        <Breadcrumb aria-label="Breadcrumb with icons">
          <BreadcrumbItem>
            <BreadcrumbButton icon={<CalendarMonth />}>Naptár</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton icon={<CalendarMonth />}>Események</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton icon={<CalendarMonth />} current>Részletek</BreadcrumbButton>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      {/* Jelenlegi elem */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Jelenlegi elem (Current)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A current tulajdonság jelzi az aktuális oldalt a navigációs útvonalon.
            Ez általában az utolsó elem, és vizuálisan kiemelve jelenik meg.
          </Caption1>
        </div>
        <Breadcrumb aria-label="Current item example">
          <BreadcrumbItem>
            <BreadcrumbButton>Kezdőlap</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton>Termékek</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton>Kategória</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton current>Részletek</BreadcrumbButton>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  );
}
