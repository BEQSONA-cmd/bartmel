import { FaCalendarAlt, FaClock, FaTools, FaAward, FaUsers } from "react-icons/fa";

const companyInfo = {
    name: "Bartmel Stolarnia",
    founded: 1986,
    description:
        "Specjalizujemy się w projektowaniu i produkcji mebli na zamówienie. Tworzymy kompletne wnętrza mieszkań i biur z wyjątkowym kunsztem.",
    mission:
        "Uważnie słuchamy potrzeb naszych klientów, projektujemy, a następnie przekładamy ich wizję na meble, zabudowy i oświetlenie, które przewyższają oczekiwania.",
    hours: {
        weekdays: "Poniedziałek - Piątek: 8:00 - 17:00",
        saturday: "Sobota: 9:00 - 14:00",
        sunday: "Niedziela: Zamknięte",
    },
    stats: [
        { value: "37+", label: "Lat doświadczenia", icon: <FaAward className="text-amber-500 text-2xl" /> },
        { value: "5000+", label: "Zrealizowanych projektów", icon: <FaTools className="text-amber-500 text-2xl" /> },
        { value: "100%", label: "Satysfakcja klientów", icon: <FaUsers className="text-amber-500 text-2xl" /> },
    ],
};

export default function AboutPage() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        O <span className="text-amber-500">Bartmel Stolarnia</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Tworzymy wyjątkowe meble i wnętrza od {companyInfo.founded} roku
                    </p>
                </div>

                {/* About Content */}
                <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                    <div className="md:w-1/2">
                        <img
                            src="/images/3.jpg"
                            alt="Warsztat Bartmel Stolarnia"
                            className="rounded-xl shadow-lg w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nasza historia</h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            Założona w {companyInfo.founded} roku, Bartmel Stolarnia rozwinęła się z małego warsztatu w
                            renomowanego producenta mebli obsługującego klientów w całej Polsce.
                        </p>
                        <p className="text-gray-600 mb-6 text-lg">{companyInfo.description}</p>
                        <p className="text-gray-600 text-lg">{companyInfo.mission}</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {companyInfo.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex justify-center mb-4">{stat.icon}</div>
                            <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Working Hours */}
                <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-8 shadow-sm">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        <FaCalendarAlt className="inline-block mr-2 text-amber-500" />
                        Godziny otwarcia
                    </h2>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                            <div className="flex items-center">
                                <FaClock className="text-amber-500 mr-3" />
                                <span className="text-gray-700">Dni robocze</span>
                            </div>
                            <span className="font-medium text-gray-800">{companyInfo.hours.weekdays}</span>
                        </div>

                        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                            <div className="flex items-center">
                                <FaClock className="text-amber-500 mr-3" />
                                <span className="text-gray-700">Sobota</span>
                            </div>
                            <span className="font-medium text-gray-800">{companyInfo.hours.saturday}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <FaClock className="text-amber-500 mr-3" />
                                <span className="text-gray-700">Niedziela</span>
                            </div>
                            <span className="font-medium text-gray-800">{companyInfo.hours.sunday}</span>
                        </div>
                    </div>

                    <div className="mt-8 bg-amber-50 rounded-lg p-4 border border-amber-100">
                        <h4 className="font-medium text-amber-800 mb-2">Odwiedziny w naszym warsztacie</h4>
                        <p className="text-amber-700">
                            Zalecamy wcześniejsze umówienie wizyty, abyśmy mogli poświęcić Państwu pełną uwagę.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
