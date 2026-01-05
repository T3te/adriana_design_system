"use client";

import * as React from "react";
import {
  makeStyles,
  Body1,
  Caption1,
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  Text,
  tokens,
  Checkbox,
  Title1,
  Title2,
} from "@fluentui/react-components";
import {
  ArrowReplyRegular,
  ShareRegular,
  MoreHorizontalRegular,
  MoreVerticalRegular,
} from "@fluentui/react-icons";
import CodeBlock, { CodeComment } from "@/components/CodeBlock";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";
  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    width: "360px",
    maxWidth: "100%",
    height: "fit-content",
  },

  cardHorizontal: {
    width: "fit-content",
    maxWidth: "100%",
    height: "fit-content",
  },

  smallCard: {
    width: "300px",
    maxWidth: "100%",
  },

  mediumCard: {
    width: "360px",
    maxWidth: "100%",
  },

  largeCard: {
    width: "420px",
    maxWidth: "100%",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  horizontalContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "16px",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  text: {
    margin: "0px",
  },
});

export default function CardPage() {
  const styles = useStyles();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Card - Kártya</Title1>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          A Card egy olyan tároló, amely egyetlen koncepciót vagy objektumot
          tartalmaz, mint például egy dokumentum vagy kapcsolat. A Card-ok
          kiemelést adhatnak az információknak és kiszámítható mintákat
          hozhatnak létre.
        </Caption1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>// Import</CodeComment>
          {`import {
  Card,
  CardHeader,
  CardPreview,
  CardFooter,
} from '@fluentui/react-components';

`}
          <CodeComment>// Használat</CodeComment>
          {`<Card>
  <CardHeader
    image={<img src="..." alt="..." />}
    header={<Text weight="semibold">Cím</Text>}
    description={<Caption1>Leírás</Caption1>}
  />
  <CardPreview>
    <img src="..." alt="..." />
  </CardPreview>
  <CardFooter>
    <Button>Művelet</Button>
  </CardFooter>
</Card>`}
        </CodeBlock>
      </div>

      {/* Default */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <Card className={styles.card}>
          <CardHeader
            image={
              <img
                src={resolveAsset("avatar_elvia.svg")}
                alt="Elvia Atkins avatar picture"
              />
            }
            header={
              <Body1>
                <b>Elvia Atkins</b> mentioned you
              </Body1>
            }
            description={<Caption1>5h ago · About us - Overview</Caption1>}
          />

          <CardPreview
            logo={
              <img
                src={resolveAsset("docx.png")}
                alt="Microsoft Word document"
              />
            }
          >
            <img
              src={resolveAsset("doc_template.png")}
              alt="Preview of a Word document: About Us - Overview"
            />
          </CardPreview>

          <CardFooter>
            <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
            <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Orientation */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Tájolás (Orientation)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A Card-ok különböző elrendezéssel rendelkezhetnek és megjeleníthetők
          függőlegesen (alapértelmezett) vagy vízszintesen.
        </Caption1>
        <div className={styles.container}>
          <div>
            <Text weight="semibold" className="mb-2 block">Függőleges (Vertical - Alapértelmezett)</Text>
            <Card className={styles.card} orientation="vertical">
              <CardHeader
                image={
                  <img
                    src={resolveAsset("app_logo.svg")}
                    alt="App name logo"
                  />
                }
                header={<Text weight="semibold">App Name</Text>}
                description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Developer</Caption1>}
              />

              <p className={styles.text}>
                Donut chocolate bar oat cake. Dragée tiramisu lollipop bear
                claw. Marshmallow pastry jujubes toffee sugar plum.
              </p>
            </Card>
          </div>

          <div>
            <Text weight="semibold" className="mb-2 block">Vízszintes (Horizontal)</Text>
            <Card className={styles.cardHorizontal} orientation="horizontal">
              <CardPreview>
                <img
                  src={resolveAsset("app_logo.svg")}
                  alt="App logo"
                  style={{ width: "64px", height: "64px" }}
                />
              </CardPreview>

              <div>
                <Text weight="semibold">App Name</Text>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Developer</Caption1>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Méret (Size)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A méret opciók változatosságot és konzisztenciát biztosítanak. A méret
          a padding-re és border-radius-ra vonatkozik, nem a tényleges
          dimenziókra.
        </Caption1>
        <div className="flex gap-4 items-start flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Card className={styles.smallCard} size="small">
              <CardHeader
                image={
                  <div style={{ display: "flex", gap: "4px" }}>
                    <img
                      src={resolveAsset("app_logo.svg")}
                      alt="Application logo"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                }
                header={
                  <Text weight="semibold" size={300}>
                    Alert in Teams
                  </Text>
                }
                description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>By Microsoft</Caption1>}
              />
              <Caption1>Automated</Caption1>
            </Card>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Small</Caption1>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Card className={styles.mediumCard} size="medium">
              <CardHeader
                image={
                  <div style={{ display: "flex", gap: "4px" }}>
                    <img
                      src={resolveAsset("app_logo.svg")}
                      alt="Application logo"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>
                }
                header={
                  <Text weight="semibold">
                    Alert in Teams
                  </Text>
                }
                description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>By Microsoft</Caption1>}
              />
              <Caption1>Automated</Caption1>
            </Card>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Medium (Alapértelmezett)</Caption1>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Card className={styles.largeCard} size="large">
              <CardHeader
                image={
                  <div style={{ display: "flex", gap: "4px" }}>
                    <img
                      src={resolveAsset("app_logo.svg")}
                      alt="Application logo"
                      style={{ width: "32px", height: "32px" }}
                    />
                  </div>
                }
                header={
                  <Text weight="semibold" size={400}>
                    Alert in Teams
                  </Text>
                }
                description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>By Microsoft</Caption1>}
              />
              <Body1>Automated</Body1>
            </Card>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Large</Caption1>
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Megjelenés (Appearance)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A Card-ok különböző stílusokat használhatnak a helyzettől és
          elhelyezkedéstől függően.
        </Caption1>
        <div className={styles.container}>
          <div>
            <Text weight="semibold" className="mb-2 block">Kitöltött (Filled - Alapértelmezett)</Text>
            <Card className={styles.card} appearance="filled">
              <CardHeader
                image={
                  <img
                    src={resolveAsset("app_logo.svg")}
                    alt="App name logo"
                  />
                }
                header={<Text weight="semibold">App Name</Text>}
                description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Developer</Caption1>}
              />
              <p className={styles.text}>
                Donut chocolate bar oat cake. Dragée tiramisu lollipop bear
                claw.
              </p>
            </Card>
          </div>

          <div>
            <Text weight="semibold" className="mb-2 block">Kitöltött Alternatív (Filled Alternative)</Text>
            <Card className={styles.card} appearance="filled-alternative">
              <CardHeader
                image={
                  <img
                    src={resolveAsset("app_logo.svg")}
                    alt="App name logo"
                  />
                }
                header={<Text weight="semibold">App Name</Text>}
                description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Developer</Caption1>}
              />
              <p className={styles.text}>
                Donut chocolate bar oat cake. Dragée tiramisu lollipop bear
                claw.
              </p>
            </Card>
          </div>

          <div>
            <Text weight="semibold" className="mb-2 block">Körvonalas (Outline)</Text>
            <Card className={styles.card} appearance="outline">
              <CardHeader
                image={
                  <img
                    src={resolveAsset("app_logo.svg")}
                    alt="App name logo"
                  />
                }
                header={<Text weight="semibold">App Name</Text>}
                description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Developer</Caption1>}
              />
              <p className={styles.text}>
                Donut chocolate bar oat cake. Dragée tiramisu lollipop bear
                claw.
              </p>
            </Card>
          </div>

          <div>
            <Text weight="semibold" className="mb-2 block">Finom (Subtle)</Text>
            <Card className={styles.card} appearance="subtle">
              <CardHeader
                image={
                  <img
                    src={resolveAsset("app_logo.svg")}
                    alt="App name logo"
                  />
                }
                header={<Text weight="semibold">App Name</Text>}
                description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Developer</Caption1>}
              />
              <p className={styles.text}>
                Donut chocolate bar oat cake. Dragée tiramisu lollipop bear
                claw.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Selectable */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Kiválasztható (Selectable)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A Card-ok kiválaszthatók, és a kártyára kattintva válthat a
          kiválasztott állapot.
        </Caption1>
        <div className="flex gap-4 flex-wrap">
          <SelectableExample />
        </div>
      </div>

      {/* Selectable Indicator */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Kiválasztható jelzővel (Selectable with Checkbox)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Alapértelmezetten a kiválasztható kártyák nem tartalmaznak elemet a
          kiválasztási állapot jelzésére. Például checkboxok használhatók
          kompozícióval a floatingAction tulajdonság segítségével.
        </Caption1>
        <div className="flex gap-4 flex-wrap">
          <SelectableWithCheckboxExample />
        </div>
      </div>

      {/* Disabled */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Letiltott (Disabled)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Egy Card letiltható, ami megakadályozza az interakciót és vizuálisan
          letiltott állapotot jelenít meg.
        </Caption1>
        <Card
          className={styles.card}
          disabled
          onSelectionChange={() => console.log("This should not fire")}
        >
          <CardHeader
            image={
              <img
                src={resolveAsset("app_logo.svg")}
                alt="App name logo"
              />
            }
            header={<Text weight="semibold">Letiltott Card</Text>}
            description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Nem lehet vele interakcióba lépni</Caption1>}
          />
          <p className={styles.text}>
            Ez a Card letiltott és nem reagál az interakciókra.
          </p>
          <CardFooter>
            <Button disabled>Művelet</Button>
          </CardFooter>
        </Card>
      </div>

      {/* With Action */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Művelettel (With Action)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Amikor egy Card-nak felső szintű kattintási kezelőt adunk, fontos
          biztosítani, hogy ugyanaz a művelet elérhető legyen egy gomb vagy
          link segítségével is.
        </Caption1>
        <Card
          className={styles.card}
          onClick={() => alert("Card clicked!")}
          style={{ cursor: "pointer" }}
        >
          <CardHeader
            image={
              <img
                src={resolveAsset("avatar_elvia.svg")}
                alt="Elvia Atkins avatar picture"
              />
            }
            header={
              <Body1>
                <b>Kattintható Card</b>
              </Body1>
            }
            description={<Caption1>Kattints bárhová ezen a kártyán</Caption1>}
            action={
              <Button
                appearance="transparent"
                icon={<MoreVerticalRegular />}
                aria-label="További műveletek"
                onClick={(e) => {
                  e.stopPropagation();
                  alert("Gomb kattintva!");
                }}
              />
            }
          />
          <p className={styles.text}>
            A teljes kártya kattintható, de a művelet gomb külön is
            kattintható.
          </p>
        </Card>
      </div>

      {/* Focus Mode */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Fókusz mód (Focus Mode)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A Card-ok fókuszálhatók és különböző stratégiákkal kezelhetik a
          tartalmuk fókuszát.
        </Caption1>
        <div className={styles.container}>
          <div>
            <Text weight="semibold" className="mb-2 block">Off (Kikapcsolva - Alapértelmezett)</Text>
            <Card className={styles.card} focusMode="off">
              <CardHeader
                header={<Text weight="semibold">Focus Mode: Off</Text>}
                description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>A Card nem fókuszálható</Caption1>}
              />
              <CardFooter>
                <Button>Művelet 1</Button>
                <Button>Művelet 2</Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Text weight="semibold" className="mb-2 block">No Tab</Text>
            <Card className={styles.card} focusMode="no-tab">
              <CardHeader
                header={<Text weight="semibold">Focus Mode: No Tab</Text>}
                description={
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Enter a fókusz rögzítésére, Escape a feloldásra</Caption1>
                }
              />
              <CardFooter>
                <Button>Művelet 1</Button>
                <Button>Művelet 2</Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Text weight="semibold" className="mb-2 block">Tab Exit</Text>
            <Card className={styles.card} focusMode="tab-exit">
              <CardHeader
                header={<Text weight="semibold">Focus Mode: Tab Exit</Text>}
                description={
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Enter a fókusz rögzítésére, Tab az utolsó elemen a kilépésre</Caption1>
                }
              />
              <CardFooter>
                <Button>Művelet 1</Button>
                <Button>Művelet 2</Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Text weight="semibold" className="mb-2 block">Tab Only</Text>
            <Card className={styles.card} focusMode="tab-only">
              <CardHeader
                header={<Text weight="semibold">Focus Mode: Tab Only</Text>}
                description={
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Tab az elemeken át, kilép az utolsó elem után</Caption1>
                }
              />
              <CardFooter>
                <Button>Művelet 1</Button>
                <Button>Művelet 2</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* Templates */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Sablonok (Templates)</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          A Card-ok más komponensekkel összeállíthatók gazdag oldalelemek
          létrehozására.
        </Caption1>
        <div className="flex gap-4 flex-wrap">
          <Card className={styles.card}>
            <CardPreview>
              <img
                src={resolveAsset("app_logo.svg")}
                alt="Presentation preview"
                style={{ width: "100%", height: "200px", objectFit: "cover", backgroundColor: "#f5f5f5" }}
              />
            </CardPreview>
            <CardHeader
              image={
                <img
                  src={resolveAsset("app_logo.svg")}
                  alt="App logo"
                  style={{ width: "32px", height: "32px" }}
                />
              }
              header={<Text weight="semibold">iOS App Prototype</Text>}
              description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>You created 53m ago</Caption1>}
            />
          </Card>

          <Card className={styles.card}>
            <CardHeader
              image={
                <img
                  src={resolveAsset("app_logo.svg")}
                  alt="Document Logo"
                  style={{ width: "32px", height: "32px" }}
                />
              }
              header={<Text weight="semibold">Secret Project Briefing</Text>}
              description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>OneDrive &gt; Documents</Caption1>}
              action={
                <Button
                  appearance="transparent"
                  icon={<MoreHorizontalRegular />}
                  aria-label="További opciók"
                />
              }
            />
          </Card>

          <Card className={styles.card}>
            <CardHeader
              image={
                <img
                  src={resolveAsset("app_logo.svg")}
                  alt="Spreadsheet Logo"
                  style={{ width: "32px", height: "32px" }}
                />
              }
              header={<Text weight="semibold">Team Budget</Text>}
              description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>OneDrive &gt; Spreadsheets</Caption1>}
              action={
                <Button
                  appearance="transparent"
                  icon={<MoreHorizontalRegular />}
                  aria-label="További opciók"
                />
              }
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

