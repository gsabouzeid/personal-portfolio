import type { Metadata } from "next";
import { useTranslations } from "next-intl";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Home | Garrett Abou-Zeid's Portfolio",
  description:
    "Welcome to Garrett Abou-Zeid's personal portfolio website. Explore his story and skills as a frontend software developer.",
};

export default function Page() {
  const t = useTranslations("home");

  return (
    <div className="flex flex-1 flex-col justify-center text-center">
      <h1
        className="animate-fade-in-top opacity-0 mb-5 text-5xl [animation-delay:calc(var(--i)*0.2s)] md:text-7xl"
        style={{ "--i": 0 } as React.CSSProperties}
      >
        {t("title")}
      </h1>
      <p
        className="animate-fade-in-bottom opacity-0 text-2xl text-sky-700 [animation-delay:calc(var(--i)*0.2s)] md:text-3xl dark:text-sky-400"
        style={{ "--i": 1 } as React.CSSProperties}
      >
        {t("subTitle")}
      </p>
    </div>
  );
}
