'use client';

import { 
  Title1,
  Title2,
  Caption1,
  Checkbox,
  tokens,
} from '@fluentui/react-components';
import * as React from 'react';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

export default function CheckboxPage() {
  const [checked, setChecked] = React.useState(true);
  const [option1, setOption1] = React.useState(false);
  const [option2, setOption2] = React.useState(false);
  const [option3, setOption3] = React.useState(true);

  const allChecked = option1 && option2 && option3;
  const someChecked = (option1 || option2 || option3) && !allChecked;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Checkbox</Title1>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          A Checkbox-ok lehetővé teszik az emberek számára, hogy egy vagy több
          elemet válasszanak ki egy csoportból, vagy váltsanak két kölcsönösen
          kizáró opció között (bejelölt vagy jelöletlen).
        </Caption1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>{'// Import'}</CodeComment>
          {`import { Checkbox } from '@fluentui/react-components';

`}
          <CodeComment>{'// Használat'}</CodeComment>
          {`<Checkbox label="Elfogadom a feltételeket" />
<Checkbox checked={checked} onChange={(ev, data) => setChecked(data.checked)} />
<Checkbox defaultChecked label="Alapból bejelölt" />`}
        </CodeBlock>
      </div>

      {/* Alapértelmezett */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <Checkbox label="Checkbox" />
      </div>

      {/* Checked */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Bejelölt (Checked)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A checkbox kezdetben bejelölhető a defaultChecked használatával, vagy
          vezérelhető a checked tulajdonsággal.
        </Caption1>
        <div className="flex flex-col gap-4">
          <Checkbox defaultChecked label="Alapból bejelölt (uncontrolled)" />
          <Checkbox
            checked={checked}
            onChange={(_ev, data) => setChecked(data.checked === true)}
            label={`Vezérelt (${checked ? 'bejelölt' : 'nincs bejelölve'})`}
          />
        </div>
      </div>

      {/* Mixed */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Vegyes (Mixed/Indeterminate)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A checkbox kezdetben vegyes állapotú lehet a defaultChecked=&quot;mixed&quot;
          használatával, vagy vezérelhető a checked=&quot;mixed&quot; segítségével. Ebben
          a példában a vegyes állapotot akkor használjuk, amikor az opciók
          csoportja eltérő értékekkel rendelkezik.
        </Caption1>
        <div className="flex flex-col gap-2">
          <Checkbox
            checked={allChecked ? true : someChecked ? 'mixed' : false}
            onChange={(_ev, data) => {
              const newChecked = data.checked === true;
              setOption1(newChecked);
              setOption2(newChecked);
              setOption3(newChecked);
            }}
            label="Minden opció"
          />
          <div className="ml-6 flex flex-col gap-2">
            <Checkbox
              checked={option1}
              onChange={(_ev, data) => setOption1(data.checked === true)}
              label="Opció 1"
            />
            <Checkbox
              checked={option2}
              onChange={(_ev, data) => setOption2(data.checked === true)}
              label="Opció 2"
            />
            <Checkbox
              checked={option3}
              onChange={(_ev, data) => setOption3(data.checked === true)}
              label="Opció 3"
            />
          </div>
        </div>
      </div>

      {/* Disabled */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Letiltott (Disabled)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A checkbox letiltható.
        </Caption1>
        <div className="flex flex-col gap-4">
          <Checkbox disabled label="Letiltott" />
          <Checkbox disabled checked label="Letiltott bejelölt" />
          <Checkbox disabled checked="mixed" label="Letiltott vegyes" />
        </div>
      </div>

      {/* Large */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Nagy (Large)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A checkbox nagy méretű is lehet.
        </Caption1>
        <div className="flex flex-col gap-4">
          <Checkbox size="large" label="Nagy méret" />
          <Checkbox size="large" checked label="Nagy méret bejelölt" />
          <Checkbox size="large" checked="mixed" label="Nagy méret vegyes" />
        </div>
      </div>

      {/* Label Before */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Címke elöl (Label Before)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A címke a checkbox elé is helyezhető.
        </Caption1>
        <Checkbox labelPosition="before" label="Címke elöl" />
      </div>

      {/* Label Wrapping */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Címke tördelés</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A címke tördelődik, ha szélesebb, mint a rendelkezésre álló hely. A
          checkbox jelölő az első szövegsorhoz igazítva marad.
        </Caption1>
        <div style={{ maxWidth: '400px' }}>
          <Checkbox label="Itt van egy példa egy hosszú címkével rendelkező checkbox-ra, és elkezd tördelődni a második sorra" />
        </div>
      </div>

      {/* Required */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Kötelező (Required)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Amikor egy checkbox kötelezőként van megjelölve, a címkéje is
          megkapja a kötelező stílust.
        </Caption1>
        <Checkbox required label="Kötelező" />
      </div>

      {/* Circular */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Kör alakú (Circular)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A checkbox kör alakú is lehet.
        </Caption1>
        <Caption1 style={{ color: tokens.colorPaletteRedForeground1 }} className="mb-4 block">
          ⚠️ Figyelmeztetés: Hacsak nem egy feladatlista élményt tervezel,
          erősen javasoljuk, hogy ne használd ezt a stílusvariánst, mivel
          összetéveszthető a RadioItem-mel.
        </Caption1>
        <div className="flex flex-col gap-4">
          <Checkbox shape="circular" label="Kör alakú checkbox" />
          <Checkbox shape="circular" checked label="Kör alakú bejelölt" />
          <Checkbox shape="circular" checked="mixed" label="Kör alakú vegyes" />
        </div>
      </div>

      {/* Sizes összehasonlítás */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méretek összehasonlítása</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A checkbox két méretben érhető el.
        </Caption1>
        <div className="flex flex-col gap-4">
          <Checkbox size="medium" label="Közepes (alapértelmezett)" />
          <Checkbox size="large" label="Nagy" />
        </div>
      </div>

      {/* Shapes összehasonlítás */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Formák összehasonlítása</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A checkbox két formában érhető el.
        </Caption1>
        <div className="flex flex-col gap-4">
          <Checkbox shape="square" label="Négyzet (alapértelmezett)" />
          <Checkbox shape="circular" label="Kör alakú" />
        </div>
      </div>
    </div>
  );
}
