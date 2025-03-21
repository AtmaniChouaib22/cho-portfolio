"use client";
import { PiBriefcaseLight } from "react-icons/pi";
import MyProjectsBox from "@/components/MyProjectsBox";
import CustomButton from "@/components/CustomButton";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TooltipProvider } from "@/components/tooltip";

gsap.registerPlugin(ScrollTrigger);

const MyProjects = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  // Store our ScrollTrigger instances
  const myScrollTriggers = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // Clear ONLY our own ScrollTriggers, not all of them
    myScrollTriggers.current.forEach((trigger) => trigger.kill());
    myScrollTriggers.current = [];

    if (cardsRef.current.length === 0) {
      console.log("No card refs found");
      return;
    }

    // Create animations for each card
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const direction = index % 2 === 0 ? -200 : 200;

      const tl = gsap.timeline({
        paused: true,
      });

      // Add the animation to the timeline
      tl.fromTo(
        card,
        {
          x: direction,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      );

      // Create unique ID for this ScrollTrigger
      const triggerId = `project-card-${index}`;

      // Create ScrollTrigger for each card
      ScrollTrigger.create({
        id: triggerId,
        trigger: card,
        start: "top bottom-=100",
        end: "bottom top+=100",
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
        // markers: true, // debugging
      });

      // Store this ScrollTrigger
      const trigger = ScrollTrigger.getById(triggerId);
      if (trigger) myScrollTriggers.current.push(trigger);

      // Check if card is already in view
      const rect = card.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight;

      if (isInView) {
        tl.play(); // Play immediately if in view
      }
    });

    // Cleanup only our own ScrollTriggers
    return () => {
      myScrollTriggers.current.forEach((trigger) => {
        if (trigger) trigger.kill();
      });
    };
  }, []);

  return (
    <TooltipProvider>
      <div className="sm:w-full sm:px-4O">
        <h3 className="text-custom-violet font-semibold text-4xl sm:ml-10 mb-12 sm:b-5">
          My Projects
        </h3>
        <div className="flex justify-end items-center pb-5">
          <div className="thin-border-line"></div>
          <div className="bg-custom-text absolute right-36 w-20 h-20 rounded-full flex items-center justify-center">
            <PiBriefcaseLight size={40} className="text-black" />
          </div>
        </div>
        <div ref={containerRef} className="mb-10 flex flex-col gap-10">
          <MyProjectsBox
            ref={(el) => {
              if (el) {
                cardsRef.current[0] = el;
              }
            }}
            link="/"
            title="Formy-AI"
            year={2024}
            role="Full-stack web development"
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
          <CustomButton href="projects" text="Load More" />
        </div>
      </div>
    </TooltipProvider>
  );
};

export default MyProjects;
