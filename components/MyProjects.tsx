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

  const myScrollTriggers = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    myScrollTriggers.current.forEach((trigger) => trigger.kill());
    myScrollTriggers.current = [];

    if (cardsRef.current.length === 0) {
      console.log("No card refs found");
      return;
    }

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const direction = index % 2 === 0 ? -200 : 200;

      const tl = gsap.timeline({
        paused: true,
      });

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

      const triggerId = `project-card-${index}`;

      ScrollTrigger.create({
        id: triggerId,
        trigger: card,
        start: "top bottom-=100",
        end: "bottom top+=100",
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
      });

      const trigger = ScrollTrigger.getById(triggerId);
      if (trigger) myScrollTriggers.current.push(trigger);

      const rect = card.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight;

      if (isInView) {
        tl.play();
      }
    });

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
        <div ref={containerRef} className="mb-10 flex flex-col gap-10 md:mx-20">
          <MyProjectsBox
            ref={(el) => {
              if (el) {
                cardsRef.current[0] = el;
              }
            }}
            link="https://github.com/AtmaniChouaib22/AI-Agent"
            title="AI-Agent"
            year={2025}
            role="Full-stack web development"
            description="TypeScript, Next.js, Zod , OpenAi APi, Prisma, TailwindCSS"
            tooltipContent="AI cli agent that can get dad jokes, joke image generation and get reddit posts."
            tooltipColor="#4F39F6"
          />
          <MyProjectsBox
            ref={(el) => {
              if (el) {
                cardsRef.current[1] = el;
              }
            }}
            link="https://github.com/AtmaniChouaib22/mood"
            title="Mood"
            year={2025}
            role="Full stack web dev Development"
            description="TypeScript, Next.js, OpenAI APi, Zod, Clerk, PostgreSQL, Prisma, TailwindCSS"
            tooltipContent="A modern, AI-powered journaling application that provides insights into your mental wellbeing."
            tooltipColor="#FB2C36"
          />
          <MyProjectsBox
            ref={(el) => {
              if (el) {
                cardsRef.current[2] = el;
              }
            }}
            link="https://github.com/AtmaniChouaib22/zex-cars"
            title="Zex Cars"
            year={2024}
            role="Full Stack Web Development"
            description="ExpressJs, React.js, MongoDb, Node.js, shadcnUi, passportJs, express-session, TailwindCSS"
            tooltipContent="A modern website for car buying and selling, with user and admin interfaces."
            tooltipColor="#155DFC"
          />
          <MyProjectsBox
            ref={(el) => {
              if (el) {
                cardsRef.current[3] = el;
              }
            }}
            link="https://github.com/AtmaniChouaib22/CLI-Note-app"
            title="CLI Note App"
            year={2025}
            role="Mobile App Development"
            description="Node.js , Yargs, JavaScript"
            tooltipContent="A CLI-based note-taking application that allows you to manage notes in the CLI."
            tooltipColor="#FFD230"
          />
          <MyProjectsBox
            ref={(el) => {
              if (el) {
                cardsRef.current[4] = el;
              }
            }}
            link="https://github.com/AtmaniChouaib22/movies-app"
            title="Mobile Movies App"
            year={2025}
            role="Mobile App Development"
            description="React-native, expo, expo-router, appwrite, nativewind"
            tooltipContent="A mobile application that allows you to search for movies and view details about them."
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
