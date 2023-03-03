import Link from "next/link"

const Custom = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-2 text-white">
            <p className="text-center text-sm font-medium">
                Text ici <Link href="#" className="inline-block underline">LIEN</Link> texte ici aussi.
            </p>
        </div>
    )
}

export default Custom
