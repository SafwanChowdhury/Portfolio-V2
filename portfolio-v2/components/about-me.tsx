import Image from "next/image";
import SVGGradientComponent from "./corners";

export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center p-10">
            <Image
                src="/assets/pfp_linkedin.png"
                alt="Profile Picture"
                className="rounded-full"
                width={150}
                height={150}
                priority
            />
            <h1 className="text-4xl font-thin mt-4 pt-24">About Me</h1>
            <div className="w-3/4 text-lg text-center font-extralight mt-4 pt-16">
                <p className="">
                    Hello! I'm Safwan, a fourth-year MSc Computing (Software
                    Engineering) student at Imperial College London. My passion
                    lies in the realm of developing websites, apps, and games,
                    where I get to blend my technical skills with creative
                    problem-solving. I'm keen on finding a career that allows me
                    to harness my creativity and bring innovative ideas to life.
                </p>
                <p className="mt-5">
                    Beyond my studies, I'm a dedicated gamer and an aspiring
                    game developer. I also enjoy photography, capturing the
                    world through my lens and sharing my experiences. These
                    interests represent my love for technology, creativity, and
                    the pursuit of new skills.
                </p>
            </div>
        </div>
    );
}
