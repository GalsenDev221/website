import Image from "next/image"
import fixing from "/public/svg/fixing.svg"
import coding from "/public/svg/coding.svg"

const ActivitySection = () => {
  return (
    <section>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8">
        <div>
          <Image
            className="w-full"
            src={fixing}
            width="400"
            height="400"
            alt="Illustration"
            loading="eager"
          />
        </div>
        <div className="mt-4 md:mt-0 flex items-center justify-center">
          <div>
            <h2 className="text-gray-600 font-bold text-4xl">
              Vous avez un <span className="text-blue-400">problème</span>,
            </h2>
            <h2 className="text-gray-600 font-bold text-4xl">
              nous avons la <span className="text-blue-700">solution</span>
            </h2>
            <div className="max-w-2xl py-4 text-base mt-2 text-gray-600 lg:text-base xl:text-base">
              <p>Quelque soit votre problème, ensemble nous</p>
                <p>trouverons une solution. Que ce soit un oubli de</p>
                <p>point-virgule ou bien comment centrer une div</p>
              <p>avec CSS, la communauté est là pour vous.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8">
        <div className="mt-4 md:mt-0">
          <h2 className="text-gray-600 font-bold text-4xl">
            Des <span className="text-blue-700">Live Coding</span> session<br/> pour tout le monde
          </h2>
          <div className="max-w-2xl py-4 text-base mt-2 text-gray-600 lg:text-base xl:text-base">
            <p>La communauté fait des séances de Live Coding</p>
            <p>sur notre serveur Discord.</p>
          </div>
        </div>
        <div>
          <Image
            className="w-full"
            src={coding}
            width="400"
            height="400"
            alt="Illustration"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default ActivitySection
