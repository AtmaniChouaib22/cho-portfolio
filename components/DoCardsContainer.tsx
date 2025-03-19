"use client";
import { useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
import { GiThink } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DoCard from "./DoCard";

gsap.registerPlugin(ScrollTrigger);

const DoCardsContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
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
      y: 60,
      stagger: 0.5,
      duration: 0.8,
      ease: "power2.out",
    });

    tl.to(cardsRef.current, {
      opacity: 0,
      y: -60,
      stagger: -0.5,
      duration: 0.8,
      ease: "power2.in",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="px-10 flex flex-col items-center justify-center py-10"
    >
      <h3 className="text-center text-4xl text-custom-violet pb-7">
        WHAT I DO
      </h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div
          ref={(el) => {
            if (el) cardsRef.current[0] = el;
          }}
        >
          <DoCard
            icon={<FaReact size={50} />}
            title="Frontend Development"
            paragraph="Building dynamic, user-friendly interfaces with a focus on performance and accessibility. Crafting seamless digital experiences that enhance user interaction."
            color="blue"
          />
        </div>
        <div
          ref={(el) => {
            if (el) cardsRef.current[1] = el;
          }}
        >
          <DoCard
            icon={<BsStack size={50} />}
            title="Full Stack Solutions"
            paragraph="Developing scalable, end-to-end applications that integrate intuitive frontends with robust backend logic. Ensuring seamless communication across the entire stack."
            color="violet"
          />
        </div>
        <div
          ref={(el) => {
            if (el) cardsRef.current[2] = el;
          }}
        >
          <DoCard
            icon={<GiThink size={50} />}
            title="Problem Solving"
            paragraph="Turning challenges into solutions with analytical thinking and structured problem-solving. Designing efficient and maintainable systems through logical reasoning."
            color="orange"
          />
        </div>
        <div
          ref={(el) => {
            if (el) cardsRef.current[3] = el;
          }}
        >
          <DoCard
            icon={<BsCodeSlash size={50} />}
            title="Software Engineer"
            paragraph="Applying software engineering principles to create scalable and maintainable applications. Continuously learning and refining best practices in development and architecture."
            color="orange-strong"
          />
        </div>
      </div>
    </div>
  );
};

export default DoCardsContainer;
