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

export default function hero() {
    return (
        <div className="relative flex-col justify-center p-5">
            <h1 className="text-6xl font-bold text-center text-gray-900 dark:text-gray-200">
                Safwan R. Chowdhury
                <div className="text-2xl font-light text-center text-gray-900 pt-5 dark:text-gray-200">
                    <TextScrambleComponent />
                </div>
            </h1>
            <div className="w-11/12 mx-auto h-0.5 bg-gray-900 dark:bg-gray-200 mt-4 mb-4"></div>

            <p className="w-11/12 lg:w-6/12 font-light text-center pt-3 mx-auto">
                {" "}
                A versatile Full-Stack Developer with a flair for crafting
                immersive VR and modern web and app solutions, I bring legacy
                systems into the future.
            </p>
            <div className="flex justify-center gap-10 mt-4 pt-5 text-black dark:invert">
                <a
                    href="https://github.com/SafwanChowdhury"
                    target="_blank"
                    className="drop-shadow-md hover:drop-shadow-none"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                    href="https://www.linkedin.com/in/safwan-r-chowdhury/"
                    target="_blank"
                    className="drop-shadow-md hover:drop-shadow-none"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                    href="https://x.com/SafwanRija"
                    target="_blank"
                    className="drop-shadow-md hover:drop-shadow-none"
                >
                    <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </a>
                <a
                    href="mailto:safwan.chowdhury1@outlook.com"
                    className="drop-shadow-md hover:drop-shadow-none"
                >
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
            </div>
        </div>
    );
}
