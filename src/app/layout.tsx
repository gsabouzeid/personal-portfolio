import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import AOSInit from "../components/aos-init";
import SiteShell from "../components/layout/site-shell";
import "../index.css";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Garrett's Portfolio",
  description:
    "Software developer specializing in frontend engineering. View my portfolio to learn about myself and my skills.",
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <div id="root">
          <AOSInit />
          <Analytics />
          <SpeedInsights />
          <NextIntlClientProvider>
            <SiteShell>{children}</SiteShell>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
