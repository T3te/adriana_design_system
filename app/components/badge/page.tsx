'use client';

import { 
  Title1,
  Title2,
  Caption1,
  Badge,
  tokens,
} from '@fluentui/react-components';
import {
  CalendarMonthRegular,
} from '@fluentui/react-icons';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

export default function BadgePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Badge - Jelvény</Title1>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          A jelvény egy vizuális díszítés UI elemekhez. Különböző jelvények különböző tartalmat jeleníthetnek meg.
          A Badge szöveget és/vagy ikont jelenít meg.
        </Caption1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>{'// Import'}</CodeComment>
          {`import { Badge } from '@fluentui/react-components';

`}
          <CodeComment>{'// Használat'}</CodeComment>
          {`<Badge>Új</Badge>
<Badge appearance="outline" color="danger">999+</Badge>
<Badge icon={<CalendarMonthRegular />}>Esemény</Badge>`}
        </CodeBlock>
      </div>

      {/* Alapértelmezett */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <Badge>Badge</Badge>
      </div>

      {/* Megjelenés */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Megjelenés (Appearance)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A jelvény lehet filled (kitöltött), ghost (szellem), outline (körvonalazott) vagy tint (árnyalat). Az alapértelmezett a filled.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Badge appearance="filled">999+</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Filled</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge appearance="ghost">999+</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Ghost</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge appearance="outline">999+</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Outline</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge appearance="tint">999+</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Tint</Caption1>
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
            A jelvény támogatja a tiny, extra-small, small, medium, large és extra-large méreteket. Az alapértelmezett a medium.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Badge size="tiny">Tiny</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Tiny</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge size="extra-small">XS</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Extra-small</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge size="small">Small</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Small</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge size="medium">Medium</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Medium</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge size="large">Large</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Large</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge size="extra-large">XL</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Extra-large</Caption1>
          </div>
        </div>
      </div>

      {/* Forma */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Forma (Shapes)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A jelvény lehet négyzet, lekerekített vagy kör alakú. Az alapértelmezett a circular.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Badge shape="circular">Circular</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Circular</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge shape="rounded">Rounded</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Rounded</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge shape="square">Square</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Square</Caption1>
          </div>
        </div>
      </div>

      {/* Szín */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Szín (Color)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A jelvény különböző színekkel rendelkezhet. Az elérhető színek: brand, danger, important, informative, severe, subtle, success vagy warning.
            Az alapértelmezett a brand. A színnel közvetített információt más módon is meg kell jeleníteni az akadálymentesség érdekében.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Badge color="brand">999+</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Brand</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge color="danger">999+</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Danger</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge color="important">999+</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Important</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge color="informative">999+</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Informative</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge color="severe">999+</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Severe</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge color="subtle">999+</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Subtle</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge color="success">999+</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Success</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge color="warning">999+</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Warning</Caption1>
          </div>
        </div>
      </div>

      {/* Ikon */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Ikon (Icon)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A jelvény ikont jeleníthet meg. Ha az ikon értelmes információt hordoz, akkor az ikonnak címkével kell rendelkeznie,
            vagy a szülő vezérlő címkéjének tartalmaznia kell az ikon által közvetített információt.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Badge icon={<CalendarMonthRegular />}>Esemény</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Ikon elől</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge icon={<CalendarMonthRegular />} iconPosition="after">Esemény</Badge>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Ikon hátul</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge icon={<CalendarMonthRegular />} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Csak ikon</Caption1>
          </div>
        </div>
      </div>

      {/* Szín és megjelenés */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Szín és megjelenés (Color And Appearance)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Megjegyzés: ghost-subtle és outline-subtle csak brand háttéren használható.
          </Caption1>
        </div>

        {/* Filled */}
        <div className="mb-8">
          <div className="mb-4">
            <Caption1 style={{ color: tokens.colorNeutralForeground3, fontWeight: 600 }}>Filled</Caption1>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="filled" color="brand">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Brand</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="filled" color="danger">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Danger</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="filled" color="important">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Important</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="filled" color="informative">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Informative</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="filled" color="severe">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Severe</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="filled" color="subtle">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Subtle</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="filled" color="success">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Success</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="filled" color="warning">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Warning</Caption1>
            </div>
          </div>
        </div>

        {/* Ghost */}
        <div className="mb-8">
          <div className="mb-4">
            <Caption1 style={{ color: tokens.colorNeutralForeground3, fontWeight: 600 }}>Ghost</Caption1>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="ghost" color="brand">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Brand</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="ghost" color="danger">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Danger</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="ghost" color="important">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Important</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="ghost" color="informative">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Informative</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="ghost" color="severe">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Severe</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="ghost" color="subtle">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Subtle</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="ghost" color="success">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Success</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="ghost" color="warning">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Warning</Caption1>
            </div>
          </div>
        </div>

        {/* Outline */}
        <div className="mb-8">
          <div className="mb-4">
            <Caption1 style={{ color: tokens.colorNeutralForeground3, fontWeight: 600 }}>Outline</Caption1>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="outline" color="brand">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Brand</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="outline" color="danger">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Danger</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="outline" color="important">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Important</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="outline" color="informative">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Informative</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="outline" color="severe">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Severe</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="outline" color="subtle">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Subtle</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="outline" color="success">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Success</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="outline" color="warning">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Warning</Caption1>
            </div>
          </div>
        </div>

        {/* Tint */}
        <div className="mb-8">
          <div className="mb-4">
            <Caption1 style={{ color: tokens.colorNeutralForeground3, fontWeight: 600 }}>Tint</Caption1>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="tint" color="brand">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Brand</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="tint" color="danger">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Danger</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="tint" color="important">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Important</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="tint" color="informative">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Informative</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="tint" color="severe">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Severe</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="tint" color="subtle">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Subtle</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="tint" color="success">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Success</Caption1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge appearance="tint" color="warning">999+</Badge>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Warning</Caption1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