// Helper component for Selectable example
function SelectableExample() {
  const styles = useStyles();
  const [selectedItems, setSelectedItems] = React.useState<
    Record<string, boolean>
  >({
    item1: false,
    item2: true,
  });

  return (
    <>
      <Card
        className={styles.card}
        selected={selectedItems.item1}
        onSelectionChange={(_, { selected }) =>
          setSelectedItems({ ...selectedItems, item1: selected })
        }
      >
        <CardPreview>
          <img
            src={resolveAsset("app_logo.svg")}
            alt="Presentation preview"
            style={{ width: "100%", height: "200px", objectFit: "cover", backgroundColor: "#f5f5f5" }}
          />
        </CardPreview>
        <CardHeader
          image={
            <img
              src={resolveAsset("app_logo.svg")}
              alt="App logo"
              style={{ width: "32px", height: "32px" }}
            />
          }
          header={<Text weight="semibold">iOS App Prototype</Text>}
          description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>You created 53m ago</Caption1>}
        />
      </Card>

      <Card
        className={styles.card}
        selected={selectedItems.item2}
        onSelectionChange={(_, { selected }) =>
          setSelectedItems({ ...selectedItems, item2: selected })
        }
      >
        <CardPreview>
          <img
            src={resolveAsset("app_logo.svg")}
            alt="Presentation preview"
            style={{ width: "100%", height: "200px", objectFit: "cover", backgroundColor: "#f5f5f5" }}
          />
        </CardPreview>
        <CardHeader
          image={
            <img
              src={resolveAsset("app_logo.svg")}
              alt="App logo"
              style={{ width: "32px", height: "32px" }}
            />
          }
          header={<Text weight="semibold">iOS App Prototype</Text>}
          description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>You created 53m ago</Caption1>}
        />
      </Card>
    </>
  );
}

