import Image from "next/image";
import SVGGradientComponent from "./corners";

export default function AboutMe() {
    return (
        <div className="flex flex-col w-screen items-center justify-center p-10">
            <Image
                src="/assets/pfp_linkedin.jpg"
                alt="Profile Picture"
                className="rounded-full"
                width={150}
                height={150}
                priority
            />
            <h1 className="text-4xl text-center font-thin mt-4 pt-10 sm:pt-10 lg:pt-24">
                About Me
            </h1>
            <div className="w-11/12 sm:w-10/12 lg:w-8/12 text-lg text-center font-extralight mt-4 pt-6 sm:pt-10">
                <p className="">
                    Hello! I&apos;m Safwan, a fourth-year MSc Computing
                    (Software Engineering) student at Imperial College London.
                    My passion lies in the realm of developing websites, apps,
                    and games, where I get to blend my technical skills with
                    creative problem-solving. I&apos;m keen on finding a career
                    that allows me to harness my creativity and bring innovative
                    ideas to life.
                </p>
                <p className="mt-5">
                    Beyond my studies, I&apos;m an enthusiastic gamer and an
                    aspiring game developer. I also enjoy photography, capturing
                    the world through my lens and sharing my experiences. These
                    interests represent my love for technology, creativity, and
                    the pursuit of new skills.
                </p>
            </div>
        </div>
    );
}
