import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Adriana Connect - Blank Page",
  description: "Adriana Connect blank oldal példa",
};

export default function BlankLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
