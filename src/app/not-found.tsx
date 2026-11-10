import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="text-8xl">{t("404")}</h1>
      <h2 className="my-5 text-4xl">{t("notFound")}</h2>
      <p>
        {t("click")}{" "}
        <Link
          href="/"
          className="text-sky-700 hover:underline active:text-sky-900 dark:text-sky-400 dark:active:text-sky-300"
        >
          {t("here")}
        </Link>{" "}
        {t("toReturn")}
      </p>
    </div>
  );
}
