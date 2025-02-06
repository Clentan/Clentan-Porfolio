import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const Media = () => {
    // Function to handle external navigation
    const handleNavigation = (url) => {
        window.open(url, '_blank', 'noopener noreferrer');
    };

    return (
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me in
                </h2>
                <div className="flex gap-4">
                    <span 
                        className="bannerIcon cursor-pointer hover:text-designColor transition-all duration-300"
                        onClick={() => handleNavigation('https://facebook.com/your.profile')} // Replace with your Facebook profile URL
                        title="Facebook Profile"
                    >
                        <FaFacebookF />
                    </span>
                    
                    <span 
                        className="bannerIcon cursor-pointer hover:text-designColor transition-all duration-300"
                        onClick={() => handleNavigation('https://www.linkedin.com/in/clentan-chauke-1a7b08216/')} // Replace with your LinkedIn profile URL
                        title="LinkedIn Profile"
                    >
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    BEST SKILL ON
                </h2>
                <div className="flex gap-4">
                    <span 
                        className="bannerIcon cursor-pointer hover:text-designColor transition-all duration-300"
                        onClick={() => handleNavigation('https://react.dev')}
                        title="React"
                    >
                        <FaReact />
                    </span>
                    <span 
                        className="bannerIcon cursor-pointer hover:text-designColor transition-all duration-300"
                        onClick={() => handleNavigation('https://nextjs.org')}
                        title="Next.js"
                    >
                        <SiNextdotjs />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Media;