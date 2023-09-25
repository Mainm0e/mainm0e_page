import AboutProject from "./AboutProject";
import AboutSkill from "./AboutSkill";
import Label from "./Label";

export default function About() {
  return (
    <div className="bg-secondary p-6 flex flex-col gap-6">
      <Label label="" value="Tools" icon="fa-solid fa-screwdriver-wrench" />
      <AboutSkill />
      <Label label="" value="Projects"  icon="fa-solid fa-parachute-box"  />
      <AboutProject/>
    </div>
  );
}