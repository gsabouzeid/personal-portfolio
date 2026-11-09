import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import SkillPill from "../../components/skills/skill-pill";
import { SKILLS } from "../../constants";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore Garrett Abou-Zeid's skills in programming languages, libraries, frameworks, testing, and tools. Discover his expertise and proficiency in various technologies.",
};

export default function Page() {
  const t = useTranslations("skills");

  SKILLS.languages.sort((a, b) => a.name.localeCompare(b.name));
  SKILLS.frameworks.sort((a, b) => a.name.localeCompare(b.name));
  SKILLS.testing.sort((a, b) => a.name.localeCompare(b.name));
  SKILLS.tools.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="skillsContainer flex flex-col gap-3.75">
      <h1 className="text-[30px] font-bold md:text-[40px]">{t("mySkills")}</h1>
      <div
        className="categoryContainer animate-fade-in-top rounded-xl bg-black/75 p-5 opacity-0 [animation-delay:calc(var(--i)*0.2s)]"
        style={{ "--i": 0 } as React.CSSProperties}
      >
        <h2 className="mb-5">{t("languages")}</h2>
        <div className="flex flex-wrap gap-3.75">
          {SKILLS.languages.map((lan) => (
            <SkillPill key={lan.name} skill={lan} />
          ))}
        </div>
      </div>
      <div
        className="categoryContainer animate-fade-in-top rounded-xl bg-black/75 p-5 opacity-0 [animation-delay:calc(var(--i)*0.2s)]"
        style={{ "--i": 1 } as React.CSSProperties}
      >
        <h2 className="mb-5">{t("librariesAndFrameworks")}</h2>
        <div className="flex flex-wrap gap-3.75">
          {SKILLS.frameworks.map((fw) => (
            <SkillPill key={fw.name} skill={fw} />
          ))}
        </div>
      </div>
      <div
        className="categoryContainer animate-fade-in-top rounded-xl bg-black/75 p-5 opacity-0 [animation-delay:calc(var(--i)*0.2s)]"
        style={{ "--i": 2 } as React.CSSProperties}
      >
        <h2 className="mb-5">{t("testingAndQa")}</h2>
        <div className="flex flex-wrap gap-3.75">
          {SKILLS.testing.map((fw) => (
            <SkillPill key={fw.name} skill={fw} />
          ))}
        </div>
      </div>
      <div
        className="categoryContainer animate-fade-in-top rounded-xl bg-black/75 p-5 opacity-0 [animation-delay:calc(var(--i)*0.2s)]"
        style={{ "--i": 3 } as React.CSSProperties}
      >
        <h2 className="mb-5">{t("tools")}</h2>
        <div className="flex flex-wrap gap-3.75">
          {SKILLS.tools.map((tool) => (
            <SkillPill key={tool.name} skill={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
