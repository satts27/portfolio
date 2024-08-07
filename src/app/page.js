"use client";

import Hero from "@/components/Hero/Hero";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Curve from "@/components/Curve/Curve";
import Bento from "@/components/Bento/Bento";
import Projects from "@/components/Projects/Projects";
import { LayoutGrid } from "@/components/LayoutGrid/LayoutGrid";
import MainComponent from "@/components/MainComponent/MainComponent";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main
      ref={container}
      className="relative h-[200vh] bg-occur flex flex-col min-h-screen"
    >
      <div className="absolute top-0 left-0 right-0 z-20">
        <Curve text="HI" />
      </div>
      <div className="relative z-10 flex-1">
        <Hero scrollYProgress={scrollYProgress} />
      </div>
      <div className="bg-occur flex-1 relative z-10">
        <div className="bg-gradient-to-b from-pinkish to-occur">
          <div className="flex items-center justify-center">
            <div>
              <Bento />
            </div>
          </div>
          <div className="text-center py-10">
            <p className="text-[100px] font-heading text-creme text-shadow-3d-cream">
              Projects
            </p>

            <Projects />
          </div>
        </div>
        <div className="px-20 text-center">
          <p className="text-[50px] sm:text-[100px] font-heading text-creme text-shadow-3d-cream">
            Work Experience
          </p>

          <MainComponent />
        </div>
        <div className="flex flex-col items-center justify-center h-screen bg-occur p-5">
          <p className="text-[50px] sm:text-[100px] font-heading text-creme text-shadow-3d-cream">
            Milestones
          </p>
          <div className="w-full max-w-7xl h-full overflow-auto">
            <LayoutGrid cards={cards} />
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Technical Workshops</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Conducted technical workshops with over 300 attendees, providing
        hands-on training and fostering skill development in emerging
        technologies.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">RNS_HackOverflow</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Runner-up at RNS_HackOverflow conducted at RNSIT, Bengaluru. May 27 -
        29, 2023
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">ISTE-VESIT</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        I led the technical team at ISTE-VESIT, overseeing projects and guiding
        team members to achieve organizational goals.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Hack-AI-Thon</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Runner-up at Hack-AT-Thon conducted by AiCoLegion at VESIT, Mumbai. Oct
        1 - 2, 2022
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnails: ["./Iste_workshop.jpg", "./Iste_workshop_2.jpg"],
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnails: ["./RNS_winning.jpg"],
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnails: ["./ISTE_grp1.jpg"],
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnails: ["./BitLords1.jpg", "./BitLords2.jpg"],
  },
];
