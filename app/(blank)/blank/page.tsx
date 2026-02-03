import Link from 'next/link';

export default function BlankPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold mb-4">Üdvözöljük!</h1>
        <p className="text-gray-600">
          Ez egy teljesen önálló blank oldal az Adriana Connect navbar-ral.
        </p>
        <p className="text-gray-600 mt-2">
          Ez az oldal nem használja a design system layout-ját - van egy összecsukható navigation sidebar.
        </p>
        <p className="text-gray-600 mt-2">
          A navbar tartalmazza:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Adriana Accounting és Connect logókat (valódi képek)</li>
          <li>Központi szöveg (eltűnik mobilon)</li>
          <li>Terhelés összege gomb (eltűnik mobilon)</li>
          <li>Felhasználói profil menü</li>
        </ul>
        <p className="text-gray-600 mt-4">
          <strong>Navigáció:</strong> A bal oldali fogaskerékre kattintva nyitható ki a menü, majd a nyíllal zárható be.
        </p>
        <div className="mt-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
            ← Vissza a design system főoldalára
          </Link>
        </div>
      </div>
    </div>
  );
}
