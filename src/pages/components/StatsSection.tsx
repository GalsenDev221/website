const StatsSection = () => {

  return (
    <section className="m-10 bg-gradient-to-r from-cyan-600 to-blue-500">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div
          className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16"
        >
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl text-white">La communauté en chiffre</h2>
            <p className="mt-4 text-gray-100">
              Créée en 2018, Galsen DEV accueille chaque jours de nouveaux membres.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div
              className="relative text-center block p-4 sm:p-6 lg:p-8"
            >
              <div className="flex justify-center items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white sm:h-8 sm:w-8"
                  viewBox="0 0 79 44"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M22.8335 42V38.6667C22.8335 34.2464 24.5894 30.0072 27.715 26.8816C30.8407 23.7559 35.0799 22 39.5002 22M39.5002 22C43.9204 22 48.1597 23.7559 51.2853 26.8816C54.4109 30.0072 56.1668 34.2464 56.1668 38.6667V42M39.5002 22C42.1523 22 44.6959 20.9464 46.5712 19.0711C48.4466 17.1957 49.5002 14.6522 49.5002 12C49.5002 9.34783 48.4466 6.8043 46.5712 4.92893C44.6959 3.05357 42.1523 2 39.5002 2C36.848 2 34.3045 3.05357 32.4291 4.92893C30.5537 6.8043 29.5002 9.34783 29.5002 12C29.5002 14.6522 30.5537 17.1957 32.4291 19.0711C34.3045 20.9464 36.848 22 39.5002 22ZM2.8335 42V38.6667C2.8335 36.0145 3.88706 33.471 5.76243 31.5956C7.63779 29.7202 10.1813 28.6667 12.8335 28.6667M12.8335 28.6667C14.6016 28.6667 16.2973 27.9643 17.5475 26.714C18.7978 25.4638 19.5002 23.7681 19.5002 22C19.5002 20.2319 18.7978 18.5362 17.5475 17.286C16.2973 16.0357 14.6016 15.3333 12.8335 15.3333C11.0654 15.3333 9.36969 16.0357 8.11945 17.286C6.86921 18.5362 6.16683 20.2319 6.16683 22C6.16683 23.7681 6.86921 25.4638 8.11945 26.714C9.36969 27.9643 11.0654 28.6667 12.8335 28.6667ZM76.1668 42V38.6667C76.1668 36.0145 75.1133 33.471 73.2379 31.5956C71.3625 29.7202 68.819 28.6667 66.1668 28.6667M66.1668 28.6667C67.9349 28.6667 69.6306 27.9643 70.8809 26.714C72.1311 25.4638 72.8335 23.7681 72.8335 22C72.8335 20.2319 72.1311 18.5362 70.8809 17.286C69.6306 16.0357 67.9349 15.3333 66.1668 15.3333C64.3987 15.3333 62.703 16.0357 61.4528 17.286C60.2025 18.5362 59.5002 20.2319 59.5002 22C59.5002 23.7681 60.2025 25.4638 61.4528 26.714C62.703 27.9643 64.3987 28.6667 66.1668 28.6667Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold sm:text-2xl text-white">+ 1.500</h3>
              <p className="mt-1 font-medium text-white">
                Membres
              </p>
            </div>


            <div
              className="relative text-center block p-4 sm:p-6 lg:p-8"
            >
              <div className="flex justify-center items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white sm:h-8 sm:w-8"
                  viewBox="0 0 81 80"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M40.4998 56.6667C36.4443 56.6667 32.9021 55.4033 29.8732 52.8767C26.8465 50.3478 24.9443 47.1667 24.1665 43.3333H7.1665V36.6667H24.1665C24.9443 32.8333 26.8465 29.6522 29.8732 27.1233C32.9021 24.5967 36.4443 23.3333 40.4998 23.3333C44.5554 23.3333 48.0976 24.5967 51.1265 27.1233C54.1532 29.6522 56.0554 32.8333 56.8332 36.6667H73.8332V43.3333H56.8332C56.0554 47.1667 54.1532 50.3478 51.1265 52.8767C48.0976 55.4033 44.5554 56.6667 40.4998 56.6667ZM40.4998 50C43.2776 50 45.6387 49.0278 47.5832 47.0833C49.5276 45.1389 50.4998 42.7778 50.4998 40C50.4998 37.2222 49.5276 34.8611 47.5832 32.9167C45.6387 30.9722 43.2776 30 40.4998 30C37.7221 30 35.361 30.9722 33.4165 32.9167C31.4721 34.8611 30.4998 37.2222 30.4998 40C30.4998 42.7778 31.4721 45.1389 33.4165 47.0833C35.361 49.0278 37.7221 50 40.4998 50Z" fill="white"/>
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold sm:text-2xl text-white">+ 1K</h3>
              <p className="mt-1 font-medium text-white">
                Commits
              </p>
            </div>

            <div
              className="relative text-center block p-4 sm:p-6 lg:p-8"
            >
              <div className="flex justify-center items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white sm:h-8 sm:w-8"
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
              </div>
              <h3 className="mt-4 text-xl font-bold sm:text-2xl text-white">+ 50</h3>
              <p className="mt-1 font-medium text-white">
                Evénements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default StatsSection
