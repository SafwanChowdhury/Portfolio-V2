"use client";

import React from "react";

const SVGGradientComponent = () => {
    return (
        <svg
            width="300"
            height="300"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none"
        >
            <defs>
                <style>
                    {`
            .stop-gradient1 { stop-color: var(--grad-1); }
            .stop-gradient2 { stop-color: var(--grad-2); }
          `}
                </style>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0" className="stop-gradient1"></stop>
                    <stop offset=".5" className="stop-gradient2"></stop>
                    <stop offset="1" className="stop-gradient1"></stop>
                </linearGradient>
            </defs>
            <path
                fill="url('#grad1')"
                d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
            ></path>
        </svg>
    );
};

export default SVGGradientComponent;
