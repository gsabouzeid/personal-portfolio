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

interface NavProps {
  onToggleNav: () => void;
}

const Nav = ({ onToggleNav }: NavProps) => {
  const t = useTranslations();

  return (
    <nav className="sticky top-0 z-1 flex h-25 items-center justify-between bg-black/75 px-5 text-3xl">
      <Link href={ROUTES.HOME} onClick={playNavSound}>
        <Image
          src={"/nav-logo.png"}
          alt={t("nav.logoAltText")}
          width={50}
          height={50}
        />
      </Link>
      <div className="hidden items-center gap-12.5 md:flex">
        <Link
          className="after:block after:h-1.25 after:w-0 after:rounded-md after:bg-sky-400 after:transition-all after:duration-300 after:ease-out after:content-[''] hover:after:w-full active:after:bg-white"
          href={ROUTES.HOME}
          onClick={playNavSound}
        >
          <div className="flex items-center gap-2.5">
            <HouseDoor />
            {t("nav.home")}
          </div>
        </Link>
        <Link
          className="after:block after:h-1.25 after:w-0 after:rounded-md after:bg-sky-400 after:transition-all after:duration-300 after:ease-out after:content-[''] hover:after:w-full active:after:bg-white"
          href={ROUTES.ABOUT}
          onClick={playNavSound}
        >
          <div className="flex items-center gap-2.5">
            <Person />
            {t("nav.about")}
          </div>
        </Link>
        <Link
          className="after:block after:h-1.25 after:w-0 after:rounded-md after:bg-sky-400 after:transition-all after:duration-300 after:ease-out after:content-[''] hover:after:w-full active:after:bg-white"
          href={ROUTES.SKILLS}
          onClick={playNavSound}
        >
          <div className="flex items-center gap-2.5">
            <Lightbulb />
            {t("nav.skills")}
          </div>
        </Link>
        <a
          className="resumeLink relative mb-1.25 rounded-xl border-2 p-2.5 text-sky-400 hover:text-sky-300 active:top-1"
          href={"./resume.pdf"}
          download="garrett-abouzeid-resume.pdf"
          onClick={playNavSound}
        >
          <div className="flex items-center gap-2.5">
            <LinkIcon />
            {t("nav.resume")}
          </div>
        </a>
      </div>
      <button
        className="navItemsButton block cursor-pointer hover:text-sky-400 active:text-sky-300 md:hidden"
        aria-label={t("nav.toggleNav")}
        onClick={() => {
          playNavSound();
          onToggleNav();
        }}
      >
        <List />
      </button>
    </nav>
  );
};

export default Nav;
