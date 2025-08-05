import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";

const contactInfo = {
    address: "ul. Stolarzy 123, Meblowa, Polska",
    phone: "+48 123 456 789",
    email: "kontakt@bartmel.com",
    facebook: "https://www.facebook.com/bartmelmanufakturameblowa/",
    instagram: "https://www.instagram.com/bartmel_stolarnia/",
};

export default function ContactPage() {
    return (
        <section id="contact" className="bg-white py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Skontaktuj <span className="text-amber-500">się z nami</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Skontaktuj się z nami, aby omówić swój projekt mebli na zamówienie lub odwiedź nasz warsztat.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-xl shadow-md p-8 md:p-12">
                    <div className="max-w-md mx-auto">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Nasze dane kontaktowe</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-amber-100 p-3 rounded-full mr-4">
                                    <FaMapMarkerAlt className="text-amber-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700">Adres</h4>
                                    <p className="text-gray-600">{contactInfo.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-amber-100 p-3 rounded-full mr-4">
                                    <FaPhone className="text-amber-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700">Telefon</h4>
                                    <a
                                        href={`tel:${contactInfo.phone}`}
                                        className="text-gray-600 hover:text-amber-600 transition"
                                    >
                                        {contactInfo.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-amber-100 p-3 rounded-full mr-4">
                                    <FaEnvelope className="text-amber-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700">E-mail</h4>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-gray-600 hover:text-amber-600 transition"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="mt-10 text-center">
                            <h4 className="font-medium text-gray-700 mb-4">Znajdź nas</h4>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href={contactInfo.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-200 hover:bg-amber-100 p-3 rounded-full transition"
                                >
                                    <FaFacebook className="text-gray-700 text-xl" />
                                </a>
                                <a
                                    href={contactInfo.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-200 hover:bg-amber-100 p-3 rounded-full transition"
                                >
                                    <FaInstagram className="text-gray-700 text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
