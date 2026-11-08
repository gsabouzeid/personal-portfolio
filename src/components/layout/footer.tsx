import { useTranslations } from "next-intl";
import { EnvelopeFill, Github, Linkedin } from "react-bootstrap-icons";
import { playNavSound } from "../../utils";

const LINKEDIN_LINK = "https://www.linkedin.com/in/garrett-abouzeid/";
const GITHUB_LINK = "https://github.com/gsabouzeid";
const EMAIL = "gsabouzeid@gmail.com";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="flex flex-col items-center justify-between gap-3 bg-black/75 p-5 md:flex-row md:gap-6.25">
      <p>{t("footer.createdAndMaintained")}</p>
      <p>{t("footer.copyrightNotice")}</p>
      <div className="flex gap-6.25 md:m-0">
        <a
          className="text-white hover:text-sky-400 active:text-sky-300"
          href={`mailto:${EMAIL}`}
          aria-label={t("footer.emailScreenReader")}
          onClick={playNavSound}
        >
          <EnvelopeFill />
        </a>
        <a
          className="text-white hover:text-sky-400 active:text-sky-300"
          href={GITHUB_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label={t("footer.githubScreenReader")}
          onClick={playNavSound}
        >
          <Github />
        </a>
        <a
          className="text-white hover:text-sky-400 active:text-sky-300"
          href={LINKEDIN_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label={t("footer.linkedinScreenReader")}
          onClick={playNavSound}
        >
          <Linkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
