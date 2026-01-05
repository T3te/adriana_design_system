import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from './ClientLayout';
import StoreProvider from '@/lib/redux/StoreProvider';

export const metadata: Metadata = {
  title: "Fluent UI Design System",
  description: "Fluent UI React v9 komponensek bemutatása",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body style={{ margin: 0, padding: 0 }}>
        <StoreProvider>
          <ClientLayout>{children}</ClientLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
