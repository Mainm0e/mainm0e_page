import { features } from "process";
import Hero from "../components/section/Hero";
import Introduction from "../components/section/Introduction";
import Services from "../components/section/Services";
import Contact from "../components/section/Contact";
/* portfolio fullstact developer */
export default function Home() {
  return (
    <main className="">

      {/* hero section for */}
      <section id="hero" className="pb-16">
        <Hero />
      </section>

      {/* Introduction section */}
      <section id="introduction" className="pb-16 flex justify-center">
        <Introduction />
      </section>
      <section id="services" className="pb-16 flex justify-center">
        <Services />
      </section>
{/* //! relesed later
      <section id="featured_projects"></section>
     */}
      <section id="contact" className="pb-16 flex justify-center">
        <Contact />
      </section>
    </main>
  );
}
