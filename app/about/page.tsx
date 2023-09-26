import AboutProject from "../../components/section/AboutProject";
import AboutSkill from "../../components/section/AboutSkill";
import Label from "../../components/common/Label";

export default function About() {
  return (
    <div className="bg-secondary p-6 flex flex-col gap-6 pt-32">
      <section id="skills" className="flex flex-col md:flex-col gap-6 md:pb-16">
      <Label label="" value="Tools" icon="fa-solid fa-screwdriver-wrench" />
      <AboutSkill />
      </section>
      <section id="projects" className="flex flex-col md:flex-col gap-6 md:pb-16">
      <Label label="" value="Projects"  icon="fa-solid fa-parachute-box"  />
      <AboutProject/>
      </section>
    </div>
  );
}