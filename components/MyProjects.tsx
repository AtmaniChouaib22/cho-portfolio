"use client";
import { PiBriefcaseLight } from "react-icons/pi";
import MyProjectsBox from "./MyProjectsBox";
import CustomButton from "./CustomButton";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TooltipProvider } from "./tooltip";

gsap.registerPlugin(ScrollTrigger);

const MyProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.from(cardsRef.current, {
      opacity: 0,
      y: 100,
      stagger: 0.5,
      duration: 1.5,
      ease: "power3.out",
    });

    tl.to(cardsRef.current, {
      opacity: 0,
      y: -100,
      stagger: -0.5,
      duration: 1.5,
      ease: "power3.in",
    });
  }, []);

  return (
    <TooltipProvider>
      <div className="w-full px-40">
        <h3 className="text-custom-violet font-semibold text-4xl pb-5">
          My Projects
        </h3>
        <div className="flex justify-end items-center pb-5">
          <div className="thin-border-line"></div>
          <div className="bg-custom-text absolute right-36 w-20 h-20 rounded-full flex items-center justify-center">
            <PiBriefcaseLight size={40} className="text-black" />
          </div>
        </div>
        <div ref={containerRef} className="mb-10">
          <MyProjectsBox
            ref={(el) => {
              if (el) {
                cardsRef.current[0] = el;
              }
            }}
            link="/"
            title="Formy-AI"
            year={2024}
            role="UI/UX Design & Development"
            description="Next.js, PostgeSQL, Clerk, Gemini API..."
            tooltipContent="this is a long tooltip that works on mouse hovering ahahahhahaha"
            tooltipColor="#4F39F6"
          />
          <MyProjectsBox
            ref={(el) => {
              if (el) {
                cardsRef.current[1] = el;
              }
            }}
            link="/"
            title="Formy-AI"
            year={2024}
            role="UI/UX Design & Development"
            description="Next.js, PostgeSQL, Clerk, Gemini API..."
            tooltipContent="this is a long tooltip that works on mouse hovering ahahahhahaha"
            tooltipColor="#FB2C36"
          />
          <MyProjectsBox
            ref={(el) => {
              if (el) {
                cardsRef.current[2] = el;
              }
            }}
            link="/"
            title="Formy-AI"
            year={2024}
            role="UI/UX Design & Development"
            description="Next.js, PostgeSQL, Clerk, Gemini API..."
            tooltipContent="this is a long tooltip that works on mouse hovering ahahahhahaha"
            tooltipColor="#155DFC"
          />
          <MyProjectsBox
            ref={(el) => {
              if (el) {
                cardsRef.current[3] = el;
              }
            }}
            link=""
            title="Formy-AI"
            year={2024}
            role="UI/UX Design & Development"
            description="Next.js, PostgeSQL, Clerk, Gemini API..."
            tooltipContent="this is a long tooltip that works on mouse hovering ahahahhahaha"
            tooltipColor="#FFD230"
          />
        </div>
        <div className="flex justify-center items-center ">
          <CustomButton text="Load More" />
        </div>
      </div>
    </TooltipProvider>
  );
};

export default MyProjects;
