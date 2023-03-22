const PartnersSection = () => (
  <section className="">
    <div className="flex flex-col items-center lg:flex-row lg:justify-between">
      {/* TODO: ngir yallah use the right colors */}
      <h2 className="text-blue-400 font-bold text-4xl sm:text-center lg:text-left">
        Ils nous ont fait <br />
        <span className="text-blue-700">confiance</span>
      </h2>
      <div className="mt-8 flex flex-col gap-2 sm:flex-row lg:mt-0">
        {/* TODO: these should be links */}
        <div className="bg-gray-100 w-72 h-32 flex items-center justify-center">
          <img
            alt="Logo of Propel"
            className="w-40"
            src="https://propel.community/images/PropelLogoBlack.svg?6eed2deeadb712f68727cb157b49e956"
          />
        </div>
        <div className="bg-gray-100 w-72 h-32 flex items-center justify-center">
          <img
            alt="Logo of Xarala"
            className="w-40"
            src="https://www.xarala.co/static/img/logo.b5700a8deb63.png"
          />
        </div>
      </div>
    </div>
  </section>
);

export default PartnersSection;
