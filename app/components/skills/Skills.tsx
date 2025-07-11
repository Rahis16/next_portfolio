// components/Skills.tsx (no "use client" here)
import SkillApi from "./SkillApi";
import SkillList from "./SkillList";// client component

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20" style={{backgroundColor:"var(--bg-color)"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SkillApi/>
      </div>
    </section>
  );
};

export default Skills;
