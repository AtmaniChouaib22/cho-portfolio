"use client";
import StackIcon from "tech-stack-icons";
import React, { useState } from "react";

const TechStack = () => {
  const [isPaused, setIsPaused] = useState(false);

  const technologies = [
    { name: "React", icon: <StackIcon name="reactjs" /> },
    { name: "JavaScript", icon: <StackIcon name="js" /> },
    { name: "TypeScript", icon: <StackIcon name="typescript" /> },
    { name: "Node.js", icon: <StackIcon name="nodejs" /> },
    { name: "HTML", icon: <StackIcon name="html5" /> },
    { name: "CSS", icon: <StackIcon name="css3" /> },
    { name: "Git", icon: <StackIcon name="git" /> },
    {
      name: "GitHub",
      icon: <StackIcon name="github" />,
    },
    { name: "Tailwindcss", icon: <StackIcon name="tailwindcss" /> },
    { name: "Next.js", icon: <StackIcon name="nextjs2" /> },
    { name: "MongoDB", icon: <StackIcon name="mongodb" /> },
    { name: "Mongoose", icon: <StackIcon name="mongoose" /> },
    { name: "Appwrite", icon: <StackIcon name="appwrite" /> },
    { name: "Firebase", icon: <StackIcon name="firebase" /> },
    { name: "GSAP", icon: <StackIcon name="gsap" /> },
    { name: "OpenAI", icon: <StackIcon name="openai" /> },
    { name: "Zod", icon: <StackIcon name="zod" /> },
    { name: "Postman", icon: <StackIcon name="postman" /> },
    { name: "PostgreSQL", icon: <StackIcon name="postgresql" /> },
    { name: "Prisma", icon: <StackIcon name="prisma" /> },
    { name: "Vite", icon: <StackIcon name="vitejs" /> },
    { name: "ShadcnUI", icon: <StackIcon name="shadcnui" /> },
    { name: "Redux", icon: <StackIcon name="redux" /> },
  ];

  // Double the technologies for seamless loop
  const allTechnologies = [...technologies, ...technologies];

  return (
    <div className="w-screen sm:w-full overflow-hidden bg-custom-dark py-8 text-white">
      <div className="container sm:mx-auto sm:px-4">
        <h4 className="text-4xl font-semibold text-center mb-6 text-custom-violet">
          My TECH STACK
        </h4>
        <p className="text-xl text-center mb-8 px-10 sm:mx-30 sm:text-3xl ">
          My expertise spans a diverse range of{" "}
          <span className="text-custom-orange-strong">technologies</span>,
          enabling me to deliver comprehensive and{" "}
          <span className="text-custom-cy">cutting-edge</span> solutions across
          various platforms.
        </p>

        <div className="relative w-full ">
          {/* Fade gradient on the left side - matching bg-custom-dark */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-custom-dark to-transparent z-10"></div>

          {/* Fade gradient on the right side - matching bg-custom-dark */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-custom-dark to-transparent z-10"></div>

          {/* Carousel container */}
          <div className="overflow-hidden relative w-screen md:w-full px-8">
            <div
              className="flex items-center"
              style={{
                animation: isPaused
                  ? "none"
                  : "carouselAnimation 10s linear infinite",
              }}
            >
              {allTechnologies.map((tech, index) => (
                <div
                  key={`tech-${index}`}
                  className="flex flex-col items-center justify-center w-10 sm:w-16 md:w-18 mx-1 sm:mx-2 flex-shrink-0"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">
                    {tech.icon}
                  </div>
                  <div className="text-xs sm:text-sm text-center">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes carouselAnimation {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(0);
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
