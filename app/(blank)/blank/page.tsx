'use client';

import Link from 'next/link';
import { tokens } from '@fluentui/react-components';

export default function BlankPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="rounded-lg shadow p-8" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
        <h1 className="text-2xl font-bold mb-4" style={{ color: tokens.colorNeutralForeground1 }}>Üdvözöljük!</h1>
        <p style={{ color: tokens.colorNeutralForeground2 }}>
          Ez egy teljesen önálló blank oldal az Adriana Connect navbar-ral.
        </p>
        <p className="mt-2" style={{ color: tokens.colorNeutralForeground2 }}>
          Ez az oldal nem használja a design system layout-ját - van egy összecsukható navigation sidebar.
        </p>
        <p className="mt-2" style={{ color: tokens.colorNeutralForeground2 }}>
          A navbar tartalmazza:
        </p>
        <ul className="list-disc list-inside mt-2" style={{ color: tokens.colorNeutralForeground2 }}>
          <li>Adriana Accounting és Connect logókat (valódi képek)</li>
          <li>Központi szöveg (eltűnik mobilon)</li>
          <li>Terhelés összege gomb (eltűnik mobilon)</li>
          <li>Felhasználói profil menü</li>
        </ul>
        <p className="mt-4" style={{ color: tokens.colorNeutralForeground2 }}>
          <strong>Navigáció:</strong> A bal oldali fogaskerékre kattintva nyitható ki a menü, majd a nyíllal zárható be.
        </p>
        <div className="mt-6">
          <Link href="/" className="underline" style={{ color: tokens.colorBrandForeground1 }}>
            ← Vissza a design system főoldalára
          </Link>
        </div>
      </div>
    </div>
  );
}
