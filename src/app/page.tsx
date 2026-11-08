import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();

  return (
    <div className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-5 text-5xl md:text-7xl">{t("home.title")}</h1>
      <p className="text-2xl text-sky-400 md:text-3xl">{t("home.subTitle")}</p>
    </div>
  );
}
