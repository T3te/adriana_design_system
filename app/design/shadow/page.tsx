'use client';

import { 
  Title1, 
  Title2,
  Caption1,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHeaderCell,
  tokens,
} from '@fluentui/react-components';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';
import TableContainer from '@/components/TableContainer';

export default function ShadowPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Árnyékok</Title1>
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
            <div className="pl-4">&lt;div style=&#123;&#123; boxShadow: tokens.shadow4 &#125;&#125;&gt;</div>
          </div>
        </CodeBlock>
      </div>

      <div className="mb-12">
        <div className="mb-6">
          <Title2>Shadow tokenek</Title2>
        </div>
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Token név</TableHeaderCell>
                <TableHeaderCell>Leírás</TableHeaderCell>
                <TableHeaderCell>Vizuális példa</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">shadow2</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Extra finom árnyék</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8 rounded-md px-4" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
                    <div 
                      className="w-16 h-16 rounded-md"
                      style={{ boxShadow: tokens.shadow2 }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">shadow4</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Finom árnyék</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8 rounded-md px-4" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
                    <div 
                      className="w-16 h-16 rounded-md"
                      style={{ boxShadow: tokens.shadow4 }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">shadow8</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Közepes árnyék</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8 rounded-md px-4" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
                    <div 
                      className="w-16 h-16 rounded-md"
                      style={{ boxShadow: tokens.shadow8}}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">shadow16</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Nagy árnyék</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8 rounded-md px-4" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
                    <div 
                      className="w-16 h-16 rounded-md"
                      style={{ boxShadow: tokens.shadow16 }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">shadow28</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Extra nagy árnyék</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8 rounded-md px-4" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
                    <div 
                      className="w-16 h-16 rounded-md"
                      style={{ boxShadow: tokens.shadow28}}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">shadow64</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Legnagyobb árnyék</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8 rounded-md px-4" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
                    <div 
                      className="w-16 h-16 rounded-md"
                      style={{ boxShadow: tokens.shadow64 }}
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
          <Title2>Brand Shadow tokenek</Title2>
        </div>
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Token név</TableHeaderCell>
                <TableHeaderCell>Leírás</TableHeaderCell>
                <TableHeaderCell>Vizuális példa</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">shadow2Brand</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Brand extra finom árnyék</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8 rounded-md px-4" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
                    <div 
                      className="w-16 h-16 rounded-md"
                      style={{ boxShadow: tokens.shadow2Brand }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">shadow4Brand</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Brand finom árnyék</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8 rounded-md px-4" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
                    <div 
                      className="w-16 h-16 rounded-md"
                      style={{ boxShadow: tokens.shadow4Brand }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">shadow8Brand</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Brand közepes árnyék</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8 rounded-md px-4" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
                    <div 
                      className="w-16 h-16 rounded-md"
                      style={{ boxShadow: tokens.shadow8Brand }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">shadow16Brand</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Brand nagy árnyék</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8 rounded-md px-4" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
                    <div 
                      className="w-16 h-16 rounded-md"
                      style={{ boxShadow: tokens.shadow16Brand }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">shadow28Brand</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Brand extra nagy árnyék</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8 rounded-md px-4" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
                    <div 
                      className="w-16 h-16 rounded-md"
                      style={{ boxShadow: tokens.shadow28Brand }}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-mono text-sm">shadow64Brand</div>
                </TableCell>
                <TableCell>
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Brand legnagyobb árnyék</Caption1>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 py-8 rounded-md px-4" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
                    <div 
                      className="w-16 h-16 rounded-md"
                      style={{ boxShadow: tokens.shadow64Brand }}
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
