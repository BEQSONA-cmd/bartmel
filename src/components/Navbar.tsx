"use client";
import { FaBars } from "react-icons/fa";

const Logo: string = "/logo.png";

export default function Navbar() {
    return (
        <nav className="p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <a href="/" className="text-blue-500 hover:underline flex flex-col items-center">
                        <img src={Logo} alt="Logo" className="w-64 h-auto" />
                        <span className="text-xl text-gray-600 font-medium mt-1">MANUFAKTURA MEBLOWA</span>
                    </a>
                </div>
                <button className="p-2 rounded hover:bg-gray-100">
                    <FaBars size={24} />
                </button>
            </div>
        </nav>
    );
}
