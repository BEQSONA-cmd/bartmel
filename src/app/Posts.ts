export interface Post {
    text: string;
    pictures: string[];
}

export const posts: Post[] = [
    {
        text: "Bartmel – rodzinna stolarnia z Lubichowa od 1986. Robimy meble i całe wnętrza na wymiar. Jakość, styl i funkcjonalność – zapraszamy! 👌",
        pictures: ["/images/3.jpg", "/images/10.jpg", "/images/2.jpg"],
    },
    {
        text: "🔨 Bartwicki – liczy się każdy detal. Tworzymy z pasją i precyzją, bez kompromisów. Skontaktuj się z nami i stwórzmy coś wyjątkowego.",
        pictures: ["/images/26.jpg", "/images/24.jpg", "/images/25.jpg", "/images/27.jpg"],
    },
    {
        text: "Od projektu po montaż – robimy meble i wnętrza, które pasują do Ciebie. Bartmel – precyzja, styl i indywidualne podejście! 🪑💪",
        pictures: ["/images/21.jpg", "/images/22.jpg", "/images/23.jpg"],
    },
    {
        text: "Realizacja wnętrza barber shopu ✂️ Nowoczesny, loftowy styl i pełna funkcjonalność – projekt dla @thebarbershouse w Gdańsku.",
        pictures: ["/images/18.jpg", "/images/19.jpg", "/images/20.jpg"],
    },
    {
        text: "Kuchnia marzeń 😍 Nowoczesna, funkcjonalna i idealna do wspólnego gotowania!",
        pictures: ["/images/14.jpg", "/images/14.jpg", "/images/16.jpg"],
    },
    {
        text: "Z dumą pokazujemy efekty naszej pracy 💪 Projekt, serce, wiedza – i zadowolenie Klienta! 📥",
        pictures: ["/images/12.jpg"],
    },
    {
        text: "Biel + drewno = klasyka! Tworzymy wymarzone wnętrza – kuchnie, garderoby, łazienki i więcej. ☕ Zadzwoń do nas!",
        pictures: ["/images/1.jpg", "/images/4.jpg", "/images/8.jpg", "/images/11.jpg"],
    },
    {
        text: "Perfekcja wymaga czasu. Wsłuchujemy się, projektujemy i montujemy – efekt wart czekania!",
        pictures: ["/images/5.jpg", "/images/6.jpg", "/images/7.jpg", "/images/9.jpg"],
    },
    {
        text: "Nasze kuchnie to połączenie stylu i funkcjonalności. Każda jest unikalna! 😍",
        pictures: ["/images/13.jpg"],
    },
    {
        text: "Odwiedź naszą nową stronę bartmel.com – realizacje, opinie i wszystko, czego potrzebujesz, by zacząć współpracę!",
        pictures: ["/images/17.jpg"],
    },
];

export const services = [
    {
        title: "Meble na wymiar",
        description: "Ręcznie wykonane meble zaprojektowane specjalnie do Twojej przestrzeni i potrzeb.",
        icon: "🪑",
    },
    {
        title: "Wnętrza mieszkalne",
        description: "Kompleksowe rozwiązania wnętrzarskie dla domów i mieszkań.",
        icon: "🏠",
    },
    {
        title: "Rozwiązania biurowe",
        description: "Funkcjonalne i stylowe meble do przestrzeni biurowych.",
        icon: "💼",
    },
    {
        title: "Meble edukacyjne",
        description: "Trwałe i ergonomiczne rozwiązania dla szkół.",
        icon: "📚",
    },
    {
        title: "Zabudowy na wymiar",
        description: "Indywidualne rozwiązania do przechowywania w każdym pomieszczeniu.",
        icon: "🗄️",
    },
    {
        title: "Projektowanie oświetlenia",
        description: "Indywidualne oświetlenie dopasowane do Twoich wnętrz.",
        icon: "💡",
    },
];
