import type { Metadata } from "next";
import { useTranslations } from "next-intl";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Home | Garrett's Portfolio",
  description:
    "Welcome to Garrett's personal portfolio website. Explore his story and skills as a frontend software developer.",
};

export default function Page() {
  const t = useTranslations("home");

  return (
    <div className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-5 text-5xl md:text-7xl">{t("title")}</h1>
      <p className="text-2xl text-sky-400 md:text-3xl">{t("subTitle")}</p>
    </div>
  );
}
