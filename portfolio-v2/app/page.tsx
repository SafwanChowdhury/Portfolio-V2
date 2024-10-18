"use client";
import Hero from "@/components/hero";
import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";
import Coding from "@/components/coding";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const handleFocus = () => {
            console.log("Window is in focus");
        };
        const handleBlur = () => {
            console.log("Window is not in focus");
        };
        const handleVisibilityChange = () => {
            console.log(
                `Current visibility state: ${document.visibilityState}`
            );
        };
        window.addEventListener("focus", handleFocus);
        window.addEventListener("blur", handleBlur);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Cleanup function to remove event listeners when the component unmounts
        return () => {
            window.removeEventListener("focus", handleFocus);
            window.removeEventListener("blur", handleBlur);
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, []); // Empty dependency array means this effect runs only once on mount
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div id="hero">
                <Hero />
            </div>
            <div id="about-me" className="pt-0 sm:pt-8">
                <AboutMe />
            </div>
            <div id="coding" className="pt-2 lg:pt-6">
                <Coding />
            </div>
            <div id="projects" className="pt-6">
                <Projects />
            </div>
        </main>
    );
}
