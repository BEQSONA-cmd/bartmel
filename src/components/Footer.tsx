import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const contactInfo = {
    address: "123 Woodworking Street, Furniture City, Poland",
    phone: "+48 123 456 789",
    email: "contact@bartmel.com",
    facebook: "https://www.facebook.com/bartmelmanufakturameblowa/",
    instagram: "https://www.instagram.com/bartmel_stolarnia/",
};

const quickLinks = [
    { name: "Strona główna", href: "/" },
    { name: "O nas", href: "/about" },
    { name: "Galeria", href: "/gallery" },
    { name: "Kontakt", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-900 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Bartmel Stolarnia</h3>
                        <p className="mb-4 text-gray-800">
                            Specjalizujemy się w projektowaniu i produkcji mebli na zamówienie od 1986 roku. Tworzymy
                            kompleksowe wnętrza domów i biur z wyjątkowym kunsztem.
                        </p>
                        <div className="flex space-x-4">
                            <a href={contactInfo.facebook} className="hover:text-amber-400 transition text-gray-700">
                                <FaFacebook size={20} />
                            </a>
                            <a href={contactInfo.instagram} className="hover:text-amber-400 transition text-gray-700">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Szybkie linki</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-700 hover:text-amber-400 transition">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Kontakt</h3>
                        <div className="space-y-3">
                            <div className="flex items-start text-gray-800">
                                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                                <p>123 Woodworking Street, Furniture City, Poland</p>
                            </div>
                            <div className="flex items-center text-gray-800">
                                <FaPhone className="mr-3" />
                                <a href="tel:+48123456789" className="text-gray-800 hover:text-amber-400 transition">
                                    +48 123 456 789
                                </a>
                            </div>
                            <div className="flex items-center text-gray-800">
                                <FaEnvelope className="mr-3" />
                                <a
                                    href="mailto:contact@bartmel.com"
                                    className="text-gray-800 hover:text-amber-400 transition"
                                >
                                    contact@bartmel.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-400 mt-8 pt-8 text-center text-gray-600">
                    <p>
                        &copy; {new Date().getFullYear()} Bartmel Carpentry. All rights reserved. | Design by{" "}
                        <a href="https://github.com/BEQSONA-cmd" className="text-amber-400 hover:underline">
                            BEQSONA-cmd
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
