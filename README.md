# Adriana Design System

Az Adriana Design System egy konzisztens, professzionális és hozzáférhető komponenskönyvtár az Adriana projektekhez. A rendszer a **[Fluent UI React v9](https://react.fluentui.dev/)** komponensekre és a **[Tailwind CSS](https://tailwindcss.com/)** utility osztályokra épül, lehetővé téve a gyors fejlesztést és a konzisztens felhasználói élményt minden alkalmazásban.

## ✨ Funkciók

- 🎨 **Design Tokens**: Színek, tipográfia, árnyékok, border radius, spacing és egyéb design elemek
- 🧩 **Komponens Library**: 20+ újrafelhasználható UI komponens
- 🌗 **Téma támogatás**: Redux alapú témaváltás (világos/sötét mód)
- 📱 **Reszponzív**: Minden komponens mobilra optimalizált
- 💻 **Kód példák**: Élő példák és használati útmutatók minden komponenshez
- ⚡ **Modern Stack**: Fluent UI + Tailwind CSS kombinációja
- ♿ **Hozzáférhetőség**: WCAG 2.1 AA szabványnak megfelelő komponensek

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
- **Styling**: Tailwind CSS 4
- **State Management**: Redux Toolkit 2.11
- **Language**: TypeScript 5
- **Icons**: Fluent UI React Icons 2.0

## 📂 Projekt Struktúra

```
adriana_design_system/
├── app/
│   ├── components/          # Komponens demo oldalak
│   │   ├── accordion/       # Accordion komponens
│   │   ├── avatar/          # Avatar komponens
│   │   ├── avatar-group/    # Avatar Group komponens
│   │   ├── badge/           # Badge komponens
│   │   ├── breadcrumb/      # Breadcrumb navigáció
│   │   ├── button/          # Button komponens
│   │   ├── card/            # Card komponens
│   │   ├── card-footer/     # Card Footer komponens
│   │   ├── card-header/     # Card Header komponens
│   │   ├── card-preview/    # Card Preview komponens
│   │   ├── carousel/        # Carousel komponens
│   │   ├── carousel-nav/    # Carousel Navigation komponens
│   │   ├── checkbox/        # Checkbox komponens
│   │   ├── compound-button/ # Compound Button komponens
│   │   ├── counter-badge/   # Counter Badge komponens
│   │   ├── display/         # Display komponensek
│   │   ├── menu-button/     # Menu Button komponens
│   │   ├── presence-badge/  # Presence Badge komponens
│   │   ├── split-button/    # Split Button komponens
│   │   └── toggle-button/   # Toggle Button komponens
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

Az Adriana Design System két bevált technológia kombinációjára épül:

### Fluent UI React v9
A [Fluent UI](https://react.fluentui.dev/) modern, hozzáférhető és teljesítményorientált React komponenseket biztosít:
- Professzionális Microsoft design language
- Beépített hozzáférhetőség (WCAG 2.1 AA)
- Világos és sötét téma támogatás
- TypeScript típusdefiníciók

### Tailwind CSS
A [Tailwind CSS](https://tailwindcss.com/) utility-first megközelítése gyors és rugalmas styling-ot tesz lehetővé:
- Gyors prototípus készítés
- Konzisztens spacing és színrendszer
- Reszponzív design utility osztályok
- Kis bundle méret production-ben

### Design Alapelvek

- **Konzisztencia**: Egységes design language minden komponensben
- **Hozzáférhetőség**: WCAG 2.1 AA szabványnak megfelelő komponensek
- **Rugalmasság**: Könnyen testreszabható Tailwind osztályokkal
- **Teljesítmény**: Optimalizált bundle méret és runtime teljesítmény
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
