import Link from "next/link"

const Donation = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-2 text-white">
            <p className="text-center text-sm font-medium">
                Vous pouvez faire un <Link href="#" className="inline-block underline">DON</Link> à la communauté 🤝
            </p>
        </div>
    )
}

export default Donation
