'use client';

import { Card, CardHeader } from '@fluentui/react-components';
import { 
  CircleRegular, 
  SquareRegular,
  PersonRegular,
  FlagRegular,
  CheckmarkCircleRegular,
  HomeRegular,
  ChevronDownRegular,
  ImageRegular,
  PaintBrushRegular,
  TextFontRegular,
  ColorRegular,
  GridRegular,
} from '@fluentui/react-icons';
import Link from 'next/link';

const componentSections = [
  {
    title: 'Button',
    description: 'Gombok minden formában és stílusban.',
    href: '/components/button',
    icon: CircleRegular,
  },
  {
    title: 'Card',
    description: 'Flexibilis kártya komponensek tartalomhoz.',
    href: '/components/card',
    icon: SquareRegular,
  },
  {
    title: 'Avatar',
    description: 'Profilképek és felhasználói avatárok.',
    href: '/components/avatar',
    icon: PersonRegular,
  },
  {
    title: 'Badge',
    description: 'Státusz és értesítési jelvények.',
    href: '/components/badge',
    icon: FlagRegular,
  },
  {
    title: 'Checkbox',
    description: 'Jelölőnégyzetek űrlapokhoz.',
    href: '/components/checkbox',
    icon: CheckmarkCircleRegular,
  },
  {
    title: 'Breadcrumb',
    description: 'Navigációs útvonal megjelenítés.',
    href: '/components/breadcrumb',
    icon: HomeRegular,
  },
  {
    title: 'Accordion',
    description: 'Összecsukható tartalom szekciók.',
    href: '/components/accordion',
    icon: ChevronDownRegular,
  },
  {
    title: 'Carousel',
    description: 'Képgalériák és slider komponensek.',
    href: '/components/carousel',
    icon: ImageRegular,
  },
];

const designSections = [
  {
    title: 'Színek',
    description: 'Teljes színpaletta világos és sötét témához.',
    href: '/design/colors',
    icon: ColorRegular,
  },
  {
    title: 'Tipográfia',
    description: 'Betűtípusok, méretek és stílusok.',
    href: '/design/typography',
    icon: TextFontRegular,
  },
  {
    title: 'Spacing',
    description: 'Konzisztens távolságok és elrendezés.',
    href: '/design/spacing',
    icon: GridRegular,
  },
  {
    title: 'Shadow',
    description: 'Árnyék rendszer mélység kialakításához.',
    href: '/design/shadow',
    icon: PaintBrushRegular,
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-3">Adriana Design System</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Modern, flexibilis és hozzáférhető komponensek Fluent UI alapokon
        </p>
      </div>

      {/* Banner Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-16 border border-blue-100 dark:border-gray-600">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Adriana Design System
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Az Adriana Design System egy konzisztens, professzionális és hozzáférhető komponenskönyvtár, 
            amely az Adriana projektekben használatos. Célja, hogy egységes felhasználói élményt nyújtson 
            minden alkalmazásban, miközben gyors fejlesztést és könnyű karbantarthatóságot biztosít.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            A rendszer két bevált technológiára épül:{' '}
            <a 
              href="https://react.fluentui.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
              style={{ color: 'var(--colorBrandForeground1, #0078d4)' }}
            >
              Fluent UI React v9
            </a>
            {' '}modern és hozzáférhető komponenseket biztosít a UI építőelemekhez, míg a{' '}
            <a 
              href="https://tailwindcss.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
              style={{ color: 'var(--colorBrandForeground1, #0078d4)' }}
            >
              Tailwind CSS
            </a>
            {' '}gyors és rugalmas styling lehetőségeket kínál az egyedi designhoz.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Ez a kombináció lehetővé teszi a fejlesztők számára, hogy gyorsan építsenek reszponzív, 
            testreszabható felületeket világos és sötét témákkal, miközben megtartják a design konzisztenciát 
            az összes Adriana alkalmazásban.
          </p>
        </div>
      </div>

      {/* Components Section */}
      <section className="mt-16 mb-16">
        <h2 className="text-3xl font-bold mb-8">Komponensek</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {componentSections.map((section) => (
            <Link 
              key={section.href} 
              href={section.href} 
              className="no-underline text-inherit block h-full"
            >
              <Card 
                className="h-full cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <CardHeader
                  image={<section.icon className="text-2xl text-blue-600" />}
                  header={
                    <div className="text-lg font-semibold mb-1">{section.title}</div>
                  }
                  description={
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {section.description}
                    </div>
                  }
                />
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Design Section */}
      <section className="mt-16 mb-16">
        <h2 className="text-3xl font-bold mb-8">Design Rendszer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designSections.map((section) => (
            <Link 
              key={section.href} 
              href={section.href} 
              className="no-underline text-inherit block h-full"
            >
              <Card 
                className="h-full cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <CardHeader
                  image={<section.icon className="text-2xl text-blue-600" />}
                  header={
                    <div className="text-lg font-semibold mb-1">{section.title}</div>
                  }
                  description={
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {section.description}
                    </div>
                  }
                />
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
