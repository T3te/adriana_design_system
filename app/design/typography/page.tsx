'use client';

import { 
  Title1, 
  Title2,
  Title3,
  Subtitle1,
  Subtitle2,
  Body1,
  Body1Strong,
  Body2,
  Caption1,
  Caption2,
  tokens,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHeaderCell,
} from '@fluentui/react-components';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';
import TableContainer from '@/components/TableContainer';

export default function TypographyPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Tipográfia</Title1>
      </div>

      <div className="mb-8">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <div>
            <CodeComment>// Import komponens</CodeComment>
            <div className="pl-4">import &#123; Title1 &#125; from '@fluentui/react-components';</div>
            <div className="pl-4">&lt;Title1&gt;Címsor szöveg&lt;/Title1&gt;</div>
          </div>
          
          <div className="mt-4">
            <CodeComment>// Import token</CodeComment>
            <div className="pl-4">import &#123; tokens &#125; from '@fluentui/react-components';</div>
            <div className="pl-4">&lt;div style=&#123;&#123; fontSize: tokens.fontSizeBase400 &#125;&#125;&gt;</div>
          </div>
        </CodeBlock>
      </div>

      {/* Typography Components */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Tipográfia komponensek</Title2>
        </div>
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Komponens</TableHeaderCell>
                <TableHeaderCell>Méret / Sormagasság / Súly</TableHeaderCell>
                <TableHeaderCell>Vizuális példa</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><div className="font-mono text-sm">Title1</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>28px / 36px / 600</Caption1></TableCell>
                <TableCell><Title1>Példa szöveg</Title1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">Title2</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>24px / 32px / 600</Caption1></TableCell>
                <TableCell><Title2>Példa szöveg</Title2></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">Title3</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>20px / 28px / 600</Caption1></TableCell>
                <TableCell><Title3>Példa szöveg</Title3></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">Subtitle1</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>20px / 28px / 600</Caption1></TableCell>
                <TableCell><Subtitle1>Példa szöveg</Subtitle1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">Subtitle2</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>16px / 22px / 600</Caption1></TableCell>
                <TableCell><Subtitle2>Példa szöveg</Subtitle2></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">Body1</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>14px / 20px / 400</Caption1></TableCell>
                <TableCell><Body1>Példa szöveg</Body1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">Body1Strong</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>14px / 20px / 600</Caption1></TableCell>
                <TableCell><Body1Strong>Példa szöveg</Body1Strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">Body2</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>12px / 16px / 400</Caption1></TableCell>
                <TableCell><Body2>Példa szöveg</Body2></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">Caption1</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>12px / 16px / 400</Caption1></TableCell>
                <TableCell><Caption1>Példa szöveg</Caption1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">Caption2</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>10px / 14px / 400</Caption1></TableCell>
                <TableCell><Caption2>Példa szöveg</Caption2></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Font Sizes */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Font méretek</Title2>
        </div>
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Token név</TableHeaderCell>
                <TableHeaderCell>Érték</TableHeaderCell>
                <TableHeaderCell>Vizuális példa</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontSizeBase100</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>10px</Caption1></TableCell>
                <TableCell><div style={{ fontSize: tokens.fontSizeBase100 }}>Példa szöveg</div></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontSizeBase200</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>12px</Caption1></TableCell>
                <TableCell><div style={{ fontSize: tokens.fontSizeBase200 }}>Példa szöveg</div></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontSizeBase300</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>14px</Caption1></TableCell>
                <TableCell><div style={{ fontSize: tokens.fontSizeBase300 }}>Példa szöveg</div></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontSizeBase400</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>16px</Caption1></TableCell>
                <TableCell><div style={{ fontSize: tokens.fontSizeBase400 }}>Példa szöveg</div></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontSizeBase500</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>20px</Caption1></TableCell>
                <TableCell><div style={{ fontSize: tokens.fontSizeBase500 }}>Példa szöveg</div></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontSizeBase600</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>24px</Caption1></TableCell>
                <TableCell><div style={{ fontSize: tokens.fontSizeBase600 }}>Példa szöveg</div></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontSizeHero700</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>28px</Caption1></TableCell>
                <TableCell><div style={{ fontSize: tokens.fontSizeHero700 }}>Példa szöveg</div></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontSizeHero800</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>32px</Caption1></TableCell>
                <TableCell><div style={{ fontSize: tokens.fontSizeHero800 }}>Példa szöveg</div></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontSizeHero900</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>40px</Caption1></TableCell>
                <TableCell><div style={{ fontSize: tokens.fontSizeHero900 }}>Példa szöveg</div></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontSizeHero1000</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>68px</Caption1></TableCell>
                <TableCell><div style={{ fontSize: tokens.fontSizeHero1000 }}>Példa szöveg</div></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Font Weights */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Font súlyok</Title2>
        </div>
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Token név</TableHeaderCell>
                <TableHeaderCell>Érték</TableHeaderCell>
                <TableHeaderCell>Vizuális példa</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontWeightRegular</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>400</Caption1></TableCell>
                <TableCell><div style={{ fontWeight: tokens.fontWeightRegular }}>Példa szöveg</div></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontWeightMedium</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>500</Caption1></TableCell>
                <TableCell><div style={{ fontWeight: tokens.fontWeightMedium }}>Példa szöveg</div></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontWeightSemibold</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>600</Caption1></TableCell>
                <TableCell><div style={{ fontWeight: tokens.fontWeightSemibold }}>Példa szöveg</div></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontWeightBold</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>700</Caption1></TableCell>
                <TableCell><div style={{ fontWeight: tokens.fontWeightBold }}>Példa szöveg</div></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Line Heights */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Sormagasságok</Title2>
        </div>
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Token név</TableHeaderCell>
                <TableHeaderCell>Érték</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><div className="font-mono text-sm">lineHeightBase100</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>14px</Caption1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">lineHeightBase200</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>16px</Caption1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">lineHeightBase300</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>20px</Caption1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">lineHeightBase400</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>22px</Caption1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">lineHeightBase500</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>28px</Caption1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">lineHeightBase600</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>32px</Caption1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">lineHeightHero700</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>36px</Caption1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">lineHeightHero800</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>40px</Caption1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">lineHeightHero900</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>52px</Caption1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">lineHeightHero1000</div></TableCell>
                <TableCell><Caption1 style={{ color: tokens.colorNeutralForeground3 }}>92px</Caption1></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Font Families */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Font családok</Title2>
        </div>
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Token név</TableHeaderCell>
                <TableHeaderCell>Érték</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontFamilyBase</div></TableCell>
                <TableCell><Caption1 className="text-xs" style={{ color: tokens.colorNeutralForeground3 }}>-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif</Caption1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontFamilyMonospace</div></TableCell>
                <TableCell><Caption1 className="text-xs" style={{ color: tokens.colorNeutralForeground3 }}>Consolas, 'Courier New', Courier, monospace</Caption1></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><div className="font-mono text-sm">fontFamilyNumeric</div></TableCell>
                <TableCell><Caption1 className="text-xs" style={{ color: tokens.colorNeutralForeground3 }}>Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif</Caption1></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
