'use client';

import { 
  Title1,
  Title2,
  Caption1,
  Button,
  Image,
  makeStyles,
  tokens,
  typographyStyles,
} from '@fluentui/react-components';
import {
  Carousel,
  CarouselCard,
  CarouselNav,
  CarouselNavButton,
  CarouselNavContainer,
  CarouselViewport,
  CarouselSlider,
  CarouselAnnouncerFunction,
} from '@fluentui/react-components';
import * as React from 'react';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

const useClasses = makeStyles({
  bannerCard: {
    alignContent: "center",
    height: "450px",
    textAlign: "left",
    position: "relative",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    position: "absolute",
    left: "10%",
    top: "25%",
    background: tokens.colorNeutralBackground1,
    padding: "18px",
    maxWidth: "270px",
    width: "50%",
  },
  title: {
    ...typographyStyles.title1,
  },
  subtext: {
    ...typographyStyles.body1,
  },
  smallCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "200px",
    backgroundColor: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusMedium,
  },
});

const IMAGES = [
  "https://fabricweb.azureedge.net/fabric-website/assets/images/swatch-picker/sea-full-img.jpg",
  "https://fabricweb.azureedge.net/fabric-website/assets/images/swatch-picker/bridge-full-img.jpg",
  "https://fabricweb.azureedge.net/fabric-website/assets/images/swatch-picker/park-full-img.jpg",
];

