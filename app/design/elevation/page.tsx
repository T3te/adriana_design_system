'use client';

import { 
  Title1,
  Title3,
  Body1,
  Caption1,
  makeStyles,
  tokens,
  Card,
  CardHeader,
  Button,
  Badge,
} from '@fluentui/react-components';
import DemoSection from '@/components/DemoSection';

const useStyles = makeStyles({
  title: {
    marginBottom: '16px',
  },
  description: {
    marginBottom: '48px',
    color: tokens.colorNeutralForeground2,
    fontSize: '18px',
    lineHeight: '28px',
  },
  elevationExample: {
    padding: '24px',
    borderRadius: tokens.borderRadiusMedium,
    marginBottom: '16px',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  shadowBox: {
    padding: '20px',
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '32px',
    marginTop: '24px',
  },
  comingSoonBadge: {
    display: 'inline-block',
    marginLeft: '12px',
  },
});

export default function ElevationPage() {
  const styles = useStyles();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Title1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Eleváció (Árnyékok)</Title1>
          <Badge appearance="filled" color="informative">
            Hamarosan
          </Badge>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Az eleváció rendszer árnyékok használatával teremt vizuális hierarchiát és mélységet a felületen. 
          A Fluent UI következetes árnyékskálát biztosít a különböző szintű emeléséhez.
        </p>
      </div>

      <DemoSection title="Árnyék szintek">
        <Body1 style={{ marginBottom: '24px' }}>
          A Fluent UI különböző árnyékszinteket definiál az elemek emeléséhez:
        </Body1>
        <div className={styles.grid}>
          <div>
            <Caption1 style={{ marginBottom: '12px', display: 'block', fontWeight: tokens.fontWeightSemibold }}>
              Shadow 2 - Alapértelmezett
            </Caption1>
            <div 
              className={styles.shadowBox}
              style={{ boxShadow: tokens.shadow2 }}
            >
              <Body1>Alapértelmezett árnyék</Body1>
            </div>
            <Caption1 style={{ display: 'block', marginTop: '8px', color: tokens.colorNeutralForeground3 }}>
              Használat: Alapértelmezett kártyák, listák
            </Caption1>
          </div>

          <div>
            <Caption1 style={{ marginBottom: '12px', display: 'block', fontWeight: tokens.fontWeightSemibold }}>
              Shadow 4 - Emelt
            </Caption1>
            <div 
              className={styles.shadowBox}
              style={{ boxShadow: tokens.shadow4 }}
            >
              <Body1>Emelt árnyék</Body1>
            </div>
            <Caption1 style={{ display: 'block', marginTop: '8px', color: tokens.colorNeutralForeground3 }}>
              Használat: Hover állapot, kiemelt kártyák
            </Caption1>
          </div>

          <div>
            <Caption1 style={{ marginBottom: '12px', display: 'block', fontWeight: tokens.fontWeightSemibold }}>
              Shadow 8 - Lebegő
            </Caption1>
            <div 
              className={styles.shadowBox}
              style={{ boxShadow: tokens.shadow8 }}
            >
              <Body1>Lebegő árnyék</Body1>
            </div>
            <Caption1 style={{ display: 'block', marginTop: '8px', color: tokens.colorNeutralForeground3 }}>
              Használat: Dropdown menük, popovers
            </Caption1>
          </div>

          <div>
            <Caption1 style={{ marginBottom: '12px', display: 'block', fontWeight: tokens.fontWeightSemibold }}>
              Shadow 16 - Felülúszó
            </Caption1>
            <div 
              className={styles.shadowBox}
              style={{ boxShadow: tokens.shadow16 }}
            >
              <Body1>Felülúszó árnyék</Body1>
            </div>
            <Caption1 style={{ display: 'block', marginTop: '8px', color: tokens.colorNeutralForeground3 }}>
              Használat: Modális ablakok, dialógusok
            </Caption1>
          </div>

          <div>
            <Caption1 style={{ marginBottom: '12px', display: 'block', fontWeight: tokens.fontWeightSemibold }}>
              Shadow 28 - Overlay
            </Caption1>
            <div 
              className={styles.shadowBox}
              style={{ boxShadow: tokens.shadow28 }}
            >
              <Body1>Overlay árnyék</Body1>
            </div>
            <Caption1 style={{ display: 'block', marginTop: '8px', color: tokens.colorNeutralForeground3 }}>
              Használat: Teljes képernyős overlays
            </Caption1>
          </div>

          <div>
            <Caption1 style={{ marginBottom: '12px', display: 'block', fontWeight: tokens.fontWeightSemibold }}>
              Shadow 64 - Maximális
            </Caption1>
            <div 
              className={styles.shadowBox}
              style={{ boxShadow: tokens.shadow64 }}
            >
              <Body1>Maximális árnyék</Body1>
            </div>
            <Caption1 style={{ display: 'block', marginTop: '8px', color: tokens.colorNeutralForeground3 }}>
              Használat: Legmagasabb szintű elemek
            </Caption1>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Gyakorlati példák komponensekkel">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <Title3 style={{ marginBottom: '16px' }}>Kártya alapértelmezett állapotban</Title3>
            <Card 
              style={{ 
                maxWidth: '400px',
                boxShadow: tokens.shadow2,
              }}
            >
              <CardHeader
                header={<Body1 style={{ fontWeight: tokens.fontWeightSemibold }}>Kártya cím</Body1>}
                description={<Caption1>Shadow 2 árnyékkal</Caption1>}
              />
            </Card>
          </div>

          <div>
            <Title3 style={{ marginBottom: '16px' }}>Kártya hover állapotban</Title3>
            <Card 
              style={{ 
                maxWidth: '400px',
                boxShadow: tokens.shadow4,
              }}
            >
              <CardHeader
                header={<Body1 style={{ fontWeight: tokens.fontWeightSemibold }}>Emelt kártya</Body1>}
                description={<Caption1>Shadow 4 árnyékkal (hover effekt)</Caption1>}
              />
            </Card>
          </div>

          <div>
            <Title3 style={{ marginBottom: '16px' }}>Lebegő panel</Title3>
            <div 
              style={{ 
                maxWidth: '300px',
                padding: '16px',
                backgroundColor: tokens.colorNeutralBackground1,
                borderRadius: tokens.borderRadiusMedium,
                boxShadow: tokens.shadow16,
              }}
            >
              <Body1 style={{ marginBottom: '12px', fontWeight: tokens.fontWeightSemibold }}>
                Dropdown menü
              </Body1>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Button appearance="subtle">Menüpont 1</Button>
                <Button appearance="subtle">Menüpont 2</Button>
                <Button appearance="subtle">Menüpont 3</Button>
              </div>
            </div>
            <Caption1 style={{ display: 'block', marginTop: '8px', color: tokens.colorNeutralForeground3 }}>
              Shadow 16 árnyékkal
            </Caption1>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Z-index hierarchia">
        <Body1 style={{ marginBottom: '16px' }}>
          Az árnyékok mellett a z-index értékek is fontos szerepet játszanak a vizuális hierarchiában:
        </Body1>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>0-9:</strong> Alapértelmezett tartalom rétegek
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>10-99:</strong> Sticky elemek, fix header/footer
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>100-999:</strong> Dropdown menük, tooltips
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>1000-9999:</strong> Modal dialógusok, overlays
          </li>
          <li>
            <strong>10000+:</strong> Értesítések, toast üzenetek
          </li>
        </ul>
      </DemoSection>

      <DemoSection title="Tervezési irányelvek">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <Title3 style={{ marginBottom: '12px' }}>✓ Jó gyakorlat</Title3>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Használj kisebb árnyékot alapértelmezett elemekhez</li>
              <li>Növeld az árnyékot hover vagy aktív állapotban</li>
              <li>Használj nagyobb árnyékot modális ablakokhoz és overlays-hez</li>
              <li>Tartsd következetesen az árnyék szinteket hasonló komponenseknél</li>
              <li>Kombinálj árnyékokat z-index értékekkel a helyes hierarchiáért</li>
            </ul>
          </div>

          <div>
            <Title3 style={{ marginBottom: '12px' }}>✗ Kerülendő</Title3>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Ne használj túl sok különböző árnyékszintet egy oldalon</li>
              <li>Ne alkalmazz túl erős árnyékot kisebb elemekhez</li>
              <li>Kerüld az árnyékok halmozását egymásra</li>
              <li>Ne használj színes árnyékokat (csak szürke/fekete árnyalatok)</li>
            </ul>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Teljesítmény megfontolások">
        <Body1 style={{ marginBottom: '16px' }}>
          Az árnyékok használatakor figyelj a teljesítményre:
        </Body1>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>Animációk:</strong> Kerüld a box-shadow animálását, használd helyette transform
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Sok elem:</strong> Nagy listáknál fontold meg az árnyék nélküli megoldást
          </li>
          <li>
            <strong>Blur radius:</strong> Nagyobb blur értékek lassíthatják a renderelést
          </li>
        </ul>
      </DemoSection>

      <DemoSection title="Kisegítő lehetőségek">
        <Body1 style={{ marginBottom: '16px' }}>
          Az árnyékok önmagukban nem befolyásolják a kisegítő lehetőségeket, de:
        </Body1>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li style={{ marginBottom: '8px' }}>
            Ne hagyatkozz csak az árnyékokra a vizuális hierarchia jelzésére
          </li>
          <li style={{ marginBottom: '8px' }}>
            Használj megfelelő kontrasztot az árnyékolt elemek háttere és a szöveg között
          </li>
          <li>
            Kombinálj árnyékokat border vagy outline-nal a fókusz állapot jelzéséhez
          </li>
        </ul>
      </DemoSection>
    </div>
  );
}
