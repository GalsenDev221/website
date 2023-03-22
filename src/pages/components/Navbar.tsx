import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

import Donation from "./announcements/Donation";
import GalsenDevLogo from "./GalsenDevLogo";
import GithubLink from "./GithubLink";

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
      <div className="w-full z-20 sticky top-0">
        <Donation />
        <header
          aria-label="Site Header"
          className={`${grotesk.className} shadow-sm bg-white/30 backdrop-filter backdrop-blur-lg`}
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
          <Transition as={Fragment} show={isOpen}>
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
                <Dialog.Panel className="fixed inset-y-0 left-0 z-20 w-full overflow-y-auto bg-white px-4 py-4 max-w-[250px]">
                  <div className="flex justify-end">
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

export default Navbar;
