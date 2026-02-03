# Adriana Design System

Egy átfogó design system és komponens library, amely a **Fluent UI React Components** alapjaira épül. Ez a projekt egy Next.js alkalmazás, amely bemutatja és dokumentálja a design rendszer összes komponensét és design tokenját.

## ✨ Funkciók

- 🎨 **Design Tokens**: Színek, tipográfia, árnyékok, border radius, spacing és egyéb design elemek
- 🧩 **Komponens Library**: Újrafelhasználható UI komponensek kategóriákba rendezve
- 🌗 **Téma támogatás**: Redux alapú témaváltás (világos/sötét mód)
- 📱 **Reszponzív**: Minden komponens mobilra optimalizált
- 💻 **Kód példák**: Élő példák és használati útmutatók minden komponenshez

## 🚀 Kezdés

### Előfeltételek

- Node.js 20 vagy újabb
- npm, yarn, pnpm vagy bun

### Telepítés

```bash
# Függőségek telepítése
npm install

# Fejlesztői szerver indítása
npm run dev
```

Nyisd meg a [http://localhost:3000](http://localhost:3000) címet a böngésződben.

### Build és Production

```bash
# Production build
npm run build

# Production szerver indítása
npm start
```

## 📦 Technológiai Stack

- **Framework**: Next.js 16.1 (App Router)
- **UI Library**: Fluent UI React Components 9.72
- **State Management**: Redux Toolkit 2.11
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Icons**: Fluent UI React Icons 2.0

## 📂 Projekt Struktúra

```
adriana_design_system/
├── app/
│   ├── components/          # Komponens demo oldalak (kategorizálva)
│   │   ├── buttons/         # Button, Compound Button, Menu Button, Split Button, Toggle Button
│   │   ├── cards/           # Card, Card Header, Card Footer, Card Preview
│   │   ├── avatars/         # Avatar, Avatar Group
│   │   ├── badges/          # Badge, Counter Badge, Presence Badge
│   │   ├── carousels/       # Carousel, Carousel Navigation
│   │   ├── forms/           # Checkbox és egyéb form elemek
│   │   ├── accordion/       # Accordion komponens
│   │   ├── breadcrumb/      # Breadcrumb navigáció
│   │   └── display/         # Display komponensek
│   ├── design/              # Design token demo oldalak
│   │   ├── colors/          # Színpaletta
│   │   ├── typography/      # Tipográfia
│   │   ├── spacing/         # Spacing rendszer
│   │   ├── border-radius/   # Border radius értékek
│   │   ├── shadow/          # Árnyék rendszer
│   │   ├── elevation/       # Elevation rendszer
│   │   └── icons/           # Ikon library
│   ├── layout.tsx           # Root layout
│   ├── ClientLayout.tsx     # Client-side layout (Redux Provider)
│   ├── page.tsx             # Kezdőlap
│   └── globals.css          # Globális stílusok
├── components/              # Újrafelhasználható utility komponensek
│   ├── CodeBlock.tsx        # Kód példa megjelenítő
│   ├── DemoSection.tsx      # Demo szekció wrapper
│   ├── Navigation.tsx       # Fő navigáció
│   └── TableContainer.tsx   # Táblázat wrapper
├── lib/
│   ├── themes.ts            # Téma konfigurációk
│   └── redux/               # Redux store és slices
└── public/                  # Statikus fájlok
```

## 🎨 Komponensek

### Gombok (Buttons)
- **Button** - Alapvető gomb komponens
- **Compound Button** - Gomb kiegészítő szöveggel
- **Menu Button** - Legördülő menüvel rendelkező gomb
- **Split Button** - Osztott gomb (fő akció + menü)
- **Toggle Button** - Kapcsológomb

### Kártyák (Cards)
- **Card** - Alapvető kártya komponens
- **Card Header** - Kártya fejléc
- **Card Footer** - Kártya lábléc
- **Card Preview** - Kártya előnézet (képekkel)

### Avatárok (Avatars)
- **Avatar** - Felhasználó avatar
- **Avatar Group** - Avatar csoport

### Jelvények (Badges)
- **Badge** - Alapvető jelvény
- **Counter Badge** - Számláló jelvény
- **Presence Badge** - Jelenlét jelző

### Űrlap elemek (Forms)
- **Checkbox** - Jelölőnégyzet

### Navigáció
- **Breadcrumb** - Navigációs breadcrumb

### Konténerek
- **Accordion** - Összecsukható szekció
- **Carousel** - Képgaléria

### Egyéb
- **Display** - Megjelenítési komponensek

## 🎨 Design Rendszer

A design system a következő alapelvekre épül:

- **Konzisztencia**: Egységes design language minden komponensben
- **Hozzáférhetőség**: WCAG 2.1 AA szabványnak megfelelő komponensek
- **Rugalmasság**: Könnyen testreszabható és bővíthető
- **Dokumentáció**: Minden komponens részletes dokumentációval és példákkal

### Design Tokens

- **Színek**: Teljes színpaletta világos és sötét módhoz
- **Tipográfia**: Font családok, méretek és súlyok
- **Spacing**: 4px alapú spacing rendszer
- **Border Radius**: Konzisztens lekerekítési értékek
- **Shadows**: Elevation alapú árnyék rendszer
- **Icons**: Fluent UI icon library

## 📝 Használat

Minden komponens oldal tartalmaz:
- Importálási példát
- Különböző használati eseteket
- Élő demo-kat
- Kód példákat
- Props dokumentációt

### Példa

```tsx
import { Button } from '@fluentui/react-components';

function MyComponent() {
  return (
    <Button appearance="primary">
      Mentés
    </Button>
  );
}
```

## 🤝 Közreműködés

1. Fork-old a projektet
2. Hozz létre egy feature branchet (`git checkout -b feature/AmazingFeature`)
3. Commit-old a változásokat (`git commit -m 'Add some AmazingFeature'`)
4. Push-old a branch-et (`git push origin feature/AmazingFeature`)
5. Nyiss egy Pull Request-et

## 📄 Licenc

Ez a projekt privát és nem nyilvános használatra készült.

## 📧 Kapcsolat

Ha kérdésed van a projekttel kapcsolatban, nyiss egy issue-t a GitHub-on.
