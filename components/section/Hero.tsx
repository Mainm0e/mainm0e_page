import Image from "next/image";


export default function Hero() {
    const hero_text1 = "I'm a fullstack developer with a passion for building beautiful websites and applications.";
    return (
        <div className=" bg-primary p-6 flex items-center justify-center rounded-lg shadow-lg">
          <div className="w-full md:w-1/2 text-center md:text-left px-8 md:px-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              Hi, I'm <span className="text-blue-500">Adithep</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4">
             {hero_text1}
            </p>
          </div>

          {/* Right side */}
          <div className="w-1/2 flex items-center justify-center">
            <Image
              src="/images/home.jpg"
              alt="welcome"
              width={500}
              height={500}
              className="rounded-full shadow-2xl"
            />
          </div>
        </div>
    )
}