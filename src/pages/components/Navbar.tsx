import { useState } from 'react'
import { Dialog } from "@headlessui/react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    // TODO: transform the HTML attributes à la JSX
    <header aria-label="Site Header" className="shadow-sm mb-16">
      <div
        className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
      >
        {/* TODO: Use <Link /> here */}
        <a className="text-blue-600 font-bold" href="/">
          <GalseDevLogo />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block">
            {/* Use <Link /> here */}
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                  Accueil
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                  Events
                </a>
              </li><li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block"><GithubLink /></div>

            {/* TODO: Add ring utility for keyboard users */}
            <button
              type="button"
              className="block text-gray-700 hover:text-gray-400 md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* FIX: There is a slight vertical shift */}
      <Dialog as="div" className="md:hidden" open={isOpen} onClose={setIsOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 text-blue-600 font-bold">
              <GalseDevLogo />
            </a>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Accueil
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Events
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
              </div>
              <div className="py-6">
                <GithubLink />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

// TODO: make this a component since it's used in Navbar & Footer
const GithubLink = () => (
  <a
    href="/"
    rel="noreferrer"
    target="_blank"
    className="text-gray-700 transition hover:opacity-75"
  >
    <span className="sr-only">GitHub</span>

    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clip-rule="evenodd"
      />
    </svg>
  </a>
)

const GalseDevLogo = () => (
  <svg className="w-9 h-9" viewBox="0 0 52 52" fill="none">
    <g clip-path="url(#clip0_119_120)">
      <circle cx="26" cy="26" r="25" fill="url(#paint0_linear_119_120)" stroke="white" stroke-width="2" />
      <path d="M32.3991 10.1016C33.1716 10.4006 33.5555 11.2693 33.2564 12.0419L22.3394 40.2442C22.0404 41.0168 21.1716 41.4006 20.3991 41.1016C19.6265 40.8025 19.2427 39.9338 19.5417 39.1612L30.4587 10.9589C30.7578 10.1863 31.6265 9.80249 32.3991 10.1016Z" fill="white" />
      <path d="M6.70915 25.06L17.7092 16.56C19.4806 15.6743 21.2087 17.56 19.2092 19.0601C18.3965 19.6698 16.6424 21.0714 14.8152 22.5314C12.8268 24.1202 10.7517 25.7783 9.70945 26.56C11.7095 28.06 19.7092 34.5601 19.7092 34.5601C21.2087 36.06 19.4762 37.9735 17.7092 36.5601C16.6909 35.7457 15.1754 34.5996 13.5338 33.3582C11.1442 31.5511 8.48747 29.542 6.70915 28.0601C5.81973 27.318 5.70911 26.06 6.70915 25.06Z" fill="white" />
      <path d="M34.5714 16.56L45.5714 25.06C46.5714 26.06 46.4608 27.318 45.5714 28.0601C43.7931 29.542 41.1365 31.551 38.7469 33.3581C37.1052 34.5995 35.5896 35.7457 34.5714 36.5601C32.8044 37.9735 31.0718 36.06 32.5714 34.5601C32.5714 34.5601 40.5711 28.06 42.5711 26.56C41.5288 25.7783 39.4538 24.1203 37.4653 22.5314C35.6381 21.0714 33.884 19.6698 33.0714 19.0601C31.0718 17.56 32.7999 15.6743 34.5714 16.56Z" fill="white" />
    </g>
    <defs>
      <linearGradient id="paint0_linear_119_120" x1="1.31288e-07" y1="29" x2="67" y2="26" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4986FF" />
        <stop offset="1" stop-color="#0C48AE" />
      </linearGradient>
      <clipPath id="clip0_119_120">
        <rect width="52" height="52" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default Navbar
