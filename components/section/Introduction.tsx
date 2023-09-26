import Image from "next/image";

export default function Introduction() {
  // 30% image 60% text 10& for margin or padding
  // left side image right side text
  return (
    <div className="container">
      <div className="bg-accent flex md:flex-row flex-col  border-4 border-primary shadow-lg justify-center">
        <div className="avatar">
          <div className="md:w-96 max-sm:px-12 max-sm:py-6">
            <img className="" src="./images/home.jpg" alt="Mainm0e" />
          </div>
        </div>
        <div className="md:pl-16 flex justify-center  md:border-l-4 max-sm:border-t-4 border-primary shadow-lg">
          <div className="md:px-8 md:py-16">
            <h1 className="text-3xl md:text-5xl leading-relaxed md:leading-snug font-bold text-text-label text-center md:text-left">
              Hi, I'm Adi
            </h1>
            <p className="text-base md:text-2xl leading-relaxed md:leading-snug mt-4 text-text-neutral text-center md:text-left">
              I'm a fullstack developer with a passion for building beautiful
              and functional user experiences.
            </p>
            <div className="flex justify-center md:justify-start mt-6">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
