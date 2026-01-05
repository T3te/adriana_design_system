'use client';

import { Title3, tokens, makeStyles } from '@fluentui/react-components';
import { ReactNode } from 'react';

interface DemoSectionProps {
  title: string;
  children: ReactNode;
}

const useStyles = makeStyles({
  section: {
    marginBottom: '48px',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: '12px',
    boxShadow: tokens.shadow4,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    overflow: 'hidden',
    transition: 'all 0.2s ease',
    ':hover': {
      boxShadow: tokens.shadow8,
    },
  },
  header: {
    backgroundColor: tokens.colorNeutralBackground3,
    padding: '16px 24px',
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  content: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
});

export default function DemoSection({ title, children }: DemoSectionProps) {
  const styles = useStyles();
  
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Title3>{title}</Title3>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}
