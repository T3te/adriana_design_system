'use client';

import { 
  Title1,
  Title2, 
  Caption1, 
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

export default function SpacingPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Térközök</Title1>
      </div>

      <div className="mb-8">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <div>
            <CodeComment>// Import</CodeComment>
            <div className="pl-4">import &#123; tokens &#125; from '@fluentui/react-components';</div>
          </div>
          <div className="mt-4">
            <CodeComment>// Használat</CodeComment>
            <div className="pl-4">&lt;div style=&#123;&#123; padding: tokens.spacingVerticalM &#125;&#125;&gt;</div>
          </div>
        </CodeBlock>
      </div>

      <div className="mb-12">
        <div className="mb-6">
          <Title2>Vertical</Title2>
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
                <TableCell>
                  <div className="font-mono text-sm">spacingVerticalNone</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>0</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="w-16 rounded-sm"
                      style={{ height: tokens.spacingVerticalNone, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingVerticalXXS</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>2px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="w-16 rounded-sm"
                      style={{ height: tokens.spacingVerticalXXS, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingVerticalXS</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>4px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="w-16 rounded-sm"
                      style={{ height: tokens.spacingVerticalXS, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingVerticalSNudge</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>6px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="w-16 rounded-sm"
                      style={{ height: tokens.spacingVerticalSNudge, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingVerticalS</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>8px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="w-16 rounded-sm"
                      style={{ height: tokens.spacingVerticalS, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingVerticalMNudge</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>10px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="w-16 rounded-sm"
                      style={{ height: tokens.spacingVerticalMNudge, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingVerticalM</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>12px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="w-16 rounded-sm"
                      style={{ height: tokens.spacingVerticalM, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingVerticalL</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>16px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="w-16 rounded-sm"
                      style={{ height: tokens.spacingVerticalL, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingVerticalXL</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>20px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="w-16 rounded-sm"
                      style={{ height: tokens.spacingVerticalXL, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingVerticalXXL</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>24px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="w-16 rounded-sm"
                      style={{ height: tokens.spacingVerticalXXL, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingVerticalXXXL</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>32px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="w-16 rounded-sm"
                      style={{ height: tokens.spacingVerticalXXXL, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="mb-12">
        <div className="mb-6">
          <Title2>Horizontal</Title2>
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
                <TableCell>
                  <div className="font-mono text-sm">spacingHorizontalNone</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>0</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="h-16 rounded-sm"
                      style={{ width: tokens.spacingHorizontalNone, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingHorizontalXXS</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>2px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="h-16 rounded-sm"
                      style={{ width: tokens.spacingHorizontalXXS, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingHorizontalXS</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>4px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="h-16 rounded-sm"
                      style={{ width: tokens.spacingHorizontalXS, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingHorizontalSNudge</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>6px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="h-16 rounded-sm"
                      style={{ width: tokens.spacingHorizontalSNudge, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingHorizontalS</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>8px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="h-16 rounded-sm"
                      style={{ width: tokens.spacingHorizontalS, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingHorizontalMNudge</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>10px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="h-16 rounded-sm"
                      style={{ width: tokens.spacingHorizontalMNudge, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingHorizontalM</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>12px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="h-16 rounded-sm"
                      style={{ width: tokens.spacingHorizontalM, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingHorizontalL</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>16px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="h-16 rounded-sm"
                      style={{ width: tokens.spacingHorizontalL, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingHorizontalXL</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>20px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="h-16 rounded-sm"
                      style={{ width: tokens.spacingHorizontalXL, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingHorizontalXXL</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>24px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="h-16 rounded-sm"
                      style={{ width: tokens.spacingHorizontalXXL, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">spacingHorizontalXXXL</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>32px</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8">
                    <div 
                      className="h-16 rounded-sm"
                      style={{ width: tokens.spacingHorizontalXXXL, backgroundColor: tokens.colorBrandBackground }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
