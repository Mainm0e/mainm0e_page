import AboutProject from "../../components/section/AboutProject";
import AboutSkill from "../../components/section/AboutSkill";
import Label from "../../components/common/Label";

export default function About() {
  return (
<<<<<<< HEAD
    <div className="bg-secondary p-6 flex flex-col gap-6 pt-32">
=======
    <div className="bg-secondary p-6 flex flex-col gap-6">
>>>>>>> 86ff7b944db0c72aeefa98931dfb33233842d435
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