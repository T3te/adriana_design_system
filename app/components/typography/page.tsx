'use client';

import { 
  Title1, 
  Title2, 
  Title3, 
  Subtitle1, 
  Subtitle2, 
  Body1,
  Body2,
  Caption1,
  Caption2,
  makeStyles,
  tokens 
} from '@fluentui/react-components';
import DemoSection from '@/components/DemoSection';

const useStyles = makeStyles({
  title: {
    marginBottom: '32px',
  },
  textGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  colorBox: {
    width: '120px',
    height: '120px',
    borderRadius: tokens.borderRadiusMedium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase300,
  },
  colorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '16px',
  },
  tokenBox: {
    padding: '12px',
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground2,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  tokenGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '12px',
  },
});

export default function TypographyPage() {
  const styles = useStyles();

  return (
    <div>
      <Title1 className={styles.title}>Tipográfia & Színek</Title1>

      <DemoSection title="Title - Címek">
        <div className={styles.textGroup}>
          <Title1>Title 1 - Legnagyobb cím (Hero)</Title1>
          <Title2>Title 2 - Nagy cím</Title2>
          <Title3>Title 3 - Közepes cím</Title3>
        </div>
      </DemoSection>

      <DemoSection title="Subtitle - Alcímek">
        <div className={styles.textGroup}>
          <Subtitle1>Subtitle 1 - Nagy alcím</Subtitle1>
          <Subtitle2>Subtitle 2 - Kis alcím</Subtitle2>
        </div>
      </DemoSection>

      <DemoSection title="Body - Törzsszöveg">
        <div className={styles.textGroup}>
          <Body1>
            Body 1 - Ez az alapértelmezett törzsszöveg. Hosszabb bekezdésekhez használható, 
            amely jó olvashatóságot biztosít nagyobb betűmérettel.
          </Body1>
          <Body2>
            Body 2 - Kisebb törzsszöveg. Alkalmas sűrűbb elrendezéshez vagy kevésbé hangsúlyos 
            tartalomhoz, ahol helytakarékosságra van szükség.
          </Body2>
        </div>
      </DemoSection>

      <DemoSection title="Caption - Segítő szöveg">
        <div className={styles.textGroup}>
          <Caption1>Caption 1 - Apró segítő szöveg vagy megjegyzés</Caption1>
          <Caption2>Caption 2 - Még kisebb szöveg extrém kis méretű információkhoz</Caption2>
        </div>
      </DemoSection>

      <DemoSection title="Szöveg súlyok (Font Weight)">
        <div className={styles.textGroup}>
          <Body1 style={{ fontWeight: tokens.fontWeightRegular }}>Regular (400) - Normál szöveg</Body1>
          <Body1 style={{ fontWeight: tokens.fontWeightMedium }}>Medium (500) - Közepes súly</Body1>
          <Body1 style={{ fontWeight: tokens.fontWeightSemibold }}>Semibold (600) - Félkövér</Body1>
          <Body1 style={{ fontWeight: tokens.fontWeightBold }}>Bold (700) - Kövér</Body1>
        </div>
      </DemoSection>

      <DemoSection title="Brand színek">
        <div className={styles.colorGrid}>
          <div 
            className={styles.colorBox} 
            style={{ 
              backgroundColor: tokens.colorBrandBackground,
              color: tokens.colorNeutralForegroundOnBrand
            }}
          >
            Brand
          </div>
          <div 
            className={styles.colorBox} 
            style={{ 
              backgroundColor: tokens.colorBrandBackgroundHover,
              color: tokens.colorNeutralForegroundOnBrand
            }}
          >
            Brand Hover
          </div>
          <div 
            className={styles.colorBox} 
            style={{ 
              backgroundColor: tokens.colorBrandBackgroundPressed,
              color: tokens.colorNeutralForegroundOnBrand
            }}
          >
            Brand Pressed
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Neutral színek (Háttér)">
        <div className={styles.colorGrid}>
          <div 
            className={styles.colorBox} 
            style={{ 
              backgroundColor: tokens.colorNeutralBackground1,
              border: `1px solid ${tokens.colorNeutralStroke1}`
            }}
          >
            BG 1
          </div>
          <div 
            className={styles.colorBox} 
            style={{ 
              backgroundColor: tokens.colorNeutralBackground2,
              border: `1px solid ${tokens.colorNeutralStroke1}`
            }}
          >
            BG 2
          </div>
          <div 
            className={styles.colorBox} 
            style={{ 
              backgroundColor: tokens.colorNeutralBackground3,
              border: `1px solid ${tokens.colorNeutralStroke1}`
            }}
          >
            BG 3
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Státusz színek">
        <div className={styles.colorGrid}>
          <div 
            className={styles.colorBox} 
            style={{ 
              backgroundColor: tokens.colorPaletteGreenBackground3,
              color: 'white'
            }}
          >
            Success
          </div>
          <div 
            className={styles.colorBox} 
            style={{ 
              backgroundColor: tokens.colorPaletteRedBackground3,
              color: 'white'
            }}
          >
            Error
          </div>
          <div 
            className={styles.colorBox} 
            style={{ 
              backgroundColor: tokens.colorPaletteYellowBackground3,
            }}
          >
            Warning
          </div>
          <div 
            className={styles.colorBox} 
            style={{ 
              backgroundColor: tokens.colorPaletteBlueForeground2,
              color: 'white'
            }}
          >
            Info
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Design Tokens - Példák">
        <div className={styles.tokenGrid}>
          <div className={styles.tokenBox}>
            <Caption1 style={{ display: 'block', marginBottom: '4px', color: tokens.colorNeutralForeground3 }}>
              borderRadius
            </Caption1>
            <Body2>Small: {tokens.borderRadiusSmall}</Body2>
            <Body2>Medium: {tokens.borderRadiusMedium}</Body2>
            <Body2>Large: {tokens.borderRadiusLarge}</Body2>
          </div>

          <div className={styles.tokenBox}>
            <Caption1 style={{ display: 'block', marginBottom: '4px', color: tokens.colorNeutralForeground3 }}>
              spacing
            </Caption1>
            <Body2>Small: {tokens.spacingHorizontalS}</Body2>
            <Body2>Medium: {tokens.spacingHorizontalM}</Body2>
            <Body2>Large: {tokens.spacingHorizontalL}</Body2>
          </div>

          <div className={styles.tokenBox}>
            <Caption1 style={{ display: 'block', marginBottom: '4px', color: tokens.colorNeutralForeground3 }}>
              fontSize
            </Caption1>
            <Body2>Base 200: {tokens.fontSizeBase200}</Body2>
            <Body2>Base 300: {tokens.fontSizeBase300}</Body2>
            <Body2>Base 400: {tokens.fontSizeBase400}</Body2>
          </div>

          <div className={styles.tokenBox}>
            <Caption1 style={{ display: 'block', marginBottom: '4px', color: tokens.colorNeutralForeground3 }}>
              lineHeight
            </Caption1>
            <Body2>Base 200: {tokens.lineHeightBase200}</Body2>
            <Body2>Base 300: {tokens.lineHeightBase300}</Body2>
            <Body2>Base 400: {tokens.lineHeightBase400}</Body2>
          </div>
        </div>
      </DemoSection>
    </div>
  );
}
