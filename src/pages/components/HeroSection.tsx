import Image from "next/image";
import hero from "/public/img/hero_galsendev.png";

const HeroSection = () => {
  return (
    <section className="py-28">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <div>
                {/* PERF: We can use this gradiant on every section title (maybe) */}
                <h2 className="text-1xl font-bold sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-green-300">
                  Empowering Senegal's tech scene
                </h2>
                <h2 className="text-1xl font-bold sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-300 to-yellow-200">
                  Connecting developers
                </h2>
                <h2 className="text-1xl font-bold sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-red-500">
                  Sharing knowledge & offering community support
                </h2>

                <p className="mt-4 text-gray-600">
                  Galsen DEV est une communauté qui regroupe les développeurs
                  sénégalais dans le but de mettre en place un écosystème favorable
                  à la création et au partage entre développeurs et de vulgariser la
                  programmation partout au Sénégal.
                </p>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                src={hero}
                width="500"
                height="500"
                alt="Landing Illustration"
                loading="eager"
                placeholder="blur"
                className="absolute object-cover"
              />
            </div>
        </div>
    </section>

  );
};

export default HeroSection;
