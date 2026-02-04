import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import AcademicProviderWrapper from "@/components/providers/AcademicProviderWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Principal Dashboard - STES",
  description:
    "Principal dashboard for monitoring academics, staff, performance, and approvals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AcademicProviderWrapper>{children}</AcademicProviderWrapper>
      </body>
    </html>
  );
}
