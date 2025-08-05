"use client";
import { useState } from "react";
import { FaBars, FaHome, FaInfoCircle, FaImage, FaEnvelope, FaTimes } from "react-icons/fa";

const Logo: string = "/logo.png";

const Links = [
    { name: "Home", href: "/", icon: FaHome },
    { name: "About", href: "/about", icon: FaInfoCircle },
    { name: "Gallery", href: "/gallery", icon: FaImage },
    { name: "Contact", href: "/contact", icon: FaEnvelope },
];

function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="flex justify-end p-4">
                <button className="p-2 rounded hover:bg-gray-100" onClick={onClose} aria-label="Close sidebar">
                    <FaTimes size={30} />
                </button>
            </div>
            <nav className="flex flex-col gap-0 px-6">
                {Links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="flex items-center text-xl gap-3 text-gray-700 hover:text-blue-500 py-4 border-b-2 border-gray-200"
                        onClick={onClose}
                    >
                        <link.icon size={26} />
                        {link.name}
                    </a>
                ))}
            </nav>
        </div>
    );
}

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <nav className="p-4 bg-white shadow-md fixed w-full z-10">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <a href="/" className="text-blue-500 flex flex-col items-center">
                            <img src={Logo} alt="Logo" className="w-48 h-auto" />
                            <span className="text-[0.6em] text-gray-600 font-medium mt-1 tracking-[0.4em]">
                                MANUFAKTURA MEBLOWA
                            </span>
                        </a>
                    </div>
                    <button
                        className="p-2 rounded hover:bg-gray-100"
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Open sidebar"
                    >
                        <FaBars size={30} className="text-gray-700" />
                    </button>
                </div>
            </nav>
            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={() => setSidebarOpen(false)} />
            )}
        </>
    );
}
