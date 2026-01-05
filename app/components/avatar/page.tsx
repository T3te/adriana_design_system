'use client';

import { 
  Title1,
  Title2,
  Caption1,
  Avatar,
  PresenceBadge,
  tokens,
} from '@fluentui/react-components';
import {
  PersonRegular,
  CalendarMonthRegular,
} from '@fluentui/react-icons';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

export default function AvatarPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Avatar - Avatár</Title1>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          Az Avatar egy felhasználó, csapat vagy entitás grafikus ábrázolása.
          Megjeleníthető képpel, ikonnal vagy kezdőbetűkkel, és különböző méreteket és formákat támogat.
        </Caption1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>// Import</CodeComment>
          {`import { Avatar } from '@fluentui/react-components';

`}
          <CodeComment>// Használat</CodeComment>
          {`<Avatar name="John Doe" />
<Avatar name="Jane Smith" image={{ src: 'https://...' }} />
<Avatar icon={<PersonRegular />} />`}
        </CodeBlock>
      </div>

      {/* Alapértelmezett */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <Avatar />
      </div>

      {/* Név */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Név (Name)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            A név alapján határozódnak meg a megjelenített kezdőbetűk. A képernyőolvasók is ezt olvassák fel.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Kovács János" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Kovács János</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Nagy Eszter" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Nagy Eszter</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Szabó Péter" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Szabó Péter</Caption1>
          </div>
        </div>
      </div>

      {/* Kép */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Kép (Image)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az avatar képet jeleníthet meg. Ajánlott a kép mellett nevet is megadni: a név kezdőbetűi jelennek meg a kép betöltése közben.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Avatar 
              name="Kovács János"
              image={{ src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg' }}
            />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Képpel</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Nagy Eszter" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Kép nélkül</Caption1>
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
            Az avatar ikont jeleníthet meg. Az ikon csak akkor látható, ha nincs kép vagy kezdőbetűk.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Avatar icon={<PersonRegular />} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>PersonRegular</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar icon={<CalendarMonthRegular />} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>CalendarMonthRegular</Caption1>
          </div>
        </div>
      </div>

      {/* Jelvény */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Jelvény (Badge)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az avatar jelvénnyel jelezheti a jelenlét állapotát.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Avatar 
              name="Kovács János"
              badge={{ status: 'available' }}
            />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Available</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar 
              name="Nagy Eszter"
              badge={{ status: 'away' }}
            />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Away</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar 
              name="Szabó Péter"
              badge={{ status: 'busy' }}
            />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Busy</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar 
              name="Tóth Anna"
              badge={{ status: 'offline' }}
            />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Offline</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar 
              name="Kiss Márton"
              badge={{ status: 'out-of-office' }}
            />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Out of office</Caption1>
          </div>
        </div>
      </div>

      {/* Jelvény ikon */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Jelvény ikon (Badge Icon)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az avatar jelvénye egyedi ikont is tartalmazhat.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Avatar 
              name="Kovács János"
              badge={{ 
                status: 'available',
                icon: <CalendarMonthRegular />
              }}
            />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Egyedi ikon</Caption1>
          </div>
        </div>
      </div>

      {/* Forma */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Forma: négyzet (Shape: square)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az avatar lehet kör vagy négyzet alakú.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Kovács János" shape="circular" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Circular (alapértelmezett)</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Nagy Eszter" shape="square" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Square</Caption1>
          </div>
        </div>
      </div>

      {/* Szín: brand */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Szín: brand</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az avatar használhatja a téma brand színét.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Kovács János" color="neutral" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Neutral (alapértelmezett)</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Nagy Eszter" color="brand" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Brand</Caption1>
          </div>
        </div>
      </div>

      {/* Szín: színes */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Szín: színes (Color: colorful)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az avatar automatikusan választhat színt a név alapján.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Alice" color="colorful" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Alice</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Bob" color="colorful" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Bob</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Charlie" color="colorful" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Charlie</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Diana" color="colorful" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Diana</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Edward" color="colorful" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Edward</Caption1>
          </div>
        </div>
      </div>

      {/* Szín: nevesített */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Szín: nevesített (Color: named color)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az avatar használhat konkrét nevesített színt a téma színpalettájából.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="dark-red" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>dark-red</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="cranberry" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>cranberry</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="red" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>red</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="pumpkin" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>pumpkin</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="peach" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>peach</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="marigold" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>marigold</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="gold" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>gold</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="brass" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>brass</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="brown" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>brown</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="forest" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>forest</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="seafoam" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>seafoam</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="dark-green" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>dark-green</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="light-teal" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>light-teal</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="teal" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>teal</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="steel" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>steel</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="blue" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>blue</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="royal-blue" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>royal-blue</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="cornflower" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>cornflower</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="navy" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>navy</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="lavender" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>lavender</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="purple" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>purple</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="grape" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>grape</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="lilac" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>lilac</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="pink" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>pink</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="magenta" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>magenta</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="plum" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>plum</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="beige" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>beige</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="mink" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>mink</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="platinum" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>platinum</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" color="anchor" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>anchor</Caption1>
          </div>
        </div>
      </div>

      {/* Aktív */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Aktív (Active)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az avatar jelezheti, hogy a felhasználó aktív (pl. beszél vagy ír).
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Kovács János" active="active" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Active</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Nagy Eszter" active="inactive" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Inactive</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Szabó Péter" active="unset" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Unset (alapértelmezett)</Caption1>
          </div>
        </div>
      </div>

      {/* Aktív megjelenés */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Aktív megjelenés (Active Appearance)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az avatarnak különböző megjelenése lehet, amikor aktív.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Kovács János" active="active" activeAppearance="ring" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Ring (alapértelmezett)</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Nagy Eszter" active="active" activeAppearance="shadow" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Shadow</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Szabó Péter" active="active" activeAppearance="ring-shadow" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Ring-shadow</Caption1>
          </div>
        </div>
      </div>

      {/* Egyedi kezdőbetűk */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Egyedi kezdőbetűk (Custom Initials)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az avatar egyedi kezdőbetűket jeleníthet meg az initials prop beállításával.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Kovács János" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Automatikus (KJ)</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar initials="AB" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Egyedi (AB)</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar initials="XYZ" />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Három betű (XYZ)</Caption1>
          </div>
        </div>
      </div>

      {/* Méret */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méret (Size)</Title2>
        </div>
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Az avatar különböző méreteket támogat 16-tól 128-ig. Az alapértelmezett 32.
            Kerülje a 16 és 20-as méretek használatát interaktív avatároknál.
          </Caption1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={16} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>16</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={20} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>20</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={24} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>24</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={28} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>28</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={32} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>32 (alapértelmezett)</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={36} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>36</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={40} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>40</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={48} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>48</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={56} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>56</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={64} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>64</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={72} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>72</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={96} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>96</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={120} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>120</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="KJ" size={128} />
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>128</Caption1>
          </div>
        </div>
      </div>
    </div>
  );
}
