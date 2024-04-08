"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [opened, setOpened] = useState(false);
    const navbarRef = useRef(null); // Ref for the navbar
    const menuRef = useRef(null); // Ref for the menu

    const toggleMenu = () => {
        setOpened(!opened);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Set isScrolled to true if scrolled more than 50 pixels, for example
            const thresholdWidth = 640; // Tailwind's 'sm' breakpoint, adjust if necessary
            const screenWidth = window.innerWidth;
            const isSmallScreen = screenWidth < thresholdWidth;

            setIsScrolled(window.scrollY > 50 || isSmallScreen);
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        handleScroll(); // Call the function once to set the initial state
        // Remove event listener on cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    // Close the menu if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target) &&
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setOpened(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <div
                className={`transition-opacity duration-500 ease-in-out ${
                    !isScrolled
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <nav className="hidden sm:flex items-center p-3 sm:pt-6 lg:p-10 w-full bg-black dark:bg-slate-300 sm:bg-transparent sm:dark:bg-transparent text-slate-200 dark:text-slate-200 sm:text-black">
                    <Link
                        href="#"
                        className="text-md sm:text-2xl font-normal tracking-widest pl-3 sm:pl-10 cursor-pointer justify-self-start shrink-0"
                    >
                        SRC
                    </Link>
                    <div className="text-lg gap-6 justify-center items-center w-full hidden sm:flex pr-10">
                        <Link
                            href="#about-me"
                            className="hover:underline cursor-pointer"
                        >
                            About Me
                        </Link>
                        <Link
                            href="#coding"
                            className="hover:underline cursor-pointer"
                        >
                            Tools
                        </Link>
                        <Link
                            href="#projects"
                            className="hover:underline cursor-pointer"
                        >
                            Projects
                        </Link>
                        {/* <Link
                            href="#"
                            className="hover:underline cursor-pointer"
                        >
                            Photography
                        </Link> */}
                    </div>
                    <div className="pl-10 hidden sm:flex"></div>
                </nav>
            </div>
            <div
                className={`fixed top-0 z-50 w-full transition-opacity duration-300 ease-in-out ${
                    isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <nav
                    ref={navbarRef}
                    className="bg-black dark:bg-gray-600 dark:backdrop-blur-lg dark:opacity-[.97] text-slate-200 dark:text-slate-100 flex items-center justify-between p-4"
                >
                    <Link
                        href="#"
                        className="text-2xl font-medium tracking-widest sm:pl-10 sm:text-2xl sm:font-normal cursor-pointer"
                    >
                        SRC
                    </Link>
                    <div className="text-md gap-8 justify-end tracking-widest items-center w-full hidden sm:flex pr-10">
                        <Link
                            href="#about-me"
                            className="hover:underline cursor-pointer"
                        >
                            About Me
                        </Link>
                        <Link
                            href="#coding"
                            className="hover:underline cursor-pointer"
                        >
                            Tools
                        </Link>
                        <Link
                            href="#projects"
                            className="hover:underline cursor-pointer"
                        >
                            Projects
                        </Link>
                        {/* <Link
                            href="#"
                            className="hover:underline cursor-pointer"
                        >
                            Photography
                        </Link> */}
                    </div>
                    <div
                        className={`tham tham-e-squeeze tham-w-6 sm:hidden !duration-300 ${
                            opened ? "tham-active" : ""
                        }`}
                        onClick={toggleMenu}
                    >
                        <div className="tham-box">
                            <div className="tham-inner bg-slate-300 !duration-300 before:!duration-500 after:!duration-300" />
                        </div>
                    </div>
                </nav>
            </div>
            <div
                ref={menuRef}
                className={`fixed top-16 z-50 text-md text-center tracking-widest justify-center items-center w-full text-slate-200 transition-all duration-500 overflow-hidden ${
                    opened ? "max-h-96" : "max-h-0"
                }`}
            >
                <Link
                    href="#about-me"
                    className="bg-black dark:bg-gray-600 dark:opacity-[.98] border-t border-gray-700 dark:border-gray-400 pt-4 pb-2"
                >
                    About Me
                </Link>
                <Link
                    href="#coding"
                    className="bg-black dark:bg-gray-600 dark:opacity-[.98] py-2"
                >
                    Tools
                </Link>
                <Link
                    href="#projects"
                    className="bg-black dark:bg-gray-600 dark:opacity-[.98] py-2"
                >
                    Projects
                </Link>
                {/* <Link
                    href="#"
                    className="bg-black dark:bg-gray-600 dark:opacity-[.98] pt-2 pb-4"
                >
                    Photography
                </Link> */}
            </div>
        </div>
    );
}
