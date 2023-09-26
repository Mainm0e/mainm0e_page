import Hero from "../components/section/Hero";
/* portfolio fullstact developer */
export default function Home() {
  return (
    <main className="bg-secondary flex items-center justify-center py-8 px-32">

      {/* hero section for */}
      <section id="hero" className="">
        <Hero />
      </section>

      {/* Introduction section */}
      <section id="introduction" className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Introduction</h1>
        <p className="text-lg text-gray-600 mt-4">
          I'm a fullstack developer with a passion for building beautiful websites and applications.
        </p>
      </section>

      

      



    </main>
  );
}
