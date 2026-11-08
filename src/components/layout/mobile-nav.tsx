import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  HouseDoor,
  Lightbulb,
  Link as LinkIcon,
  Person,
} from "react-bootstrap-icons";
import { ROUTES } from "../../constants";
import { playNavSound } from "../../utils";

interface MobileNavProps {
  toggleNav: boolean;
  onDismissToggle: () => void;
}

const MobileNav = ({ toggleNav, onDismissToggle }: MobileNavProps) => {
  const t = useTranslations();

  function handleNavClick() {
    playNavSound();
    onDismissToggle();
  }

  return (
    <nav
      className={`fixed z-1 mt-25 w-full bg-black/75 transition-[visibility,opacity] duration-250 ease-out ${!toggleNav ? "invisible opacity-0" : ""}`}
    >
      <div className="flex flex-col">
        <Link
          href={ROUTES.HOME}
          onClick={handleNavClick}
          className="hover:bg-cyan-800 active:bg-cyan-700"
        >
          <div className="flex items-center justify-center gap-2.5 p-2.5">
            <HouseDoor />
            {t("nav.home")}
          </div>
        </Link>
        <Link
          href={ROUTES.ABOUT}
          onClick={handleNavClick}
          className="hover:bg-cyan-800 active:bg-cyan-700"
        >
          <div className="flex items-center justify-center gap-2.5 p-2.5">
            <Person />
            {t("nav.about")}
          </div>
        </Link>
        <Link
          href={ROUTES.SKILLS}
          onClick={handleNavClick}
          className="hover:bg-cyan-800 active:bg-cyan-700"
        >
          <div className="flex items-center justify-center gap-2.5 p-2.5">
            <Lightbulb />
            {t("nav.skills")}
          </div>
        </Link>
        <a
          href={"./resume.pdf"}
          download="garrett-abouzeid-resume.pdf"
          onClick={handleNavClick}
          className="hover:bg-cyan-800 active:bg-cyan-700"
        >
          <div className="flex items-center justify-center gap-2.5 p-2.5">
            <LinkIcon />
            {t("nav.resume")}
          </div>
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
