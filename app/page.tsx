import { features } from "process";
import Hero from "../components/section/Hero";
import Introduction from "../components/section/Introduction";
/* portfolio fullstact developer */
export default function Home() {
  return (
    <main className="">

      {/* hero section for */}
      <section id="hero" className="pb-16">
        <Hero />
      </section>

      {/* Introduction section */}
      <section id="introduction" className="pb-16">
        <Introduction />
      </section>
{/* //! relesed later
      <section id="featured_projects"></section>
      <section id="services"></section>
     */}
    </main>
  );
}
