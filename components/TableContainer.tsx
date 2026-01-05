'use client';

import { tokens } from '@fluentui/react-components';
import { ReactNode } from 'react';

interface TableContainerProps {
  children: ReactNode;
}

export default function TableContainer({ children }: TableContainerProps) {
  return (
    <div style={{ 
      backgroundColor: tokens.colorNeutralBackground2, 
      borderRadius: '8px', 
      boxShadow: tokens.shadow4, 
      overflow: 'hidden' 
    }}>
      {children}
    </div>
  );
}
