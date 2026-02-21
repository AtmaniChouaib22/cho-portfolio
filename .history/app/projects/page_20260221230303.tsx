"use client";
import { useEffect, useRef } from "react";
import ProjectCard from "@/components/ProjectsComponents/ProjectCard";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projectsInfo = [
  {
    title: "GoldGest",
    year: "2026",
    description:
      "GoldGest is a SaaS software solution for managing gold enterprise wholesale, available as both desktop and mobile app. Built with ElectronJS, React Native, PostgreSQL, ReactJS, Prisma, and more. Features real-time gold and currency exchange rates, sales and purchase management, broken jewelry purchases, import, transport, export, refining, and more. Includes WhatsApp invoice sharing, secure and precise automated calculations, and supports multiple user roles and permissions.",
    list: [
      "Comprehensive client and supplier management",
      "Track purchases, sales, and returns with ease",
      "Real-time analytics and financial summaries",
      "Multi-currency and gold price tracking",
      "Export data to Excel and PDF",
      "Role-based access and secure authentication",
      "Responsive design for desktop and mobile",
      "User-friendly dashboards and notifications",
      // ...existing code...
      "Advanced search and filtering options",
    ],
    link: "https://goldgest.lovable.app/",
    stack:
      "React.js, Electron, Next.js, TypeScript, TailwindCSS, Node.js, PostgreSQL",
    image: "/goldgest.png",
    isReversed: false,
  },
  {
    title: "Soumi Cosmetics",
    year: "2025",
    description:
      "A comprehensive e-commerce website for a cosmetics client featuring a modern shopping experience and admin dashboard for order management.",
    list: [
      "Complete e-commerce functionality with product catalog",
      "Shopping cart and secure checkout process",
      "Customer account management and order tracking",
      "Admin dashboard for order management and analytics",
      "Excel export functionality for order data",
      "Real-time inventory management",
      "Responsive design optimized for all devices",
      "Smooth animations and modern UI/UX",
      "Meta Pixel tracking integration for ads optimization",
      "SEO optimized for better search visibility",
    ],
    link: "https://www.soumicosmetics.shop/",
    stack: "Next.js, Supabase, GSAP, TypeScript, TailwindCSS, PostgreSQL",
    image: "/soumi.png",
    isReversed: false,
  },
  {
    title: "FlameGuard",
    year: "2025",
    description:
      "An NTIC faculty (IT faculty) project for fire emergency detection and reporting built with Flutter and Firebase, featuring IoT sensor integration and AI-powered image analysis.",
    list: [
      "Real-time fire detection via IoT sensors integration",
      "Emergency reporting system with image capture capability",
      "AI model hosted on Firebase for image analysis and validation",
      "Mappedin 3D mapping for evacuation route visualization",
      "Role-based navigation (users vs rescuers) with different interfaces",
      "Emergency chat system for communication during alerts",
      "User profile management with emergency contacts",
      "Alert history tracking and management",
      "Push notifications for instant emergency alerts",
      "Firebase integration for real-time data synchronization",
      "Cross-platform mobile application support",
    ],
    link: "https://github.com/AtmaniChouaib22/FlameGuard_v1",
    stack: "Flutter, Dart, Firebase, AI/ML Models, IoT Integration",
    image: "/flameGuard.jpeg",
    isReversed: false,
  },
  {
    title: "Zex Cars",
    year: "2024",
    description:
      "A modern website for car buying and selling, with user and admin interfaces.",
    list: [
      "User account creation and management",
      "Car listing for selling",
      "Car browsing and purchasing",
      "Admin dashboard for request management",
      "User profiles with transaction history",
      "Deal confirmation/rejection system",
      "Responsive design for all devices",
    ],
    link: "https://github.com/AtmaniChouaib22/zex-cars",
    stack:
      "ExpressJs, React.js, MongoDb, Node.js, shadcnUi, passportJs, express-session, TailwindCSS",
    image: "/zex-cars.png",
    isReversed: true,
  },
  {
    title: "Mood",
    year: "2024",
    description:
      "A modern, AI-powered journaling application that helps track your emotions and provides insights into your mental wellbeing.",
    list: [
      "Write and save your thoughts securely.",
      "Get intelligent insights about your mood and emotions and generates a color based on the mood.",
      "Sentiment Tracking: Visualize your emotional patterns over time.",
      "Secure Authentication: Keep your private thoughts protected",
    ],
    link: "https://github.com/AtmaniChouaib22/mood",
    stack:
      "TypeScript, Next.js, OpenAI APi, Zod, Clerk, PostgreSQL, Prisma, TailwindCSS",
    image: "/mood.png",
    isReversed: true,
  },
  {
    title: "AI-Agent",
    year: "2025",
    description:
      "AI cli agent that can get dad jokes, joke image generation and get reddit posts.",
    list: [
      "dad jokes: get random dad jokes from third party API (https://icanhazdadjoke.com/api)",
      "Image generation: generate a image representaion of that joke.",
      "get reddit posts: get funny reddit posts.",
      "got a memory: remember the chat",
    ],
    link: "https://github.com/AtmaniChouaib22/AI-Agent",
    stack: "TypeScript, Next.js, Zod , OpenAi APi, Prisma, TailwindCSS",
    image: "/agent.png",
    isReversed: false,
  },
  {
    title: "Mobile Movies App",
    year: "2025",
    description:
      "A CLI-based note-taking application that allows you to manage notes in the CLI.",
    list: [
      "Show Most searched Movies by the people",
      "show all movies and movie details",
      "search for a movie and optimize search algorithm to increase popularity",
    ],
    link: "https://github.com/AtmaniChouaib22/movies-app",
    stack: "React-native, expo, expo-router, appwrite, nativewind",
    image: "/mobile.png",
    isReversed: true,
  },
  {
    title: "Cli Note App",
    year: "2025",
    description:
      "A CLI-based note-taking application that allows you to manage notes in the CLI.",
    list: [
      "Add with tags, remove, and list notes via CLI commands",
      "Search for a single note",
      "View notes in a web browser",
    ],
    link: "https://github.com/AtmaniChouaib22/CLI-Note-app",
    stack: "Node.js , Yargs, JavaScript",
    image: "/notes-app.jpg",
    isReversed: false,
  },
];

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MyProjects = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Store our ScrollTrigger instances
  const myScrollTriggers = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // Clear ONLY our own ScrollTriggers, not all of them
    myScrollTriggers.current.forEach((trigger) => trigger.kill());
    myScrollTriggers.current = [];

    // No timeout - run immediately
    if (cardsRef.current.length === 0) {
      console.log("No card refs found");
      return;
    }

    // Create animations for each card
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const direction = index % 2 === 0 ? -200 : 200;

      // Create a timeline for each card
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
        },
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
        // markers: true, // Uncomment for debugging
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
    <div
      className="w-full flex flex-col items-center gap-5 p-10"
      ref={containerRef}
    >
      <h1
        ref={(el) => {
          if (el) cardsRef.current[0] = el;
        }}
        className="text-custom-text text-5xl self-start ml-10 opacity-0"
      >
        Projects
      </h1>
      <div
        className="flex justify-end items-center w-11/12 opacity-0"
        ref={(el) => {
          if (el) cardsRef.current[1] = el;
        }}
      >
        <div className="thin-border-line w-64 h-px bg-custom-text"></div>
        <div className="bg-custom-text absolute right-48 w-20 h-20 rounded-full flex items-center justify-center">
          <AiOutlineThunderbolt size={40} className="text-black" />
        </div>
      </div>
      <div className="min-w-10/12 mt-10">
        {projectsInfo.map((project, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index + 2] = el;
            }}
            className="mb-16 opacity-0"
          >
            <ProjectCard
              title={project.title}
              stack={project.stack}
              link={project.link}
              list={project.list}
              image={project.image}
              year={project.year}
              isReversed={project.isReversed}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
