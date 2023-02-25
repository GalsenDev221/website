const Footer = () => (
  <footer aria-label="Site Footer" className="bg-white max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
    <div
      className="pt-8 mt-16 border-t border-gray-100 sm:flex sm:items-center sm:justify-between lg:mt-24"
    >
      {/* TODO: Add the SVG logo */}
      <h2 className="text-gray-900 font-bold text-3xl text-center sm:text-left">Galsen Dev</h2>

      <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
        {/* TODO: Add the correct links */}
        <li><YoutubeLink /></li>
        <li><TwitterLink /></li>
        <li><TelegramLink /></li>
        <li><GithubLink /></li>
      </ul>
    </div>
  </footer>
)

const TelegramLink = () => (
  <a
    href="/"
    rel="noreferrer"
    target="_blank"
    className="text-gray-700 transition hover:opacity-75"
  >
    <span className="sr-only">Telegram</span>
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 256 256"
      aria-hidden="true"
    >
      <path
        d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"></path><path fill="#FFF" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z">
      </path>
    </svg>
  </a>
)

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

const TwitterLink = () => (
  <a
    href="/"
    rel="noreferrer"
    target="_blank"
    className="text-gray-700 transition hover:opacity-75"
  >
    <span className="sr-only">Twitter</span>

    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
      />
    </svg>
  </a>
)

const YoutubeLink = () => (
  <a
    href="https://youtube.com"
    rel="noreferrer"
    target="_blank"
    className="text-gray-700 transition hover:opacity-75"
  >
    <span className="sr-only">Dribbble</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 180"
      className="w-6 h-6"
      fill="currentColor"
      aria-hidden="true">
      <path
        d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z">
      </path>
      <path
        fill="#FFF"
        d="m102.421 128.06l66.328-38.418l-66.328-38.418z">
      </path>
    </svg>
  </a>
)

export default Footer
