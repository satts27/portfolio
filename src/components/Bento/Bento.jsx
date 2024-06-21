import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Bento = () => {
  return (
    <div className="flex flex-col p-4 sm:p-8 sm:h-[75vh]">
      {/* Container for vertical text and bento grid */}
      <div className="flex flex-col sm:flex-row w-full">
        {/* Vertical text */}
        <div className="flex flex-col justify-center items-center sm:items-start sm:justify-center h-full mb-4 sm:mb-0">
          <p className="transform rotate-0 sm:-rotate-90 text-[40px] sm:text-[80px] font-heading text-creme w-full sm:w-auto sm:scale-y-200 sm:scale-x-150 text-border-black">
            ABOUT ME
          </p>
        </div>
        {/* Bento grid */}
        <section className="grid grid-cols-1 sm:grid-cols-6 gap-4 flex-grow">
          <div className="border-2 border-creme shadow-lg shadow-ocshadow rounded-[12px] flex flex-col gap-1 sm:col-span-2 sm:row-span-4">
            <img
              src="/surya_wp_cropped-Photoroom.png"
              alt="Description of image"
              className="w-full h-full object-cover rounded-[12px]"
            />
          </div>
          <div className="p-4 border-2 border-creme shadow-lg shadow-ocshadow rounded-[12px] flex flex-col gap-1 sm:col-span-3 sm:row-span-2 font-bebas text-base sm:text-xl">
            <p>
              I&apos;m <span className="font-bold">Surya Ganiga</span>, an
              engineering graduate specializing in
              <span className="font-bold">
                {" "}
                Artificial Intelligence and Data Science
              </span>
              . Driven by a deep
              <span className="text-indigo-600 font-semibold">
                {" "}
                curiosity
              </span>{" "}
              and a passion for technology, I&apos;ve actively participated in
              and won several hackathons, exploring and implementing emerging
              technologies. My involvement with{" "}
              <span className="font-bold">ISTE-VESIT</span>, a prominent
              technical organization, has significantly contributed to my
              growth, enhancing my technical skills and fostering impactful
              collaborations. Equipped with expertise in{" "}
              <span className="font-bold">AI and Data Science</span>, I thrive
              on tackling complex challenges and developing innovative solutions
              and am always{" "}
              <span className="text-indigo-600 font-semibold">
                eager to learn and adapt
              </span>
              .
            </p>
          </div>
          <div className="p-4 border-2 border-creme shadow-lg shadow-ocshadow rounded-[12px] flex flex-col gap-1 sm:col-span-1 sm:row-span-1">
            <p className="font-heading text-[20px] sm:text-[30px] text-creme text-border-black">
              Hobbies
            </p>
            <span>Chess</span>
            <span>Formula 1</span>
          </div>
          <div className="p-4 border-2 border-creme shadow-lg shadow-ocshadow rounded-[12px] flex flex-col gap-1 sm:col-span-1 sm:row-span-3">
            <p className="font-heading text-[20px] sm:text-[30px] text-creme text-border-black">
              Tech Stack
            </p>
            <span>Java</span>
            <span>Python</span>
            <span>Nextjs</span>
            <span>Reactjs</span>
            <span>Flask</span>
            <span>Tensorflow</span>
          </div>
          <div className="p-4 border-2 border-creme shadow-lg shadow-ocshadow rounded-[12px] flex flex-col gap-1 sm:col-span-2 sm:row-span-2">
            <p className="font-heading text-[20px] sm:text-[30px] text-creme text-border-black">
              Achievements
            </p>
            <span>2 X Hackathon-Winner</span>
            <span>5 X Top 10 Finish</span>
            <span>450+ Leetcode</span>
          </div>
          <div className="p-4 border-2 border-creme shadow-lg shadow-ocshadow rounded-[12px] flex flex-col gap-1 sm:col-span-1 sm:row-span-2">
            <p className="font-heading text-[20px] sm:text-[30px] text-creme text-border-black">
              Links
            </p>
            <div className="grid grid-cols-4 gap-4 justify-center items-center">
              <div className="p-1">
                <FaGithub />
              </div>
              <div className="p-1">
                <FaLinkedinIn />
              </div>
              <div className="p-1">
                <FaTwitter />
              </div>
              <div className="p-1">
                <FaInstagram />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bento;
