import "./globals.css";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Bartmel Carpentry | Custom Furniture Since 1986",
    description:
        "Specializing in custom furniture design and manufacture since 1986. We create complete residential and office interiors with exceptional craftsmanship.",
};

interface AppProps {
    children: ReactNode;
}

export default function App({ children }: AppProps) {
    return (
        <html lang="en">
            <body className="bg-gray-50">
                {/* Navbar */}
                <Navbar />

                {/* Main Content - Add pt-[height-of-navbar] */}
                <main className="min-h-[85vh] pt-24 md:pt-28">{children}</main>

                {/* Footer */}
                <Footer />

                {/* Toast Notifications */}
                <ToastContainer position="bottom-right" />
            </body>
        </html>
    );
}
