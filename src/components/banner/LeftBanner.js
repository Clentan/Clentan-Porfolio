import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Software Developer.", "BackEnd Developer.", "UI/UX Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className="text-md sm:text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    Hi, I'm <span className="text-designColor capitalize">Clentan Chauke</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-bodyFont leading-6 tracking-wide">
                I am Clentan Chauke, a BSc (Mathematical Science) graduate with expertise in JavaScript. As a co-founder of the ULDev Society & The Engineers , I led initiatives in web development and career guidance. I am committed to creating user-friendly solutions and passionate about contributing to impactful tech projects. My goal is to support digital literacy initiatives, especially in underprivileged communities, while continuing to grow as a software engineer.
                </p>
            </div>
            {/* Media */}
            <Media />
        </div>
    );
}

export default LeftBanner;
