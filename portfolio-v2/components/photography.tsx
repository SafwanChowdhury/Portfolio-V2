"use client";
import React from "react";
import Image from "next/image";

type Slide = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
};

function SlideItem({
    slide,
    offset,
    isActive,
    distance,
}: {
    slide: Slide;
    offset: number;
    isActive: boolean;
    distance: number;
}) {
    const rotateDeg = offset === 0 ? 0 : offset > 0 ? -25 : 25;
    const translateX = offset * 160; // tighter spacing
    const scale = isActive ? 1 : 0.96; // subtle depth without reducing opacity
    const opacity = distance > 2 ? 0 : 1; // fade out when sliding beyond neighbors

    return (
        <div
            className="absolute"
            style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) perspective(1000px) translateX(${translateX}px) rotateY(${rotateDeg}deg) scale(${scale})`,
                transition:
                    "transform 0.5s ease-in-out, opacity 0.3s linear, box-shadow 0.3s ease-in-out",
                opacity,
                zIndex: isActive ? 30 : 20 - Math.abs(offset),
                pointerEvents: isActive ? "auto" : "none",
                boxShadow: isActive
                    ? "0 25px 50px -12px rgba(0,0,0,0.55), 0 10px 20px rgba(0,0,0,0.35)"
                    : "0 20px 35px -15px rgba(0,0,0,0.45)",
                borderRadius: "20px",
                backgroundColor: "none",
            }}
        >
            <div className="relative w-60 h-80 md:w-64 md:h-88 lg:w-[24vw] lg:h-[32vw] max-w-[360px] max-h-[520px] rounded-xl overflow-hidden bg-black">
                <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 16rem, 24vw"
                    priority={isActive}
                />
                {!isActive && (
                    <div className="absolute inset-0 bg-black/45 rounded-xl" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent rounded-xl" />
                <div
                    className={`absolute bottom-0 p-3 md:p-4 text-white ${
                        isActive ? "opacity-100" : "opacity-60"
                    }`}
                >
                    <h2 className="text-sm md:text-base lg:text-[3vmin] uppercase tracking-widest m-0 font-normal">
                        {slide.title}
                    </h2>
                    <h3 className="text-sm md:text-base lg:text-[3vmin] uppercase tracking-widest m-0 font-normal">
                        — {slide.subtitle}
                    </h3>
                    <p className="mt-1 text-[10px] md:text-xs lg:text-sm tracking-widest">
                        {slide.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

const slides: Slide[] = [
    {
        title: "Venice Beach",
        subtitle: "Los Angeles",
        description: "America 2019",
        image: "/assets/Images/la1.webp",
    },
    {
        title: "Pier 39",
        subtitle: "San Francisco",
        description: "America 2019",
        image: "/assets/Images/sa1.webp",
    },
    {
        title: "Bronx",
        subtitle: "New York",
        description: "America 2019",
        image: "/assets/Images/ny1.webp",
    },
    {
        title: "World Trade Center",
        subtitle: "New York",
        description: "America 2019",
        image: "/assets/Images/ny2.webp",
    },
    {
        title: "Exchange Place - NYC Skyline",
        subtitle: "New York",
        description: "America 2019",
        image: "/assets/Images/ny4.webp",
    },
    {
        title: "6th Avenue",
        subtitle: "New York",
        description: "America 2021",
        image: "/assets/Images/ny5.webp",
    },
    {
        title: "Jersey City - NYC Skyline",
        subtitle: "New York",
        description: "America 2021",
        image: "/assets/Images/ny3.webp",
    },
    {
        title: "Radio City Music Hall",
        subtitle: "New York",
        description: "America 2021",
        image: "/assets/Images/ny6.webp",
    },
    {
        title: "Off-Records Studio",
        subtitle: "New York",
        description: "America 2021",
        image: "/assets/Images/offrecord2.webp",
    },
    {
        title: "Roundhay Park",
        subtitle: "Leeds",
        description: "UG-Adventures",
        image: "/assets/Images/leeds1.webp",
    },
];

function reducer(
    state: { slideIndex: number },
    action: { type: "PREV" | "NEXT" }
) {
    if (action.type === "PREV") {
        return { slideIndex: (state.slideIndex + 1) % slides.length };
    }
    if (action.type === "NEXT") {
        return {
            slideIndex:
                state.slideIndex === 0
                    ? slides.length - 1
                    : state.slideIndex - 1,
        };
    }
    return state;
}

export default function Photography() {
    const [state, dispatch] = React.useReducer(reducer, { slideIndex: 0 });

    React.useEffect(() => {
        try {
            const saved =
                typeof window !== "undefined"
                    ? window.localStorage.getItem("lastSlideIndex")
                    : null;
            const parsed = saved ? parseInt(saved, 10) : 0;
            if (!Number.isNaN(parsed)) {
                let steps =
                    ((parsed % slides.length) + slides.length) % slides.length;
                while (steps > 0) {
                    dispatch({ type: "NEXT" });
                    steps--;
                }
            }
        } catch {}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        try {
            if (typeof window !== "undefined") {
                window.localStorage.setItem(
                    "lastSlideIndex",
                    String(state.slideIndex)
                );
            }
        } catch {}
    }, [state.slideIndex]);

    return (
        <section className="w-full mx-auto max-w-screen-xl px-6 py-12 text-white">
            <h2 className="text-3xl lg:text-4xl text-center font-thin mb-20 mt-10 text-black">
                Photography
            </h2>
            <div className="relative w-full h-[380px] md:h-[460px] lg:h-[520px] overflow-visible">
                {[...slides.keys()].map((i) => {
                    const rawOffset = i - state.slideIndex;
                    const wrapOffset =
                        ((rawOffset +
                            slides.length +
                            Math.floor(slides.length / 2)) %
                            slides.length) -
                        Math.floor(slides.length / 2);
                    const isActive = wrapOffset === 0;
                    const distance = Math.abs(wrapOffset);
                    if (distance > 3) return null; // render up to 3 away to allow fade-out
                    return (
                        <SlideItem
                            key={i}
                            slide={slides[i]}
                            offset={wrapOffset}
                            isActive={isActive}
                            distance={distance}
                        />
                    );
                })}

                <button
                    onClick={() => dispatch({ type: "PREV" })}
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-black text-5xl w-14 h-14 opacity-90 hover:opacity-100 transition-opacity"
                    aria-label="Previous"
                    type="button"
                >
                    ‹
                </button>
                <button
                    onClick={() => dispatch({ type: "NEXT" })}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-5xl w-14 h-14 opacity-90 hover:opacity-100 transition-opacity"
                    aria-label="Next"
                    type="button"
                >
                    ›
                </button>
            </div>
        </section>
    );
}
