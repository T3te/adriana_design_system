'use client';

import { Display, Title2, Body1, Card, CardHeader, Button, makeStyles, tokens } from '@fluentui/react-components';
import Link from 'next/link';

const useStyles = makeStyles({
  hero: {
    marginBottom: '80px',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: tokens.fontWeightBold,
    lineHeight: '56px',
    marginBottom: '8px',
    color: tokens.colorNeutralForeground1,
  },
  heroSubtitle: {
    fontSize: '28px',
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '24px',
    color: tokens.colorNeutralForeground1,
  },
  heroDescription: {
    fontSize: '18px',
    lineHeight: '28px',
    marginBottom: '32px',
    color: tokens.colorNeutralForeground2,
    maxWidth: '800px',
  },
  ctaButton: {
    fontSize: '16px',
    padding: '12px 24px',
    height: 'auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '32px',
    marginBottom: '60px',
  },
  card: {
    height: '100%',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    ':hover': {
      transform: 'translateY(-4px)',
      boxShadow: tokens.shadow16,
    },
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    height: '100%',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '8px',
  },
  cardDescription: {
    color: tokens.colorNeutralForeground3,
    lineHeight: '24px',
  },
});

const sections = [
  {
    title: 'Komponensek',
    description: 'A design system újrafelhasználható építőelemei.',
    href: '/components/buttons',
  },
  {
    title: 'Beviteli mezők',
    description: 'Input, TextField, SearchBox és egyéb beviteli komponensek.',
    href: '/components/inputs',
  },
  {
    title: 'Választók',
    description: 'Dropdown, Checkbox, Radio, Switch és Slider komponensek.',
    href: '/components/selection',
  },
  {
    title: 'Üzenetek',
    description: 'MessageBar, Spinner és ProgressBar komponensek.',
    href: '/components/messages',
  },
  {
    title: 'Megjelenítés',
    description: 'Badge, Avatar, Card és egyéb megjelenítő komponensek.',
    href: '/components/display',
  },
  {
    title: 'Tipográfia',
    description: 'A design system stílusát és megjelenését meghatározó vizuális elemek.',
    href: '/components/typography',
  },
];

export default function Home() {
  const styles = useStyles();

  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heroTitle}>Fluent UI</div>
        <div className={styles.heroSubtitle}>Design System</div>
        <p className={styles.heroDescription}>
          Tervezz, építs és szállíts felhasználóközpontú és inkluzív digitális élményeket 
          a Fluent UI Design System segítségével!
        </p>
        <Link href="/components/buttons">
          <Button appearance="primary" size="large" className={styles.ctaButton}>
            Kezdj itt!
          </Button>
        </Link>
      </div>

      <div className={styles.grid}>
        {sections.map((section) => (
          <Link key={section.href} href={section.href} className={styles.cardLink}>
            <Card className={styles.card}>
              <CardHeader
                header={
                  <div className={styles.cardTitle}>{section.title}</div>
                }
                description={
                  <div className={styles.cardDescription}>{section.description}</div>
                }
              />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
