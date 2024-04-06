"use client";
import Hero from "@/components/hero";
import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";
import Coding from "@/components/coding";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div id="hero">
                <Hero />
            </div>
            <div id="about-me" className="pt-6">
                <AboutMe />
            </div>
            <div id="coding" className="pt-6">
                <Coding />
            </div>
            <div id="projects" className="pt-6">
                <Projects />
            </div>
        </main>
    );
}
