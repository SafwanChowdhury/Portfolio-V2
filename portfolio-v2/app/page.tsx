"use client";
import TextScrambleComponent from "../components/RotatingTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faXTwitter,
    faXing,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* <div className="relative p-5 bg-gray-100  rounded-lg drop-shadow-lg"> */}
            <div className="relative flex-col justify-center p-5">
                <h1 className="text-6xl font-bold text-center text-gray-900 dark:text-gray-200">
                    Safwan R. Chowdhury
                    <div className="text-2xl font-light text-center text-gray-900 pt-5 dark:text-gray-200">
                        <TextScrambleComponent />
                    </div>
                </h1>
                <div className="w-11/12 mx-auto h-0.5 bg-gray-900 dark:bg-gray-200 mt-4 mb-4"></div>

                <p className="w-6/12 font-light text-center pt-3 mx-auto">
                    {" "}
                    A versatile Full-Stack Developer with a flair for crafting
                    immersive VR and modern web and app solutions, I bring
                    legacy systems into the future.
                </p>
                <div className="flex justify-center gap-10 mt-4 pt-5">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        className="text-black drop-shadow-lg"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yourprofile"
                        target="_blank"
                        className="text-black drop-shadow-lg"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a
                        href="https://x.com/yourusername"
                        target="_blank"
                        className="text-black drop-shadow-lg"
                    >
                        <FontAwesomeIcon icon={faXTwitter} size="2x" />
                    </a>
                    <a
                        href="mailto:youremail@example.com"
                        className="text-black drop-shadow-lg"
                    >
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                </div>
            </div>
        </main>
    );
}