const BannerCard: React.FC<{
  children: React.ReactNode;
  imageSrc: string;
  index: number;
  total: number;
}> = (props) => {
  const { children, imageSrc, index, total } = props;
  const classes = useClasses();

  return (
    <CarouselCard
      className={classes.bannerCard}
      aria-label={`${index + 1} of ${total}`}
      id={`card-${index}`}
    >
      <Image fit="cover" src={imageSrc} alt="" />

      <div className={classes.cardContainer}>
        <div className={classes.title}>{children}</div>
        <div className={classes.subtext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div>
          <Button size="small" shape="square" appearance="primary">
            Művelet
          </Button>
        </div>
      </div>
    </CarouselCard>
  );
};

const getAnnouncement: CarouselAnnouncerFunction = (
  index: number,
  totalSlides: number
) => {
  return `Carousel slide ${index + 1} of ${totalSlides}`;
};

export default function CarouselPage() {
  const classes = useClasses();
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Carousel - Körhinta</Title1>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          A Carousel egy csúszó ablak elemekből, amelyet előző, következő és
          közvetlen lapozási gombok vezérelnek. Lehetővé teszi bannerek vagy
          kártyák megjelenítését minimális képernyőterület használatával.
        </Caption1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>{'// Import'}</CodeComment>
          {`import {
  Carousel,
  CarouselCard,
  CarouselNav,
  CarouselNavButton,
  CarouselNavContainer,
  CarouselViewport,
  CarouselSlider,
} from '@fluentui/react-components';

`}
          <CodeComment>{'// Használat'}</CodeComment>
          {`<Carousel groupSize={1} circular>
  <CarouselViewport>
    <CarouselSlider>
      <CarouselCard>Tartalom 1</CarouselCard>
      <CarouselCard>Tartalom 2</CarouselCard>
      <CarouselCard>Tartalom 3</CarouselCard>
    </CarouselSlider>
  </CarouselViewport>
  <CarouselNavContainer>
    <CarouselNav>
      {(index) => <CarouselNavButton />}
    </CarouselNav>
  </CarouselNavContainer>
</Carousel>`}
        </CodeBlock>
      </div>

      {/* Alapértelmezett */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Teljes szélességű banner kártyák navigációs gombokkal.
        </Caption1>
        <Carousel groupSize={1} circular announcement={getAnnouncement}>
          <CarouselViewport>
            <CarouselSlider>
              {IMAGES.map((imageSrc, index) => (
                <BannerCard
                  key={`image-${index}`}
                  imageSrc={imageSrc}
                  index={index}
                  total={IMAGES.length}
                >
                  Kártya {index + 1}
                </BannerCard>
              ))}
            </CarouselSlider>
          </CarouselViewport>
          <CarouselNavContainer
            layout="inline"
            autoplayTooltip={{ content: "Automatikus lejátszás", relationship: "label" }}
            nextTooltip={{ content: "Következő", relationship: "label" }}
            prevTooltip={{ content: "Előző", relationship: "label" }}
          >
            <CarouselNav>
              {(index) => (
                <CarouselNavButton aria-label={`Carousel ${index + 1}. gomb`} />
              )}
            </CarouselNav>
          </CarouselNavContainer>
        </Carousel>
      </div>

      {/* Appearance */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Megjelenés (Appearance)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A Carousel lehet flat (lapos) vagy elevated (emelt) megjelenésű.
        </Caption1>
        
        <div className="mb-6">
          <Caption1 style={{ color: tokens.colorNeutralForeground2 }} className="mb-2 block">
            <strong>Flat (Alapértelmezett)</strong>
          </Caption1>
          <Carousel groupSize={1} appearance="flat">
            <CarouselViewport>
              <CarouselSlider>
                {[1, 2, 3].map((num) => (
                  <CarouselCard key={num} className={classes.smallCard}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                      Kártya {num}
                    </div>
                  </CarouselCard>
                ))}
              </CarouselSlider>
            </CarouselViewport>
            <CarouselNavContainer>
              <CarouselNav>
                {(index) => <CarouselNavButton aria-label={`Slide ${index + 1}`} />}
              </CarouselNav>
            </CarouselNavContainer>
          </Carousel>
        </div>

        <div>
          <Caption1 style={{ color: tokens.colorNeutralForeground2 }} className="mb-2 block">
            <strong>Elevated</strong>
          </Caption1>
          <Carousel groupSize={1} appearance="elevated">
            <CarouselViewport>
              <CarouselSlider>
                {[1, 2, 3].map((num) => (
                  <CarouselCard key={num} className={classes.smallCard}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                      Kártya {num}
                    </div>
                  </CarouselCard>
                ))}
              </CarouselSlider>
            </CarouselViewport>
            <CarouselNavContainer>
              <CarouselNav>
                {(index) => <CarouselNavButton aria-label={`Slide ${index + 1}`} />}
              </CarouselNav>
            </CarouselNavContainer>
          </Carousel>
        </div>
      </div>

      {/* Controlled */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Vezérelt (Controlled)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A Carousel vezérelhető az activeIndex és onActiveIndexChange prop-ok
          beállításával. Aktuális slide: {activeIndex + 1}
        </Caption1>
        <Carousel
          groupSize={1}
          activeIndex={activeIndex}
          onActiveIndexChange={(_e, data) => setActiveIndex(data.index)}
        >
          <CarouselViewport>
            <CarouselSlider>
              {[1, 2, 3, 4].map((num) => (
                <CarouselCard key={num} className={classes.smallCard}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    Kártya {num}
                  </div>
                </CarouselCard>
              ))}
            </CarouselSlider>
          </CarouselViewport>
          <CarouselNavContainer>
            <CarouselNav>
              {(index) => <CarouselNavButton aria-label={`Slide ${index + 1}`} />}
            </CarouselNav>
          </CarouselNavContainer>
        </Carousel>
        <div className="mt-4 flex gap-2">
          <Button
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
          >
            Előző
          </Button>
          <Button
            onClick={() => setActiveIndex(Math.min(3, activeIndex + 1))}
            disabled={activeIndex === 3}
          >
            Következő
          </Button>
          <Button onClick={() => setActiveIndex(0)}>Első</Button>
        </div>
      </div>

      {/* Circular */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Körkörös (Circular)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A circular prop lehetővé teszi, hogy a carousel visszaugorjon az
          elejére az utolsó elem után.
        </Caption1>
        <Carousel groupSize={1} circular>
          <CarouselViewport>
            <CarouselSlider>
              {[1, 2, 3].map((num) => (
                <CarouselCard key={num} className={classes.smallCard}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    Kártya {num}
                  </div>
                </CarouselCard>
              ))}
            </CarouselSlider>
          </CarouselViewport>
          <CarouselNavContainer>
            <CarouselNav>
              {(index) => <CarouselNavButton aria-label={`Slide ${index + 1}`} />}
            </CarouselNav>
          </CarouselNavContainer>
        </Carousel>
      </div>

      {/* Multiple Cards */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Több kártya egyszerre</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Több kártya megjelenítése egyidejűleg a nézetablakban.
        </Caption1>
        <Carousel>
          <CarouselViewport>
            <CarouselSlider>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <CarouselCard
                  key={num}
                  style={{
                    minWidth: '250px',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: tokens.colorNeutralBackground3,
                    borderRadius: tokens.borderRadiusMedium,
                  }}
                >
                  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    Kártya {num}
                  </div>
                </CarouselCard>
              ))}
            </CarouselSlider>
          </CarouselViewport>
          <CarouselNavContainer>
            <CarouselNav>
              {(index) => <CarouselNavButton aria-label={`Slide ${index + 1}`} />}
            </CarouselNav>
          </CarouselNavContainer>
        </Carousel>
      </div>
    </div>
  );
}
