'use client';

import { 
  Title1,
  Title2,
  Caption1,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  SplitButton,
  tokens,
} from '@fluentui/react-components';
import type { MenuButtonProps } from '@fluentui/react-components';
import {
  CalendarMonthRegular,
  FilterRegular,
} from '@fluentui/react-icons';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

export default function SplitButtonPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>SplitButton - Osztott Gomb</Title1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>// Import</CodeComment>
          {`import {
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  SplitButton,
} from '@fluentui/react-components';
import type { MenuButtonProps } from '@fluentui/react-components';

`}
          <CodeComment>// Használat</CodeComment>
          {`<Menu positioning="below-end">
  <MenuTrigger disableButtonEnhancement>
    {(triggerProps: MenuButtonProps) => (
      <SplitButton
        menuButton={triggerProps}
        primaryActionButton={{
          onClick: () => alert('Elsődleges művelet'),
        }}
      >
        Példa
      </SplitButton>
    )}
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
        <Menu positioning="below-end">
          <MenuTrigger disableButtonEnhancement>
            {(triggerProps: MenuButtonProps) => (
              <SplitButton
                menuButton={triggerProps}
                primaryActionButton={{
                  onClick: () => alert('Elsődleges művelet'),
                }}
              >
                Példa
              </SplitButton>
            )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Lekerekített') }}
                    shape="rounded"
                  >
                    Lekerekített
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Kör') }}
                    shape="circular"
                  >
                    Kör
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Négyzet') }}
                    shape="square"
                  >
                    Négyzet
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Secondary') }}
                    appearance="secondary"
                  >
                    Alapértelmezett
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Primary') }}
                    appearance="primary"
                  >
                    Elsődleges
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Outline') }}
                    appearance="outline"
                  >
                    Körvonalas
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Subtle') }}
                    appearance="subtle"
                  >
                    Finom
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Transparent') }}
                    appearance="transparent"
                  >
                    Átlátszó
                  </SplitButton>
                )}
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
          <Menu positioning="below-end">
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps: MenuButtonProps) => (
                <SplitButton
                  menuButton={triggerProps}
                  primaryActionButton={{ onClick: () => alert('Naptár') }}
                  icon={<CalendarMonthRegular />}
                  iconPosition="before"
                >
                  Naptár ikon elől
                </SplitButton>
              )}
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Elem 1</MenuItem>
                <MenuItem>Elem 2</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
          <Menu positioning="below-end">
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps: MenuButtonProps) => (
                <SplitButton
                  menuButton={triggerProps}
                  primaryActionButton={{ onClick: () => alert('Naptár') }}
                  icon={<CalendarMonthRegular />}
                  iconPosition="after"
                >
                  Naptár ikon hátul
                </SplitButton>
              )}
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Elem 1</MenuItem>
                <MenuItem>Elem 2</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
          <Menu positioning="below-end">
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps: MenuButtonProps) => (
                <SplitButton
                  menuButton={triggerProps}
                  primaryActionButton={{ onClick: () => alert('Ikonok') }}
                  icon={<CalendarMonthRegular />}
                  menuIcon={<FilterRegular />}
                >
                  Naptár ikon és egyedi menü ikon
                </SplitButton>
              )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Kicsi') }}
                    size="small"
                  >
                    Kicsi
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Kicsi ikonnal') }}
                    size="small"
                    icon={<CalendarMonthRegular />}
                  >
                    Kicsi ikonnal
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Közepes') }}
                    size="medium"
                  >
                    Közepes
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Közepes ikonnal') }}
                    size="medium"
                    icon={<CalendarMonthRegular />}
                  >
                    Közepes ikonnal
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Nagy') }}
                    size="large"
                  >
                    Nagy
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Nagy ikonnal') }}
                    size="large"
                    icon={<CalendarMonthRegular />}
                  >
                    Nagy ikonnal
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Engedélyezett') }}
                  >
                    Engedélyezett
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Letiltott') }}
                    disabled
                  >
                    Letiltott
                  </SplitButton>
                )}
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
            <Menu positioning="below-end">
              <MenuTrigger disableButtonEnhancement>
                {(triggerProps: MenuButtonProps) => (
                  <SplitButton
                    menuButton={triggerProps}
                    primaryActionButton={{ onClick: () => alert('Fókuszálható') }}
                    disabledFocusable
                  >
                    Letiltott fókuszálható
                  </SplitButton>
                )}
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
          <Menu positioning="below-end">
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps: MenuButtonProps) => (
                <SplitButton
                  menuButton={triggerProps}
                  primaryActionButton={{ onClick: () => alert('Rövid szöveg') }}
                >
                  Rövid szöveg
                </SplitButton>
              )}
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Elem 1</MenuItem>
                <MenuItem>Elem 2</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
          <Menu positioning="below-end">
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps: MenuButtonProps) => (
                <SplitButton
                  menuButton={triggerProps}
                  primaryActionButton={{ onClick: () => alert('Hosszú szöveg') }}
                >
                  Hosszú szöveg, amely több sorban fog tördelődni, ha eléri a komponens maximális szélességét
                </SplitButton>
              )}
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
