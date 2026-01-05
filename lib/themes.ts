import { createDarkTheme, createLightTheme } from "@fluentui/react-components";
import type { BrandVariants, Theme } from "@fluentui/react-components";

/**
 * Brand override helper Fluent UI v9 themes-hez.
 * Cél:
 * - Adriana: 130 legyen a default primary
 * - Connect: ne legyen “túl világos kék” defaultban → mélyebb primary (pl. 80/90)
 * - Extra tokenek felülírása, amiket sok komponens (Input/Checkbox/Radio/Slider/Tab/Focus ring) is használ.
 */
function applyBrandOverrides(
  theme: Theme,
  brand: BrandVariants,
  opts?: {
    primaryKey?: keyof BrandVariants; // default primary
    hoverKey?: keyof BrandVariants;
    pressedKey?: keyof BrandVariants;
    linkHoverKey?: keyof BrandVariants;
    outlineKey?: keyof BrandVariants;
    subtleBgKey?: keyof BrandVariants;
    subtle2Key?: keyof BrandVariants;
    subtle2HoverKey?: keyof BrandVariants;
    subtle2PressedKey?: keyof BrandVariants;
  }
) {
  const primaryKey = opts?.primaryKey ?? (130 as keyof BrandVariants);
  const hoverKey = opts?.hoverKey ?? (120 as keyof BrandVariants);
  const pressedKey = opts?.pressedKey ?? (110 as keyof BrandVariants);
  const linkHoverKey = opts?.linkHoverKey ?? (140 as keyof BrandVariants);
  const outlineKey = opts?.outlineKey ?? primaryKey;

  const subtleBgKey = opts?.subtleBgKey ?? (20 as keyof BrandVariants);

  // “tint / subtle” brand background 2
  const subtle2Key = opts?.subtle2Key ?? (40 as keyof BrandVariants);
  const subtle2HoverKey = opts?.subtle2HoverKey ?? (50 as keyof BrandVariants);
  const subtle2PressedKey = opts?.subtle2PressedKey ?? (60 as keyof BrandVariants);

  const p = brand[primaryKey];
  const hover = brand[hoverKey];
  const pressed = brand[pressedKey];
  const outline = brand[outlineKey];
  const linkHover = brand[linkHoverKey];

  // ===== BRAND BACKGROUND (primary gomb, selected, filled badge, stb.) =====
  theme.colorBrandBackground = p;
  theme.colorBrandBackgroundHover = hover;
  theme.colorBrandBackgroundPressed = pressed;
  theme.colorBrandBackgroundSelected = p;

  // Inverted background (pl. bizonyos komponensek invertált állapotai)
  theme.colorBrandBackgroundInverted = p;

  // ===== Tint / subtle (ghost/tint badge, subtle button állapotok) =====
  theme.colorBrandBackground2 = brand[subtle2Key];
  theme.colorBrandBackground2Hover = brand[subtle2HoverKey];
  theme.colorBrandBackground2Pressed = brand[subtle2PressedKey];

  // ===== BRAND FOREGROUND (szöveg/ikon ahol brand) =====
  theme.colorBrandForeground1 = p;
  theme.colorBrandForeground2 = hover;

  // Link
  theme.colorBrandForegroundLink = p;
  theme.colorBrandForegroundLinkHover = linkHover;
  theme.colorBrandForegroundLinkPressed = pressed;

  // ===== STROKE / OUTLINE =====
  theme.colorBrandStroke1 = outline;
  theme.colorBrandStroke2 = hover;

  // ===== “HIÁNYZÓ” / GYAKRAN HASZNÁLT TOKENEK =====
  // Focus ring (nagyon sok komponens erre támaszkodik)
  theme.colorStrokeFocus2 = p;

  // CompoundButton / split button ikon-szöveg színek
  theme.colorCompoundBrandForeground1 = p;
  theme.colorCompoundBrandForeground1Hover = hover;
  theme.colorCompoundBrandForeground1Pressed = pressed;

  // Checkbox/Radio/Slider/Input “selected/active” stroke gyakran ezt használja
  theme.colorNeutralStrokeAccessibleSelected = p;

  // Néhány theme token nincs hivatalosan a Theme típusban, de runtime-ban működik.
  // Ezek “brand subtle layers” jellegűek.
  (theme as any).colorBrandBackground3 = brand[subtleBgKey];
  (theme as any).colorBrandBackground3Hover = brand[(30 as keyof BrandVariants)];
  (theme as any).colorBrandBackground3Pressed = brand[(40 as keyof BrandVariants)];

  return theme;
}

/* =======================
   BRAND 1: Adriana
   - 130 a default primary (narancs)
   ======================= */
export const adriana: BrandVariants = {
  10: "#060200",
  20: "#241400",
  30: "#3C1F00",
  40: "#4E2800",
  50: "#613200",
  60: "#733C00",
  70: "#864600",
  80: "#995100",
  90: "#AD5D00",
  100: "#C16800",
  110: "#D57400",
  120: "#EA8000",
  130: "#FF8C00",
  140: "#FFA451",
  150: "#FFBA7F",
  160: "#FFCFA8",
};

export const adrianaLightTheme: Theme = applyBrandOverrides(
  createLightTheme(adriana),
  adriana,
  {
    primaryKey: 130,
    hoverKey: 120,
    pressedKey: 110,
    linkHoverKey: 140,
    outlineKey: 130,
    subtleBgKey: 20,
    subtle2Key: 40,
    subtle2HoverKey: 50,
    subtle2PressedKey: 60,
  }
);

export const adrianaDarkTheme: Theme = applyBrandOverrides(
  createDarkTheme(adriana),
  adriana,
  {
    primaryKey: 130,
    hoverKey: 120,
    pressedKey: 110,
    linkHoverKey: 140,
    outlineKey: 130,
    subtleBgKey: 20,
    subtle2Key: 40,
    subtle2HoverKey: 50,
    subtle2PressedKey: 60,
  }
);

/* =======================
   BRAND 2: Connect
   - Probléma: 130 túl világos “default primary”-nak
   - Megoldás: mélyebb primary (pl. 80 vagy 90)
   - Itt 90-et állítok be, hover 80, pressed 70 (szebb “mély kék” élmény)
   ======================= */
export const connect: BrandVariants = {
  10: "#020305",
  20: "#111723",
  30: "#16263D",
  40: "#193253",
  50: "#1B3F6A",
  60: "#1B4C82",
  70: "#18599B",
  80: "#1267B4",
  90: "#3174C2",
  100: "#4F82C8",
  110: "#6790CF",
  120: "#7D9ED5",
  130: "#92ACDC",
  140: "#A6BAE2",
  150: "#BAC9E9",
  160: "#CDD8EF",
};

export const connectLightTheme: Theme = applyBrandOverrides(
  createLightTheme(connect),
  connect,
  {
    primaryKey: 90,
    hoverKey: 80,
    pressedKey: 70,
    linkHoverKey: 110, // link hover ne legyen túl világos
    outlineKey: 90,
    subtleBgKey: 20,
    // “tint” réteg maradhat a sötétebb 40/50/60 sávon (nem a világos 130-on)
    subtle2Key: 40,
    subtle2HoverKey: 50,
    subtle2PressedKey: 60,
  }
);

export const connectDarkTheme: Theme = applyBrandOverrides(
  createDarkTheme(connect),
  connect,
  {
    primaryKey: 90,
    hoverKey: 80,
    pressedKey: 70,
    linkHoverKey: 110,
    outlineKey: 90,
    subtleBgKey: 20,
    subtle2Key: 40,
    subtle2HoverKey: 50,
    subtle2PressedKey: 60,
  }
);
