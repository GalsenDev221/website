import Image from "next/image"
import Link from "next/link"
import e404 from "/public/svg/404.svg"

const Error404 = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
            <Image
              src={e404}
              width="500"
              height="500"
              alt="404 Illustration"
              loading="eager"
            />
            <p className="mt-4 text-gray-500">Page introuvable</p>
            <Link
            href="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
            >
            Retour vers la page d'accueil
            </Link>
        </div>
    </div>
  );
}

export default Error404
