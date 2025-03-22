"use client";
import { useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { GiThink } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DoCard from "./DoCard";

gsap.registerPlugin(ScrollTrigger);

const DoCardsContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const myScrollTriggers = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      myScrollTriggers.current.forEach((trigger) => trigger.kill());
      myScrollTriggers.current = [];

      if (
        !containerRef.current ||
        cardsRef.current.filter(Boolean).length === 0
      ) {
        console.log("Container or card refs not ready yet");
        return;
      }

      ScrollTrigger.refresh();

      const inTimeline = gsap.timeline({
        scrollTrigger: {
          id: "doCards-fadeIn",
          trigger: containerRef.current,
          start: "top 80%",
          end: "center center",
          scrub: 1,
        },
      });

      inTimeline.from(cardsRef.current, {
        opacity: 0,
        y: 200,
        stagger: 0.5,
        duration: 2,
        ease: "power2.out",
      });

      myScrollTriggers.current.push(ScrollTrigger.getById("doCards-fadeIn")!);

      const outTimeline = gsap.timeline({
        scrollTrigger: {
          id: "doCards-fadeOut",
          trigger: containerRef.current,
          start: "bottom 60%",
          end: "bottom top",
          scrub: 1,
        },
      });

      outTimeline.to(cardsRef.current, {
        opacity: 0,
        y: -200,
        stagger: 0.5,
        duration: 2,
        ease: "power2.in",
      });

      myScrollTriggers.current.push(ScrollTrigger.getById("doCards-fadeOut")!);
    }, 100);

    return () => {
      clearTimeout(timer);
      myScrollTriggers.current.forEach((trigger) => {
        if (trigger) trigger.kill();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="px-10 flex flex-col items-center justify-center py-10"
    >
      <h3 className="text-center text-4xl text-custom-violet pb-7">
        WHAT I DO
      </h3>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
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
