'use client';

import { 
  Title1,
  Title2,
  Caption1,
  CarouselNav,
  CarouselNavButton,
  CarouselNavImageButton,
  Field,
  Switch,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import * as React from 'react';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

const SWAP_IMAGE =
  "https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/image-square.png";

const useClasses = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto 1fr",
    boxShadow: tokens.shadow16,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    border: `${tokens.strokeWidthThicker} solid ${tokens.colorNeutralForeground3}`,
    borderRadius: tokens.borderRadiusMedium,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: "10px",
    minHeight: "100px",
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    border: `${tokens.strokeWidthThicker} solid ${tokens.colorNeutralForeground3}`,
    borderBottom: "none",
    borderRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: "10px",
  },
  sliderField: {
    flex: 1,
    gridTemplateColumns: "max-content 1fr",
  },
  navContainer: {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusMedium,
  },
});

export default function CarouselNavPage() {
  const classes = useClasses();
  const [useImageButtons, setUseImageButtons] = React.useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>CarouselNav</Title1>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          A CarouselNav index alapú lapozást biztosít a Carousel komponenshez.
          A render függvény a slide töréspontok száma alapján hívódik meg.
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
  CarouselNav,
  CarouselNavButton,
  CarouselNavImageButton,
} from '@fluentui/react-components';

`}
          <CodeComment>{'// Használat'}</CodeComment>
          {`<CarouselNav>
  {(index) => (
    <CarouselNavButton aria-label={\`Carousel Nav Button \${index}\`} />
  )}
</CarouselNav>

// Képes navigációs gombok
<CarouselNav>
  {(index) => (
    <CarouselNavImageButton
      image={{ src: imageUrl }}
      aria-label={\`Carousel Nav Button \${index}\`}
    />
  )}
</CarouselNav>`}
        </CodeBlock>
      </div>

      {/* Alapértelmezett */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Váltás a CarouselNavButton és CarouselNavImageButton között.
        </Caption1>
        <div className={classes.container}>
          <div className={classes.controls}>
            <Field
              className={classes.sliderField}
              label={
                <>
                  Használd a <code>CarouselNavImageButton</code>-t
                </>
              }
              orientation="horizontal"
            >
              <Switch
                checked={useImageButtons}
                onChange={(_, data) => setUseImageButtons(data.checked)}
              />
            </Field>
          </div>
          <div className={classes.card}>
            <CarouselNav totalSlides={5} appearance="brand">
              {(index) =>
                useImageButtons ? (
                  <CarouselNavImageButton
                    image={{ src: SWAP_IMAGE }}
                    aria-label={`Carousel Nav Button ${index}`}
                  />
                ) : (
                  <CarouselNavButton aria-label={`Carousel Nav Button ${index}`} />
                )
              }
            </CarouselNav>
          </div>
        </div>
      </div>

      {/* CarouselNavButton */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>CarouselNavButton</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Alapértelmezett navigációs gombok a legtöbb interakcióhoz.
        </Caption1>
        <div className={classes.navContainer}>
          <CarouselNav totalSlides={5}>
            {(index) => (
              <CarouselNavButton aria-label={`Slide ${index + 1}`} />
            )}
          </CarouselNav>
        </div>
      </div>

      {/* CarouselNavImageButton */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>CarouselNavImageButton</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Képes navigációs gombok képek alapú carousel-ekhez vagy amikor előnézet
          szükséges.
        </Caption1>
        <div className={classes.navContainer}>
          <CarouselNav totalSlides={5}>
            {(index) => (
              <CarouselNavImageButton
                image={{ src: SWAP_IMAGE }}
                aria-label={`Slide ${index + 1}`}
              />
            )}
          </CarouselNav>
        </div>
      </div>

      {/* Appearance Brand */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Brand Megjelenés</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A brand appearance alternatív márka stílust biztosít, amikor az
          alapértelmezett szürke skála nem megfelelő.
        </Caption1>
        <div className={classes.navContainer}>
          <CarouselNav totalSlides={5} appearance="brand">
            {(index) => (
              <CarouselNavButton aria-label={`Slide ${index + 1}`} />
            )}
          </CarouselNav>
        </div>
      </div>

      {/* Különböző számú slide-ok */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Különböző számú slide-ok</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A totalSlides prop segítségével beállítható a navigációs gombok száma.
        </Caption1>
        
        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>3 slide</Caption1>
          <div className={classes.navContainer}>
            <CarouselNav totalSlides={3}>
              {(index) => (
                <CarouselNavButton aria-label={`Slide ${index + 1}`} />
              )}
            </CarouselNav>
          </div>
        </div>

        <div className="mb-4">
          <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>7 slide</Caption1>
          <div className={classes.navContainer}>
            <CarouselNav totalSlides={7}>
              {(index) => (
                <CarouselNavButton aria-label={`Slide ${index + 1}`} />
              )}
            </CarouselNav>
          </div>
        </div>

        <div>
          <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>10 slide</Caption1>
          <div className={classes.navContainer}>
            <CarouselNav totalSlides={10}>
              {(index) => (
                <CarouselNavButton aria-label={`Slide ${index + 1}`} />
              )}
            </CarouselNav>
          </div>
        </div>
      </div>
    </div>
  );
}
