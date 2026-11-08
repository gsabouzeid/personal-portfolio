import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headersList = await headers();

  // 1. Check if user manually saved a language preference in a cookie
  let locale = cookieStore.get("NEXT_LOCALE")?.value;

  // 2. Fallback: Parse the browser's Accept-Language header
  if (!locale) {
    const acceptLanguage = headersList.get("accept-language");
    // Basic extraction: gets the first 2-letter code (e.g., "en" from "en-US,en;q=0.9")
    locale = acceptLanguage?.split(",")[0].split("-")[0];
  }

  // 3. Fallback: Default language
  const supportedLocales = ["en", "es"];
  if (!locale || !supportedLocales.includes(locale)) {
    locale = "en";
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
