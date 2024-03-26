"use client";
import React, { useState, useEffect, useRef } from "react";

class TextScramble {
    el: HTMLElement;
    chars: string;
    resolve: ((value: unknown) => void) | undefined;
    queue: Array<{
        from: string;
        to: string;
        start: number;
        end: number;
        char?: string;
    }>;
    frameRequest: number;
    frame: number;

    constructor(el: HTMLElement) {
        this.el = el;
        this.chars = "!<>-_\\/[]{}—=+*^?#________";
        this.queue = [];
        this.frame = 0;
        this.frameRequest = 0;
        this.update = this.update.bind(this);
    }

    setText(newText: string) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || "";
            const to = newText[i] || "";
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = "";
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
            if (this.resolve) {
                this.resolve("done");
            }
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

const phrases = [
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "UI/UX Designer",
    "Game Designer",
    "Photographer",
];

const TextScrambleComponent: React.FC = () => {
    const scrambleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize fx outside of the if block so it's accessible in the cleanup function.
        let fx: TextScramble | null = null;

        if (scrambleRef.current) {
            fx = new TextScramble(scrambleRef.current);
            let counter = 0;

            const next = () => {
                fx!.setText(phrases[counter]).then(() => {
                    setTimeout(next, 800);
                });
                counter = (counter + 1) % phrases.length;
            };

            next();
        }

        // Cleanup function to cancel animation frame on component unmount
        return () => {
            if (fx) {
                cancelAnimationFrame(fx.frameRequest);
            }
        };
    }, []); // Empty dependency array ensures this runs once on mount only

    return <div ref={scrambleRef} className="text_scramble"></div>;
};

export default TextScrambleComponent;
