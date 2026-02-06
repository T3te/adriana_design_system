'use client';

import { 
  Title1,
  Title2,
  Caption1,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  tokens,
} from '@fluentui/react-components';
import {
  CalendarMonthRegular,
  FilterRegular,
} from '@fluentui/react-icons';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

export default function MenuButtonPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>MenuButton - Menü Gomb</Title1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>{'// Import'}</CodeComment>
          {`import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from '@fluentui/react-components';

`}
          <CodeComment>{'// Használat'}</CodeComment>
          {`<Menu>
  <MenuTrigger disableButtonEnhancement>
    <MenuButton>Példa</MenuButton>
  </MenuTrigger>
  <MenuPopover>
    <MenuList>
      <MenuItem>Elem 1</MenuItem>
      <MenuItem>Elem 2</MenuItem>
    </MenuList>
  </MenuPopover>
</Menu>`}
        </CodeBlock>
      </div>

      {/* Default */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuButton>Példa</MenuButton>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem>Elem 1</MenuItem>
              <MenuItem>Elem 2</MenuItem>
              <MenuItem>Elem 3</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>

      {/* Shape */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Forma (Shape)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton shape="rounded">Lekerekített</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Rounded</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton shape="circular">Kör</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Circular</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton shape="square">Négyzet</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Square</Caption1>
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Megjelenés (Appearance)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton appearance="secondary">Alapértelmezett</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Default</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton appearance="primary">Elsődleges</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Primary</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton appearance="outline">Körvonalas</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Outline</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton appearance="subtle">Finom</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Subtle</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton appearance="transparent">Átlátszó</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Transparent</Caption1>
          </div>
        </div>
      </div>

      {/* Icon */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Ikon</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuButton icon={<CalendarMonthRegular />}>
                Naptár ikonnal
              </MenuButton>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Elem 1</MenuItem>
                <MenuItem>Elem 2</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuButton 
                icon={<CalendarMonthRegular />} 
                menuIcon={<FilterRegular />}
              >
                Naptár ikon és egyedi menü ikon
              </MenuButton>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Elem 1</MenuItem>
                <MenuItem>Elem 2</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
      </div>

      {/* Size */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méret (Size)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton size="small">Kicsi</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Small</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton size="small" icon={<CalendarMonthRegular />}>
                  Kicsi ikonnal
                </MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Small with icon</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton size="medium">Közepes</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Medium</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton size="medium" icon={<CalendarMonthRegular />}>
                  Közepes ikonnal
                </MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Medium with icon</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton size="large">Nagy</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Large</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton size="large" icon={<CalendarMonthRegular />}>
                  Nagy ikonnal
                </MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Large with icon</Caption1>
          </div>
        </div>
      </div>

      {/* Disabled */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Letiltott (Disabled)</Title2>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton>Engedélyezett</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Enabled</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton disabled>Letiltott</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Disabled</Caption1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton disabledFocusable>Letiltott fókuszálható</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Elem 1</MenuItem>
                  <MenuItem>Elem 2</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Disabled focusable</Caption1>
          </div>
        </div>
      </div>

      {/* Long Text */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Hosszú szöveggel</Title2>
        </div>
        <div style={{ maxWidth: '300px' }} className="flex flex-col gap-4">
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuButton>Rövid szöveg</MenuButton>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Elem 1</MenuItem>
                <MenuItem>Elem 2</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuButton>
                Hosszú szöveg, amely több sorban fog tördelődni, ha eléri a komponens maximális szélességét
              </MenuButton>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Elem 1</MenuItem>
                <MenuItem>Elem 2</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
      </div>
    </div>
  );
}
