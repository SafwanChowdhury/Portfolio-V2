import Image from "next/image";
export default function Projects() {
    return (
        <div>
            <h1 className="text-4xl text-center font-thin mt-4 lg:pt-16">
                My Projects
            </h1>
            <div className="container w-screen sm:w-auto px-6 py-6 mx-auto">
                <div className="group lg:mt-8 lg:-mx-6 flex flex-col-reverse lg:flex-row justify-center items-center">
                    <Image
                        src="/assets/Gif/chess_online.gif"
                        alt="Chess"
                        width={800}
                        height={300}
                        objectFit="cover"
                        className="object-fit w-full lg:w-5/12 lg:mx-6 rounded-xl unoptimized hidden group-hover:block"
                        priority
                    />
                    <Image
                        src="/assets/Images/chess.webp"
                        alt="Chess"
                        width={800}
                        height={300}
                        objectFit="cover"
                        className="object-fit w-full lg:w-5/12 lg:mx-6 rounded-xl unoptimized group-hover:hidden"
                    />
                    <div className="mt-6 w-11/12 sm:w-auto lg:w-1/2 lg:mt-0 lg:mx-6 text-center lg:text-left">
                        <a
                            href="#"
                            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
                        >
                            3D Online VR Chess Game
                        </a>
                        <p className="mt-3 text-md text-gray-500 dark:text-gray-300 lg:text-sm pb-10">
                            Introducing the Online VR Chess Game — a blend of
                            traditional chess and cutting-edge VR. Built with
                            Vite and Three.js, this game supports both local and
                            online gameplay, enriched with customizable features
                            including glow-in-the-dark and Harry Potter-inspired
                            'Wizards Chess' modes. Players can immerse
                            themselves in VR, navigating a life-sized chessboard
                            for a unique gaming experience. Backed by a powerful
                            server for seamless lobbies and match tracking, it
                            marks my first venture into polished full-stack
                            development, offering a novel twist for chess and VR
                            fans.
                        </p>
                    </div>
                </div>
                <div className="group lg:mt-8 lg:-mx-6 flex flex-col lg:flex-row justify-center items-center">
                    <div className="mt-6 w-11/12 sm:w-auto lg:w-1/2 lg:mt-0 lg:mx-6 text-center lg:text-left">
                        <a
                            href="#"
                            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
                        >
                            EScooter Website Project
                        </a>

                        <p className="mt-3 text-md text-gray-500 dark:text-gray-300 lg:text-sm pb-10">
                            In a collaborative university project, I spearheaded
                            the front-end design for a hypothetical eScooter
                            company's website, demonstrating my UI/UX design
                            skills. Utilizing Flask, HTML, CSS, and JavaScript,
                            I developed the site's interface, focusing on a
                            seamless user experience while my teammates handled
                            additional development tasks. The site boasts a
                            captivating home page featuring a simulated booking
                            system, where users can reserve scooters at
                            designated locations. Key features include a
                            comprehensive account system, admin controls, and
                            secure sign-in. Bookings trigger confirmation
                            emails, simulating a complete user journey.
                        </p>
                    </div>
                    <Image
                        src="/assets/gif/escooter.gif"
                        alt="Chess"
                        width={800}
                        height={300}
                        objectFit="cover"
                        className="object-fit w-full lg:w-5/12 lg:mx-6 rounded-xl hidden group-hover:block"
                        priority
                    />
                    <Image
                        src="/assets/Images/scooter.webp"
                        alt="Chess"
                        width={800}
                        height={300}
                        objectFit="cover"
                        className="object-fit w-full lg:w-5/12 lg:mx-6 rounded-xl group-hover:hidden"
                    />
                </div>
                <div className="group lg:mt-8 lg:-mx-6 flex flex-col-reverse lg:flex-row justify-center items-center">
                    <Image
                        src="/assets/Gif/fhn.gif"
                        alt="Chess"
                        width={800}
                        height={300}
                        objectFit="cover"
                        className="object-fit w-full lg:w-5/12 lg:mx-6 rounded-xl unoptimized hidden group-hover:block"
                        priority
                    />
                    <Image
                        src="/assets/Images/fhn.webp"
                        alt="Chess"
                        width={800}
                        height={300}
                        objectFit="cover"
                        className="object-fit w-full lg:w-5/12 lg:mx-6 rounded-xl unoptimized group-hover:hidden"
                    />
                    <div className="mt-6 w-11/12 sm:w-auto lg:w-1/2 lg:mt-0 lg:mx-6 text-center lg:text-left">
                        <a
                            href="#"
                            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
                        >
                            FightHungerNow Website
                        </a>
                        <p className="mt-3 text-md text-gray-500 dark:text-gray-300 lg:text-sm pb-10">
                            In a voluntary effort, I designed a website for
                            "Fight Hunger Now," a charity aimed at feeding the
                            underprivileged. This project, one of my first using
                            Figma, let donors directly impact chosen areas,
                            marrying my web design skills development with
                            meaningful contribution. My involvement not only
                            advanced my proficiency in Figma but also allowed me
                            to create an accessible platform facilitating
                            crucial support for those in need.
                        </p>
                    </div>
                </div>
                <div className="group lg:mt-8 lg:-mx-6 flex flex-col lg:flex-row justify-center items-center">
                    <div className="mt-6 w-11/12 sm:w-auto lg:w-1/2 lg:mt-0 lg:mx-6 text-center lg:text-left">
                        <a
                            href="#"
                            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
                        >
                            Project SOS
                        </a>

                        <p className="mt-3 text-md text-gray-500 dark:text-gray-300 lg:text-sm pb-10">
                            Project SOS is an fun iOS app created in Unity,
                            offering players the intense challenge of executing
                            safe plane landings. By tapping to adjust the
                            plane's lift and carefully managing fuel, players
                            aim to transport 300 passengers as far as possible.
                            Success hinges on soft landings—hard landings risk
                            passenger safety, adding depth to the game. It's a
                            test of strategy, precision, and reflexes, with
                            intuitive controls and lifelike piloting dynamics,
                            appealing to simulation and strategy enthusiasts as
                            well as casual gamers who enjoy a challenge
                        </p>
                    </div>
                    <Image
                        src="/assets/gif/Project_SOS.gif"
                        alt="Chess"
                        width={800}
                        height={300}
                        objectFit="cover"
                        className="object-fit w-1/2 sm:w-2/6 lg:w-2/12 lg:mx-6 rounded-xl hidden group-hover:block"
                        priority
                    />
                    <Image
                        src="/assets/Images/ps.webp"
                        alt="Chess"
                        width={800}
                        height={300}
                        objectFit="cover"
                        className="object-fit w-1/2 sm:w-2/6 lg:w-2/12 lg:mx-6 rounded-xl group-hover:hidden"
                    />
                </div>
            </div>
            <div className="group lg:mt-8 lg:-mx-6 flex flex-col-reverse lg:flex-row justify-center items-center">
                <Image
                    src="/assets/gif/Project_Implosion.gif"
                    alt="Chess"
                    width={800}
                    height={300}
                    objectFit="cover"
                    className="object-fit w-1/2 sm:w-2/6 lg:w-2/12 lg:mx-6 rounded-xl hidden group-hover:block"
                    priority
                />
                <Image
                    src="/assets/Images/pi.webp"
                    alt="Chess"
                    width={800}
                    height={300}
                    objectFit="cover"
                    className="object-fit w-1/2 sm:w-2/6 lg:w-2/12 lg:mx-6 rounded-xl unoptimized group-hover:hidden"
                />
                <div className="mt-6 w-10/12 sm:w-auto lg:w-1/2 lg:mt-0 lg:mx-6 text-center lg:text-left">
                    <a
                        href="#"
                        className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
                    >
                        Project Implosion
                    </a>
                    <p className="mt-3 text-md text-gray-500 dark:text-gray-300 lg:text-sm pb-10">
                        Project Implosion is an engaging Unity-based iOS game
                        that plunges players into a deep-sea aboard a submarine.
                        The core challenge lies in maintaining the submarine's
                        pressure within a safe range, indicated by keeping the
                        pressure gauge in the green zone. As the descent
                        deepens, managing internal pressure becomes increasingly
                        difficult, pushing players to explore the abyss as far
                        as possible before succumbing to an implosion. This
                        experience merges strategy, precision, and critical
                        decision-making, growing more intense with each level.
                        Featuring intuitive controls, stunning graphics, and
                        edge-of-your-seat gameplay, Project Implosion offers a
                        thrilling deep-sea adventure for strategy fans and
                        adrenaline junkies alike.
                    </p>
                </div>
            </div>
        </div>
    );
}
