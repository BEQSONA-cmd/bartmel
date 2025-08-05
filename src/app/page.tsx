"use client";
import { useLocalStorage } from "@/components/shared/useLocalStorage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
    const notify = () => toast("Hallo !");

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <main className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-4">Template</h1>
                <button
                    onClick={notify}
                    className="text-lg shadow__btn large scrolly bg-purple-600 hover:bg-purple-700 font-black py-3 px-6 rounded-lg hover:scale-105 duration-300"
                >
                    Click Me
                </button>
            </main>
        </div>
    );
}
