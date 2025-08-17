"use client";
import { PiBriefcaseLight } from "react-icons/pi";
import MyProjectsBox from "@/components/MyProjectsBox";
import CustomButton from "@/components/CustomButton";
import { TooltipProvider } from "@/components/tooltip";

const MyProjects = () => {
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
        <div className="mb-10 flex flex-col gap-10 md:mx-20">
          <MyProjectsBox
            link="https://github.com/AtmaniChouaib22/AI-Agent"
            title="AI-Agent"
            year={2025}
            role="Full-stack web development"
            description="TypeScript, Next.js, Zod , OpenAi APi, Prisma, TailwindCSS"
            tooltipContent="AI cli agent that can get dad jokes, joke image generation and get reddit posts."
            tooltipColor="#4F39F6"
          />
          <MyProjectsBox
            link="https://github.com/AtmaniChouaib22/mood"
            title="Mood"
            year={2025}
            role="Full stack web dev Development"
            description="TypeScript, Next.js, OpenAI APi, Zod, Clerk, PostgreSQL, Prisma, TailwindCSS"
            tooltipContent="A modern, AI-powered journaling application that provides insights into your mental wellbeing."
            tooltipColor="#FB2C36"
          />
          <MyProjectsBox
            link="https://github.com/AtmaniChouaib22/zex-cars"
            title="Zex Cars"
            year={2024}
            role="Full Stack Web Development"
            description="ExpressJs, React.js, MongoDb, Node.js, shadcnUi, passportJs, express-session, TailwindCSS"
            tooltipContent="A modern website for car buying and selling, with user and admin interfaces."
            tooltipColor="#155DFC"
          />
          <MyProjectsBox
            link="https://github.com/AtmaniChouaib22/CLI-Note-app"
            title="CLI Note App"
            year={2025}
            role="Mobile App Development"
            description="Node.js , Yargs, JavaScript"
            tooltipContent="A CLI-based note-taking application that allows you to manage notes in the CLI."
            tooltipColor="#FFD230"
          />
          <MyProjectsBox
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
