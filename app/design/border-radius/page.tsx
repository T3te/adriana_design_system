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

export default function BorderRadiusPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Sarokkerekítés</Title1>
      </div>

      <div className="mb-8">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <div>
            <CodeComment>{'// Import'}</CodeComment>
            <div className="pl-4">import &#123; tokens &#125; from &apos;@fluentui/react-components&apos;;</div>
          </div>
          <div className="mt-4">
            <CodeComment>{'// Használat'}</CodeComment>
            <div className="pl-4">&lt;div style=&#123;&#123; borderRadius: tokens.borderRadiusSmall &#125;&#125;&gt;</div>
          </div>
        </CodeBlock>
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
                <div className="font-mono text-sm">borderRadiusNone</div>
              </TableCell>
              <TableCell>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>0</Caption1>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-4 py-8">
                  <div 
                    className="w-16 h-16"
                    style={{ 
                      borderRadius: tokens.borderRadiusNone,
                      backgroundColor: tokens.colorBrandBackground
                    }}
                  />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="font-mono text-sm">borderRadiusSmall</div>
              </TableCell>
              <TableCell>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>2px</Caption1>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-4 py-8">
                  <div 
                    className="w-16 h-16"
                    style={{ 
                      borderRadius: tokens.borderRadiusSmall,
                      backgroundColor: tokens.colorBrandBackground
                    }}
                  />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="font-mono text-sm">borderRadiusMedium</div>
              </TableCell>
              <TableCell>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>4px</Caption1>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-4 py-8">
                  <div 
                    className="w-16 h-16"
                    style={{ 
                      borderRadius: tokens.borderRadiusMedium,
                      backgroundColor: tokens.colorBrandBackground
                    }}
                  />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="font-mono text-sm">borderRadiusLarge</div>
              </TableCell>
              <TableCell>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>6px</Caption1>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-4 py-8">
                  <div 
                    className="w-16 h-16"
                    style={{ 
                      borderRadius: tokens.borderRadiusLarge,
                      backgroundColor: tokens.colorBrandBackground
                    }}
                  />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="font-mono text-sm">borderRadiusXLarge</div>
              </TableCell>
              <TableCell>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>8px</Caption1>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-4 py-8">
                  <div 
                    className="w-16 h-16"
                    style={{ 
                      borderRadius: tokens.borderRadiusXLarge,
                      backgroundColor: tokens.colorBrandBackground
                    }}
                  />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="font-mono text-sm">borderRadiusCircular</div>
              </TableCell>
              <TableCell>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>10000px</Caption1>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-4 py-8">
                  <div 
                    className="w-16 h-16"
                    style={{ 
                      borderRadius: tokens.borderRadiusCircular,
                      backgroundColor: tokens.colorBrandBackground
                    }}
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
