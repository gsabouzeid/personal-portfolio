import { useTranslations } from "next-intl";
import Image from "next/image";
import type { Skill } from "../../constants";

interface SkillProps {
  skill: Skill;
}

const SkillPill = ({ skill }: SkillProps) => {
  const t = useTranslations();

  const name = skill.name;
  const image = skill.image;

  return (
    <div className="skillPill flex items-center gap-2.5 rounded-3xl bg-white px-5 text-black transition-transform duration-300 ease-in-out hover:scale-110">
      <Image src={image.src} width={25} height={25} alt={t(image.altText)} />
      <p className="my-4">{name}</p>
    </div>
  );
};

export default SkillPill;
