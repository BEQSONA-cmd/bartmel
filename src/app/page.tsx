"use client";
import { posts, services } from "./Posts";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
    };

    return (
        <div className="space-y-16 pb-16">
            {/* About Section */}
            <section id="about" className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img
                            src="/images/13.jpg"
                            alt="About Bartmel Carpentry"
                            className="rounded-lg shadow-xl w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">
                            O <span className="text-amber-600">Bartmel Stolarnia</span>
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Założona w 1986 roku, Bartmel Stolarnia to zaufana marka w dziedzinie mebli na wymiar i
                            aranżacji wnętrz. Łączymy tradycyjne rzemiosło ze współczesnymi technikami, tworząc meble,
                            które przetrwają próbę czasu.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Nasz zespół wykwalifikowanych rzemieślników z dumą realizuje każdy projekt – od pojedynczych
                            mebli po kompleksowe rozwiązania dla domów, biur czy instytucji edukacyjnych.
                        </p>
                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                            <FaQuoteLeft className="text-amber-400 text-2xl mb-4" />
                            <p className="italic text-gray-700 mb-2">
                                "Cierpliwie słuchamy potrzeb klienta, projektujemy, a następnie przekładamy jego wizję
                                na meble na wymiar, zabudowy i oświetlenie. Już po kilku tygodniach efekt końcowy będzie
                                wart oczekiwania!"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Nasze <span className="text-amber-600">Usługi</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Nasza <span className="text-amber-600">Praca</span>
                </h2>

                {/* Featured Post Carousel */}
                <div className="relative mb-16">
                    <div className="relative h-96 overflow-hidden rounded-lg shadow-xl">
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <img
                            src={posts[currentSlide].pictures[0]}
                            alt="Featured work"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                            <p className="text-white text-lg md:text-xl max-w-3xl">{posts[currentSlide].text}</p>
                        </div>
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition"
                        aria-label="Previous slide"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition"
                        aria-label="Next slide"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.slice(0, 6).map((post, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={post.pictures[0]}
                                    alt="Project example"
                                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">{post.text}</p>
                                <div className="flex space-x-2">
                                    {post.pictures.slice(0, 3).map((pic, picIndex) => (
                                        <div key={picIndex} className="w-1/3 h-20 overflow-hidden rounded">
                                            <img
                                                src={pic}
                                                alt="Project detail"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <a
                        href="/gallery"
                        className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-amber-700 transition"
                    >
                        Zobacz wszystkie realizacje
                    </a>
                </div>
            </section>
        </div>
    );
}
