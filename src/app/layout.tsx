import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import AOSInit from "../components/aos-init";
import SiteShell from "../components/layout/site-shell";
import "../index.css";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Garrett's Portfolio",
};

// eslint-disable-next-line react-refresh/only-export-components
export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: dark)",
      color: "#07232e",
    },
    {
      media: "(prefers-color-scheme: light)",
      color: "#07232e",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <AOSInit />
          <NextIntlClientProvider>
            <SiteShell>{children}</SiteShell>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
