'use client';

import { Title1, MessageBar, MessageBarBody, MessageBarTitle, Spinner, ProgressBar, Label, makeStyles } from '@fluentui/react-components';
import DemoSection from '@/components/DemoSection';

const useStyles = makeStyles({
  title: {
    marginBottom: '32px',
  },
  messageGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  spinnerGroup: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  progressGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px',
  },
});

export default function MessagesPage() {
  const styles = useStyles();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Üzenetek és folyamatjelzők</Title1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Visszajelzést adnak a felhasználónak üzenetek és betöltési állapotok formájában.
        </p>
      </div>

      <DemoSection title="MessageBar - Üzenetsáv típusok">
        <div className={styles.messageGroup}>
          <MessageBar intent="success">
            <MessageBarBody>
              <MessageBarTitle>Sikeres művelet</MessageBarTitle>
              Az adatok sikeresen mentésre kerültek az adatbázisba.
            </MessageBarBody>
          </MessageBar>

          <MessageBar intent="error">
            <MessageBarBody>
              <MessageBarTitle>Hiba történt</MessageBarTitle>
              Nem sikerült kapcsolódni a szerverhez. Kérjük, próbáld újra később.
            </MessageBarBody>
          </MessageBar>

          <MessageBar intent="warning">
            <MessageBarBody>
              <MessageBarTitle>Figyelmeztetés</MessageBarTitle>
              Ez a művelet visszavonhatatlan. Biztosan folytatod?
            </MessageBarBody>
          </MessageBar>

          <MessageBar intent="info">
            <MessageBarBody>
              <MessageBarTitle>Információ</MessageBarTitle>
              Az új funkciók hamarosan elérhetők lesznek a platformon.
            </MessageBarBody>
          </MessageBar>
        </div>
      </DemoSection>

      <DemoSection title="MessageBar csak szöveggel">
        <div className={styles.messageGroup}>
          <MessageBar intent="success">
            <MessageBarBody>
              Egyszerű sikeres üzenet cím nélkül.
            </MessageBarBody>
          </MessageBar>

          <MessageBar intent="error">
            <MessageBarBody>
              Egyszerű hiba üzenet.
            </MessageBarBody>
          </MessageBar>
        </div>
      </DemoSection>

      <DemoSection title="Spinner - Betöltés jelző méretek">
        <div className={styles.spinnerGroup}>
          <Spinner size="tiny" label="Pici" />
          <Spinner size="extra-small" label="Extra kicsi" />
          <Spinner size="small" label="Kicsi" />
          <Spinner size="medium" label="Közepes" />
          <Spinner size="large" label="Nagy" />
          <Spinner size="extra-large" label="Extra nagy" />
          <Spinner size="huge" label="Hatalmas" />
        </div>
      </DemoSection>

      <DemoSection title="Spinner label pozíciók">
        <div className={styles.spinnerGroup}>
          <Spinner label="Alul" labelPosition="below" />
          <Spinner label="Felül" labelPosition="above" />
          <Spinner label="Előtte" labelPosition="before" />
          <Spinner label="Utána" labelPosition="after" />
        </div>
      </DemoSection>

      <DemoSection title="Spinner label nélkül">
        <div className={styles.spinnerGroup}>
          <Spinner size="small" />
          <Spinner size="medium" />
          <Spinner size="large" />
        </div>
      </DemoSection>

      <DemoSection title="ProgressBar - Folyamatjelző">
        <div className={styles.progressGroup}>
          <div>
            <Label>Meghatározott folyamat (30%)</Label>
            <ProgressBar value={0.3} />
          </div>

          <div>
            <Label>Fél útban (50%)</Label>
            <ProgressBar value={0.5} />
          </div>

          <div>
            <Label>Majdnem kész (85%)</Label>
            <ProgressBar value={0.85} />
          </div>

          <div>
            <Label>Teljes (100%)</Label>
            <ProgressBar value={1} />
          </div>

          <div>
            <Label>Határozatlan folyamat</Label>
            <ProgressBar />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="ProgressBar vastagság">
        <div className={styles.progressGroup}>
          <div>
            <Label>Vékony</Label>
            <ProgressBar value={0.6} thickness="medium" />
          </div>

          <div>
            <Label>Vastag</Label>
            <ProgressBar value={0.6} thickness="large" />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="ProgressBar színek">
        <div className={styles.progressGroup}>
          <div>
            <Label>Brand (alapértelmezett)</Label>
            <ProgressBar value={0.7} color="brand" />
          </div>

          <div>
            <Label>Sikeres (success)</Label>
            <ProgressBar value={0.7} color="success" />
          </div>

          <div>
            <Label>Hiba (error)</Label>
            <ProgressBar value={0.7} color="error" />
          </div>

          <div>
            <Label>Figyelmeztetés (warning)</Label>
            <ProgressBar value={0.7} color="warning" />
          </div>
        </div>
      </DemoSection>
    </div>
  );
}
