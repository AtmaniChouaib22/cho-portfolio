import { getColorClasses } from "@/utils/helpers";

interface SkillsCompoProps {
  title: string;
  skills: string[];
  color: string;
}

const SkillsCompo = ({ title, skills, color }: SkillsCompoProps) => {
  return (
    <div className="mb-4">
      <h4 className="text-xl font-semibold mb-2 text-custom-text">{title}</h4>
      <div>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill, index) => {
            const colorClasses = getColorClasses(color);
            return (
              <li
                key={index}
                className={`${colorClasses.bg} rounded-xl px-2 py-1`}
              >
                <span className={colorClasses.text}>{skill}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SkillsCompo;
