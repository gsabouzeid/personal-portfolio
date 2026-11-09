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
      <body>
    <html lang={locale} suppressHydrationWarning>
        <div id="root">
          <AOSInit />
          <Analytics />
          <SpeedInsights />
          <NextIntlClientProvider>
            <ThemeProvider enableSystem={true} defaultTheme="system">
              <SiteShell>{children}</SiteShell>
            </ThemeProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
