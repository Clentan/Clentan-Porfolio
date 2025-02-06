import React from 'react';
import { Download } from 'lucide-react';
import Media from './Media';
// Import your PDF file
import resumePDF from './CLENTAN-CHAUKE-FlowCV-Resume-20250113.pdf';

const LeftBanner = () => {
    const text = ["Software Developer.", "BackEnd Developer.", "UI/UX Developer."];
    const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
    const [displayText, setDisplayText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        let timeout;
        
        if (!isDeleting && displayText === text[currentTextIndex]) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % text.length);
        } else {
            const delta = isDeleting ? 100 : 200;
            
            timeout = setTimeout(() => {
                setDisplayText(prev => {
                    if (isDeleting) {
                        return prev.slice(0, -1);
                    } else {
                        return text[currentTextIndex].slice(0, prev.length + 1);
                    }
                });
            }, delta);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentTextIndex, text]);

    const handleDownloadCV = () => {
        // Create a blob URL for the PDF
        const blob = new Blob([resumePDF], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        
        // Create a temporary link and trigger download
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'CLENTAN-CHAUKE-Resume.pdf');
        document.body.appendChild(link);
        link.click();
        
        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className="text-md sm:text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    Hi, I'm <span className="text-designColor capitalize">Clentan Chauke</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    a <span>{displayText}</span>
                    <span className="animate-pulse">|</span>
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-bodyFont leading-6 tracking-wide">
                    I am Clentan Chauke, a BSc (Mathematical Science) graduate with expertise in JavaScript. 
                    As a co-founder of the ULDev Society & The Engineers, I led initiatives in web development 
                    and career guidance. I am committed to creating user-friendly solutions and passionate about 
                    contributing to impactful tech projects. My goal is to support digital literacy initiatives, 
                    especially in underprivileged communities, while continuing to grow as a software engineer.
                </p>

                <button
                    onClick={handleDownloadCV}
                    className="w-52 h-14 text-sm font-titleFont rounded-lg bg-gradient-to-r from-designColor to-designColor/60 flex items-center justify-center gap-2 hover:from-designColor/60 hover:to-designColor duration-300"
                >
                    <span className="text-base">Download CV</span>
                    <Download className="w-6 h-6" />
                </button>
            </div>
            
            <Media />
        </div>
    );
};

export default LeftBanner;