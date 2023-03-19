import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

import Donation from "./announcements/Donation";
import GalsenDevLogo from "./GalsenDevLogo";

import { Space_Grotesk } from "@next/font/google";
const grotesk = Space_Grotesk({ subsets: ["latin"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const link = [
    { name: "Accueil", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
    { name: "A Propos", path: "/about" },
  ];

  return (
    <>
      <div className="fixed w-full z-20 sticky-nav">
        <Donation />
        <header
          aria-label="Site Header"
          className={`${grotesk.className} shadow-sm mb-16 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30`}
        >
          <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <Link className="text-blue-600 font-bold" href="/">
              <GalsenDevLogo />
            </Link>

            <div className="flex flex-1 items-center justify-end md:justify-between">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  {link.map((item, index) => (
                    <li key={index}>
                      <Link
                        className="text-gray-900 transition hover:text-gray-600/75"
                        key={index}
                        href={item.path}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="hidden md:block">
                  <GithubLink />
                </div>

                {/* TODO: Add ring utility for keyboard users */}
                <button
                  type="button"
                  className="block text-gray-700 hover:text-gray-400 md:hidden"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Toggle menu</span>
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            show={isOpen}
          >
            <Dialog as="div" className="md:hidden" onClose={setIsOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 z-20 bg-black bg-opacity-50" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 -translate-x-3"
                enterTo="opacity-100 translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-3"
              >
                <Dialog.Panel className="fixed inset-y-0 left-0 z-20 w-full overflow-y-auto bg-white px-4 py-4 max-w-[250px] sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  {/* TODO: Do we need the logo here? */}

                  {/* <a href="#" className="-m-1.5 p-1.5 text-blue-600 font-bold"> */}
                  {/*   <GalsenDevLogo /> */}
                  {/* </a> */}

                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="w-8 h-8" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-12 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {link.map((item, index) => (
                        <Link
                          className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          key={index}
                          href={item.path}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6">
                      <GithubLink />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
              </Transition.Child>
            </Dialog>
          </Transition>
        </header>
      </div>
    </>
  );
};

// TODO: make this a component since it's used in Navbar & Footer
const GithubLink = () => (
  <a
    href="https://github.com/GalsenDev221"
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
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  </a>
);

export default Navbar;