// Helper component for Selectable with Checkbox example
function SelectableWithCheckboxExample() {
  const styles = useStyles();
  const [selectedItems, setSelectedItems] = React.useState<
    Record<string, boolean>
  >({
    item1: false,
    item2: true,
  });

  return (
    <>
      <Card
        className={styles.card}
        selected={selectedItems.item1}
        onSelectionChange={(_, { selected }) =>
          setSelectedItems({ ...selectedItems, item1: selected })
        }
        floatingAction={
          <Checkbox
            checked={selectedItems.item1}
            aria-label="iOS App Prototype"
          />
        }
      >
        <CardPreview>
          <img
            src={resolveAsset("app_logo.svg")}
            alt="Presentation preview"
            style={{ width: "100%", height: "200px", objectFit: "cover", backgroundColor: "#f5f5f5" }}
          />
        </CardPreview>
        <CardHeader
          image={
            <img
              src={resolveAsset("app_logo.svg")}
              alt="App logo"
              style={{ width: "32px", height: "32px" }}
            />
          }
          header={<Text weight="semibold">iOS App Prototype</Text>}
          description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>You created 53m ago</Caption1>}
        />
      </Card>

      <Card
        className={styles.card}
        selected={selectedItems.item2}
        onSelectionChange={(_, { selected }) =>
          setSelectedItems({ ...selectedItems, item2: selected })
        }
        floatingAction={
          <Checkbox
            checked={selectedItems.item2}
            aria-label="iOS App Prototype"
          />
        }
      >
        <CardPreview>
          <img
            src={resolveAsset("app_logo.svg")}
            alt="Presentation preview"
            style={{ width: "100%", height: "200px", objectFit: "cover", backgroundColor: "#f5f5f5" }}
          />
        </CardPreview>
        <CardHeader
          image={
            <img
              src={resolveAsset("app_logo.svg")}
              alt="App logo"
              style={{ width: "32px", height: "32px" }}
            />
          }
          header={<Text weight="semibold">iOS App Prototype</Text>}
          description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>You created 53m ago</Caption1>}
        />
      </Card>
    </>
  );
}
