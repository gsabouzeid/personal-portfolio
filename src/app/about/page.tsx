import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const t = useTranslations("about");

  return (
    <div className="grid grid-cols-[auto] place-items-center justify-items-center md:grid-cols-2">
      <div className="w-[75%] md:w-auto" data-aos="fade-right">
        <Image
          src={"/about.jpeg"}
          width={500}
          height={500}
          alt={t("picture1Alt")}
          className="h-auto w-125 rounded-[25px] shadow-[10px_10px_5px_black] transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div
        className="p-10 text-[15px] md:[&>p]:text-[20px]"
        data-aos="fade-left"
      >
        <h2 className="pb-4 text-center text-[30px] font-bold md:text-[40px]">
          {t.rich("section1Title", {
            highlight: (chunks) => (
              <span className="text-sky-400">{chunks}</span>
            ),
          })}
        </h2>
        <p className="mb-4">
          {t.rich("section1Description1", {
            highlight: (chunks) => (
              <span className="text-sky-400">{chunks}</span>
            ),
          })}
        </p>
        <p className="mb-4">
          {t.rich("section1Description2", {
            university: (chunks) => (
              <span className="text-sky-400">{chunks}</span>
            ),
            degree: (chunks) => <span className="text-sky-400">{chunks}</span>,
            role: (chunks) => <span className="text-sky-400">{chunks}</span>,
          })}
        </p>
        <ul className="mb-4 ml-4 list-disc pl-5 text-[15px] text-sky-400 md:text-[20px]">
          <li>{t("skill1")}</li>
          <li>{t("skill2")}</li>
          <li>{t("skill3")}</li>
        </ul>
        <p className="mb-4">{t("expertiseIn")}</p>
        <ul className="ml-4 list-disc pl-5 text-[15px] text-sky-400 md:text-[20px]">
          <li>{t("skill4")}</li>
          <li>{t("skill5")}</li>
          <li>{t("skill6")}</li>
        </ul>
      </div>
      <div
        className="order-1 p-10 text-[15px] md:order-0 md:[&>p]:text-[20px]"
        data-aos="fade-right"
      >
        <h2 className="pb-4 text-center text-[30px] font-bold md:text-[40px]">
          {t("section2Title")}
        </h2>
        <p className="mb-4">
          {t.rich("section2Description1", {
            highlight: (chunks) => (
              <span className="text-sky-400">{chunks}</span>
            ),
          })}
        </p>
        <ul className="mb-4 ml-4 list-disc pl-5 text-[15px] md:text-[20px]">
          <li>{t("section2Description1Subitem1")}</li>
          <li>{t("section2Description1Subitem2")}</li>
        </ul>
        <p className="mb-4">
          {t.rich("section2Description2", {
            highlight: (chunks) => (
              <span className="text-sky-400">{chunks}</span>
            ),
          })}
        </p>
        <ul className="mb-4 ml-4 list-disc pl-5 text-[15px] md:text-[20px]">
          <li>{t("section2Description2Subitem1")}</li>
        </ul>
        <p className="mb-4">
          {t.rich("section2Description3", {
            highlight: (chunks) => (
              <span className="text-sky-400">{chunks}</span>
            ),
          })}
        </p>
        <ul className="ml-4 list-disc pl-5 text-[15px] md:text-[20px]">
          <li>{t("section2Description3Subitem1")}</li>
          <li>{t("section2Description3Subitem2")}</li>
        </ul>
      </div>
      <div className="w-[75%] md:w-auto" data-aos="fade-left">
        <Image
          src={"/bouldering.jpg"}
          width={500}
          height={333}
          alt={t("picture2Alt")}
          className="h-auto rounded-[25px] shadow-[10px_10px_5px_black] transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
}
