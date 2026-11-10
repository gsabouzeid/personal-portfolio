import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  HouseDoor,
  Lightbulb,
  Link as LinkIcon,
  List,
  Person,
} from "react-bootstrap-icons";
import { ROUTES } from "../../constants";
import { playNavSound } from "../../utils";
import ThemeToggleButton from "../theme-toggle-button";

interface NavProps {
  onToggleNav: () => void;
}

const Nav = ({ onToggleNav }: NavProps) => {
  const t = useTranslations();

  return (
    <nav className="sticky top-0 z-1 flex h-25 items-center gap-3 bg-slate-300/90 px-5 text-3xl dark:bg-black/75">
      <Link href={ROUTES.HOME} onClick={playNavSound} className="grow">
        <Image
          src={"/nav-logo.png"}
          alt={t("nav.logoAltText")}
          width={50}
          height={50}
        />
      </Link>
      <div className="hidden items-center gap-12.5 md:flex">
        <Link
          className="after:block after:h-1.25 after:w-0 after:rounded-md after:bg-sky-700 after:transition-all after:duration-300 after:ease-out after:content-[''] hover:after:w-full active:after:bg-slate-900 dark:after:bg-sky-400 dark:active:after:bg-white"
          href={ROUTES.HOME}
          onClick={playNavSound}
        >
          <div className="flex items-center gap-2.5">
            <HouseDoor />
            {t("nav.home")}
          </div>
        </Link>
        <Link
          className="after:block after:h-1.25 after:w-0 after:rounded-md after:bg-sky-700 after:transition-all after:duration-300 after:ease-out after:content-[''] hover:after:w-full active:after:bg-slate-900 dark:after:bg-sky-400 dark:active:after:bg-white"
          href={ROUTES.ABOUT}
          onClick={playNavSound}
        >
          <div className="flex items-center gap-2.5">
            <Person />
            {t("nav.about")}
          </div>
        </Link>
        <Link
          className="after:block after:h-1.25 after:w-0 after:rounded-md after:bg-sky-700 after:transition-all after:duration-300 after:ease-out after:content-[''] hover:after:w-full active:after:bg-slate-900 dark:after:bg-sky-400 dark:active:after:bg-white"
          href={ROUTES.SKILLS}
          onClick={playNavSound}
        >
          <div className="flex items-center gap-2.5">
            <Lightbulb />
            {t("nav.skills")}
          </div>
        </Link>
        <a
          className="resumeLink relative mb-1.25 rounded-xl border-2 p-2.5 text-sky-700 hover:text-sky-800 active:top-1 dark:text-sky-400 dark:hover:text-sky-300"
          href="./garrett-abouzeid-resume.pdf"
          target="_blank"
          rel="noopener"
          onClick={playNavSound}
        >
          <div className="flex items-center gap-2.5">
            <LinkIcon />
            {t("nav.resume")}
          </div>
        </a>
      </div>
      <button
        className="navItemsButton block cursor-pointer hover:text-sky-700 active:text-sky-900 md:hidden dark:hover:text-sky-400 dark:active:text-sky-300"
        aria-label={t("nav.toggleNav")}
        onClick={() => {
          playNavSound();
          onToggleNav();
        }}
      >
        <List />
      </button>
      <ThemeToggleButton />
    </nav>
  );
};

export default Nav;
