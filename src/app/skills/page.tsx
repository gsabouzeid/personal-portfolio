import { useTranslations } from "next-intl";
import SkillPill from "../../components/skills/skill-pill";
import { SKILLS } from "../../constants";

export default function Page() {
  const t = useTranslations();

  SKILLS.languages.sort((a, b) => a.name.localeCompare(b.name));
  SKILLS.frameworks.sort((a, b) => a.name.localeCompare(b.name));
  SKILLS.testing.sort((a, b) => a.name.localeCompare(b.name));
  SKILLS.tools.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="skillsContainer flex flex-col gap-3.75">
      <div
        className="categoryContainer animate-fade-in-top rounded-xl bg-black/75 p-5 opacity-0 [animation-delay:calc(var(--i)*0.2s)]"
        style={{ "--i": 0 } as React.CSSProperties}
      >
        <h2 className="mb-5">{t("skills.languages")}</h2>
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
        <h2 className="mb-5">{t("skills.librariesAndFrameworks")}</h2>
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
        <h2 className="mb-5">{t("skills.testingAndQa")}</h2>
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
        <h2 className="mb-5">{t("skills.tools")}</h2>
        <div className="flex flex-wrap gap-3.75">
          {SKILLS.tools.map((tool) => (
            <SkillPill key={tool.name} skill={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
