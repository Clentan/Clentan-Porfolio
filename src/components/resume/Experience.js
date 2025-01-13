import React from "react";
import {motion} from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-8 sm:py-12 font-titleFont flex flex-col lg:flex-row lg:gap-20 gap-10"
    >
      <div className="w-full lg:w-[50%]">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[4px]">2022 - present</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-10 sm:mt-14 w-full h-auto lg:h-[1000px] border-l-[4px] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 sm:gap-10">
          <ResumeCard
            title="Lab Assistance"
            result="Done"

            des="Support in lab settings, handling tasks related to experiments, research, and equipment management. Key responsibilities include assisting with experiments, data collection, and maintaining laboratory equipment."
          />
          <ResumeCard
            title="Uldev Society"
            subTitle="-- Present"
            result="present"
            des="As a co-founder of the ULDev Society, I specialized in web and mobile development while providing career guidance to fellow students. "
          />
          <ResumeCard
            title="MLAB"
            result=" Present"
          
            des="Bootcamp training, which provided a solid foundation for my role. My responsibilities included designing user-friendly interfaces, HTML,CSS implementing robust functionality, and ensuring seamless user React Native experiences. "
          />
        </div>
      </div>
      <div className="w-full lg:w-[50%]">
        {/* You can add more content or another column here for larger screens */}
      </div>
    </motion.div>
  );
};

export default Experience;

