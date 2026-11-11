import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import AOSInit from "../components/aos-init";
import SiteShell from "../components/layout/site-shell";
import "../index.css";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  metadataBase: new URL("https://gsabouzeid-portfolio.vercel.app"),
  title: {
    template: "%s | Garrett Abou-Zeid's Portfolio",
    default: "Garrett Abou-Zeid's Portfolio",
  },
  description:
    "Software developer specializing in frontend engineering. View my portfolio to learn about myself and my skills.",
  applicationName: "Garrett Abou-Zeid's Portfolio",
  authors: [
    { name: "Garrett", url: "https://www.linkedin.com/in/garrett-abouzeid/" },
  ],
  generator: "Next.js",
  keywords: [
    "Garrett Abou-Zeid",
    "Next.js",
    "React",
    "TypeScript",
    "Frontend Engineer",
    "Portfolio",
  ],
  creator: "Garrett Abou-Zeid",
  openGraph: {
    type: "website",
    title: "Garrett Abou-Zeid's Portfolio",
    description:
      "Software developer specializing in frontend engineering. View my portfolio to learn about myself and my skills.",
    url: "https://gsabouzeid-portfolio.vercel.app",
    siteName: "Garrett Abou-Zeid's Portfolio",
    images: [
      {
        url: "/og-image.png",
        alt: "Garrett Abou-Zeid's Portfolio",
      },
    ],
  },
  verification: {
    google: "IeVs60FIHgIj6b1iiuE-TcZFuyXgDk9N70DoyP4OiUk",
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: dark)",
      color: "#083344",
    },
    {
      media: "(prefers-color-scheme: light)",
      color: "#e2e8f0",
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
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-slate-200 text-slate-900 dark:bg-cyan-950 dark:text-white">
        <div id="root">
          <AOSInit />
          <Analytics />
          <SpeedInsights />
          <NextIntlClientProvider>
            <ThemeProvider
              attribute="data-theme"
              enableSystem
              defaultTheme="system"
            >
              <SiteShell>{children}</SiteShell>
            </ThemeProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
