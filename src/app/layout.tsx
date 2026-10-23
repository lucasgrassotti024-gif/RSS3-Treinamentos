import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { AppProvider } from "@/context/app-context";
import { AppShell } from "@/components/layout/app-shell";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "RSS3 Treinamentos",
    template: "%s | RSS3 Treinamentos",
  },
  description:
    "Plataforma de treinamentos técnicos industriais, gestão de riscos operacionais e matriz de competências da RSS3 Soluções Industriais LTDA.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen">
        <AppProvider>
          <React.Suspense
            fallback={
              <div className="flex-1 flex items-center justify-center min-h-[50vh]">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <AppShell>
              {children}
              <Footer />
            </AppShell>
          </React.Suspense>
        </AppProvider>
      </body>
    </html>
  );
}
