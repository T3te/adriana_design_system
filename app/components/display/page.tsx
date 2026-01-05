'use client';

import { 
  Title1, 
  Badge, 
  Avatar,
  Card,
  CardHeader,
  CardPreview,
  CardFooter,
  Body1,
  Caption1,
  Button,
  makeStyles,
  tokens 
} from '@fluentui/react-components';
import { PersonRegular, MailRegular, CalendarRegular } from '@fluentui/react-icons';
import DemoSection from '@/components/DemoSection';

const useStyles = makeStyles({
  title: {
    marginBottom: '32px',
  },
  badgeGroup: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  avatarGroup: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px',
  },
  card: {
    width: '100%',
  },
  cardPreview: {
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.colorNeutralBackground3,
  },
});

export default function DisplayPage() {
  const styles = useStyles();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Megjelenítő elemek</Title1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Információkat jelenítenek meg vizuálisan vonzó formában.
        </p>
      </div>

      <DemoSection title="Badge - Címkék (színek)">
        <div className={styles.badgeGroup}>
          <Badge appearance="filled" color="brand">Brand</Badge>
          <Badge appearance="filled" color="danger">Danger</Badge>
          <Badge appearance="filled" color="important">Important</Badge>
          <Badge appearance="filled" color="informative">Informative</Badge>
          <Badge appearance="filled" color="severe">Severe</Badge>
          <Badge appearance="filled" color="subtle">Subtle</Badge>
          <Badge appearance="filled" color="success">Success</Badge>
          <Badge appearance="filled" color="warning">Warning</Badge>
        </div>
      </DemoSection>

      <DemoSection title="Badge megjelenések">
        <div className={styles.badgeGroup}>
          <Badge appearance="filled">Filled</Badge>
          <Badge appearance="ghost">Ghost</Badge>
          <Badge appearance="outline">Outline</Badge>
          <Badge appearance="tint">Tint</Badge>
        </div>
      </DemoSection>

      <DemoSection title="Badge formák">
        <div className={styles.badgeGroup}>
          <Badge shape="rounded">Rounded</Badge>
          <Badge shape="circular">Circular</Badge>
          <Badge shape="square">Square</Badge>
        </div>
      </DemoSection>

      <DemoSection title="Badge méretek">
        <div className={styles.badgeGroup}>
          <Badge size="tiny">Tiny</Badge>
          <Badge size="extra-small">Extra Small</Badge>
          <Badge size="small">Small</Badge>
          <Badge size="medium">Medium</Badge>
          <Badge size="large">Large</Badge>
          <Badge size="extra-large">Extra Large</Badge>
        </div>
      </DemoSection>

      <DemoSection title="Badge ikonokkal">
        <div className={styles.badgeGroup}>
          <Badge icon={<MailRegular />}>Email</Badge>
          <Badge icon={<CalendarRegular />} appearance="filled" color="success">Esemény</Badge>
          <Badge icon={<PersonRegular />} appearance="outline">Profil</Badge>
        </div>
      </DemoSection>

      <DemoSection title="Avatar - Profilképek">
        <div className={styles.avatarGroup}>
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" />
          <Avatar name="Alice Johnson" />
          <Avatar name="Bob Wilson" />
        </div>
      </DemoSection>

      <DemoSection title="Avatar színek">
        <div className={styles.avatarGroup}>
          <Avatar name="Brand Color" color="brand" />
          <Avatar name="Neutral" color="neutral" />
          <Avatar name="Colorful 1" color="colorful" />
          <Avatar name="Dark Red" color="dark-red" />
          <Avatar name="Cranberry" color="cranberry" />
        </div>
      </DemoSection>

      <DemoSection title="Avatar méretek">
        <div className={styles.avatarGroup}>
          <Avatar name="Tiny" size={16} />
          <Avatar name="Small" size={24} />
          <Avatar name="Medium" size={32} />
          <Avatar name="Large" size={40} />
          <Avatar name="XLarge" size={56} />
          <Avatar name="Huge" size={72} />
        </div>
      </DemoSection>

      <DemoSection title="Avatar ikonokkal">
        <div className={styles.avatarGroup}>
          <Avatar icon={<PersonRegular />} />
          <Avatar icon={<MailRegular />} color="brand" />
          <Avatar icon={<CalendarRegular />} color="colorful" />
        </div>
      </DemoSection>

      <DemoSection title="Avatar képpel">
        <div className={styles.avatarGroup}>
          <Avatar 
            image={{ src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg' }}
            name="Katri Athokas"
          />
          <Avatar 
            image={{ src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ElliotWoodward.jpg' }}
            name="Elliot Woodward"
          />
        </div>
      </DemoSection>

      <DemoSection title="Avatar badge-dzsel">
        <div className={styles.avatarGroup}>
          <Avatar 
            name="Online" 
            badge={{ status: 'available' }}
          />
          <Avatar 
            name="Elfoglalt" 
            badge={{ status: 'busy' }}
          />
          <Avatar 
            name="Offline" 
            badge={{ status: 'offline' }}
          />
          <Avatar 
            name="Ne zavarj" 
            badge={{ status: 'do-not-disturb' }}
          />
        </div>
      </DemoSection>

      <DemoSection title="Card - Kártyák">
        <div className={styles.cardGrid}>
          <Card className={styles.card}>
            <CardHeader
              image={<Avatar name="John Doe" color="colorful" />}
              header={<Body1><b>Egyszerű kártya</b></Body1>}
              description={<Caption1>Kártya leírás szövege</Caption1>}
            />
            <div style={{ padding: '0 12px 12px' }}>
              Ez egy alapvető kártya komponens, amely címet, leírást és tartalmat tartalmaz.
            </div>
          </Card>

          <Card className={styles.card}>
            <div className={styles.cardPreview}>
              <Body1>Kártya előnézet</Body1>
            </div>
            <CardHeader
              header={<Body1><b>Kártya előnézettel</b></Body1>}
              description={<Caption1>Tartalmaz egy előnézeti részt</Caption1>}
            />
          </Card>

          <Card className={styles.card}>
            <CardHeader
              header={<Body1><b>Kártya lábléccel</b></Body1>}
              description={<Caption1>Akció gombokkal</Caption1>}
            />
            <div style={{ padding: '0 12px' }}>
              Ez a kártya láblécet tartalmaz akció gombokkal.
            </div>
            <CardFooter>
              <Button appearance="primary" size="small">Elfogad</Button>
              <Button size="small">Mégse</Button>
            </CardFooter>
          </Card>

          <Card className={styles.card}>
            <CardPreview>
              <div className={styles.cardPreview}>
                <CalendarRegular style={{ fontSize: '48px' }} />
              </div>
            </CardPreview>
            <CardHeader
              image={<Avatar icon={<CalendarRegular />} color="brand" />}
              header={<Body1><b>Teljes kártya</b></Body1>}
              description={<Caption1>Minden elemmel</Caption1>}
            />
            <div style={{ padding: '0 12px' }}>
              Kártya szöveges tartalommal és minden komponenssel.
            </div>
            <CardFooter>
              <Button appearance="primary" size="small">Megnyitás</Button>
            </CardFooter>
          </Card>
        </div>
      </DemoSection>
    </div>
  );
}
