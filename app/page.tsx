"use client";
import { features } from "process";
import Hero from "../components/section/Hero";
import Introduction from "../components/section/Introduction";
import Services from "../components/section/Services";
import ContactForm from "../components/section/ContactForm";
import Developers from "../components/section/Developers";
/* portfolio fullstact developer */
export default function Home() {
  return (
    <main className="">
      {/* hero section for */}
      <section id="hero" className="">
        <Hero />
      </section>
      {/* Introduction section */}
      <section id="introduction" className="py-8 flex justify-center">
        <Introduction />
      </section>
      <section id="services" className="py-8 flex justify-center">
        <Services />
      </section>
{/* //! relesed later
      <section id="featured_projects"></section>
     */}
      <section id="contact" className="py-8 flex justify-center">
      <Developers />
      </section>
      <section id="contact_form" className="py-8 flex justify-center">
      <ContactForm/>
      </section>

    </main>
  );
}
