import Image from "next/image";
import hero from "/public/img/hero_galsendev.png";

const HeroSection = () => {
  return (
    // TODO: use a padding value somewhat equal to the Navbar height
    <section className="pt-28">
      <div className="mx-auto max-w-screen-sm px-4 py-8 sm:py-12 sm:px-6 lg:max-w-screen-xl lg:py-16 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="relative flex justify-center lg:order-last">
            <div className="absolute -top-16 -right-2 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob sm:w-80 sm:h-80"></div>
            <div className="absolute top-16 -left-2 w-64 h-64 bg-baseColor rounded-full mix-blend-multiply filter blur-2xl opacity-60 animation-delay-2000 animate-blob sm:w-80 sm:h-80"></div>
            <Image
              src={hero}
              width="500"
              height="500"
              alt="Landing Illustration"
              loading="eager"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="mt-12 mx-auto max-w-lg lg:m-0 lg:max-w-md">
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
      </div>
    </section>
  );
};

// From this awesome YT tutorial
// https://www.youtube.com/watch?v=Tmkr2kKUEgU
const ImgBlurEffect = () => (
  <div className="relative max-w-md mx-auto">
    <div className="absolute -top-16 -left-4 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-ing"></div>
    <div className="absolute -bottom-16 -right-4 w-80 h-80 bg-galsen rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-ing"></div>
    <div className="relative h-0 pb-[100%] sm:max-w-xl">
      <Image
        src={hero}
        width="350"
        height="350"
        alt="Landing Illustration"
        loading="eager"
        placeholder="blur"
        className="absolute w-full h-full object-cover"
      />
    </div>
  </div>
);

export default HeroSection;
