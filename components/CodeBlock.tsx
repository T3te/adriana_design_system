'use client';

import { tokens } from '@fluentui/react-components';
import { ReactNode } from 'react';

interface CodeBlockProps {
  children: ReactNode;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  return (
    <div style={{ 
      backgroundColor: tokens.colorNeutralBackground3, 
      padding: '16px', 
      borderRadius: '8px', 
      fontFamily: 'monospace', 
      fontSize: '14px',
      color: tokens.colorNeutralForeground1,
      whiteSpace: 'pre-wrap',
      overflowX: 'auto'
    }}>
      {children}
    </div>
  );
}

export function CodeComment({ children }: { children: ReactNode }) {
  return <div style={{ color: tokens.colorNeutralForeground3 }}>{children}</div>;
}
