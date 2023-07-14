import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return(
        <nav className="flex justify-between items-end py-4 px-9">
            <div className="flex items-end space-x-3">
                <Image src="/img/pokeball.png" width="30" height="30" alt="pokeball"/>
                <h1>Pokenext</h1>
            </div>
            <ul className="flex space-x-4">
                <Link className="hover:underline" href="/">Home</Link>
                <Link className="hover:underline" href="/about">Sobre</Link>
            </ul>
        </nav>
    )
}