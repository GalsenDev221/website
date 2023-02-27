const StatsSection = () => {

  return (
    <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div
            className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16"
            >
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                <h2 className="text-3xl font-bold sm:text-4xl text-blue-700">Une ?!?</h2>

                <p className="mt-4 text-gray-600">
                Créée en 2018, Galsen DEV accueille <br/>chaque jours de nouveaux membres.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <a
                    href="#"
                    className="relative block rounded-xl border-t-4 border-blue-600 p-4 shadow-xl sm:p-6 lg:p-8"
                    >
                    <div className="flex items-center gap-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                        </svg>

                        <h3 className="text-xl font-bold sm:text-2xl">1.4K</h3>
                    </div>

                    <p className="mt-4 font-medium text-gray-500">
                        Commit
                    </p>
                </a>


                <a
                    href="#"
                    className="relative block rounded-xl border-t-4 border-blue-600 p-4 shadow-xl sm:p-6 lg:p-8"
                    >
                    <div className="flex items-center gap-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                        </svg>

                        <h3 className="text-xl font-bold sm:text-2xl">+1.500</h3>
                    </div>

                    <p className="mt-4 font-medium text-gray-500">
                        Membres
                    </p>
                </a>

                <a
                    href="#"
                    className="relative block rounded-xl border-t-4 border-blue-600 p-4 shadow-xl sm:p-6 lg:p-8"
                    >
                    <div className="flex items-center gap-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                        </svg>

                        <h3 className="text-xl font-bold sm:text-2xl">+50</h3>
                    </div>

                    <p className="mt-4 font-medium text-gray-500">
                        Evénements
                    </p>
                </a>
            </div>
            </div>
        </div>
    </section>

  )
}

export default StatsSection
