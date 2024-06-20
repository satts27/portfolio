import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Bento = () => {
  return (
    <div className="flex p-8 h-[75vh]">
      {/* Container for vertical text and bento grid */}
      <div className="flex w-full">
        {/* Vertical text */}
        <div className="flex flex-col justify-center items-center h-full">
          <div className="transform -rotate-90 text-[80px] font-heading text-creme w-full scale-y-200 scale-x-150 text-border-black">
            ABOUT&nbsp;ME
          </div>
        </div>
        {/* Bento grid */}
        <section className="grid grid-cols-6 gap-4 flex-grow">
          <div className="border-2 border-creme shadow-lg shadow-ocshadow rounded-[12px] flex flex-col gap-1 col-span-2 row-span-4">
            <img
              src="/surya_wp_cropped-Photoroom.png"
              alt="Description of image"
              className="w-full h-full object-cover rounded-[12px]"
            />
          </div>
          <div className="p-4 border-2 border-creme shadow-lg shadow-ocshadow rounded-[12px] flex flex-col gap-1 col-span-3 row-span-2 font-heading3">
            <span className="text-xl">About Me</span>
            <span>I am a</span>
          </div>
          <div className="p-4 border-2 border-creme shadow-lg shadow-ocshadow rounded-[12px] flex flex-col gap-1 col-span-1 row-span-1">
            <span>Hobbies</span>
            <span>Chess</span>
            <span>Formula 1</span>
          </div>
          <div className="p-4 border-2 border-creme shadow-lg shadow-ocshadow rounded-[12px] flex flex-col gap-1 col-span-1 row-span-3">
            <span>Tech Stack</span>
            <span>Java</span>
            <span>Python</span>
            <span>Nextjs</span>
            <span>Reactjs</span>
            <span>Flask</span>
            <span>Tensorflow</span>
          </div>
          <div className="p-4 border-2 border-creme shadow-lg shadow-ocshadow rounded-[12px] flex flex-col gap-1 col-span-2 row-span-2">
            <span>Achievements</span>
            <span>2 X Hackathon-Winner</span>
            <span>5 X Top 10 Finish</span>
            <span>450+ Leetcode</span>
          </div>
          <div className="p-4 border-2 border-creme shadow-lg shadow-ocshadow rounded-[12px] flex-col gap-1 col-span-1 row-span-2 flex justify-center items-center">
            <p className="text-bebas">Links</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <FaGithub />
              </div>
              <div>
                <FaLinkedinIn />
              </div>
              <div>
                <FaTwitter />
              </div>
              <div>
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
