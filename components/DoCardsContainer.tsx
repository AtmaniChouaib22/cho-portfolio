"use client";
import { useEffect, useRef } from "react";
import { IoBrush } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
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
            icon={<IoBrush size={50} />}
            title="UI & UX"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam alias repellat necessitatibus!"
            color="blue"
          />
        </div>
        <div
          ref={(el) => {
            if (el) cardsRef.current[1] = el;
          }}
        >
          <DoCard
            icon={<MdDevices size={50} />}
            title="Web & Mobile App"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam alias repellat necessitatibus!"
            color="violet"
          />
        </div>
        <div
          ref={(el) => {
            if (el) cardsRef.current[2] = el;
          }}
        >
          <DoCard
            icon={<IoColorPaletteOutline size={50} />}
            title="Design & Creative"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam alias repellat necessitatibus!"
            color="pink"
          />
        </div>
        <div
          ref={(el) => {
            if (el) cardsRef.current[3] = el;
          }}
        >
          <DoCard
            icon={<AiOutlineThunderbolt size={50} />}
            title="Development"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam alias repellat necessitatibus!"
            color="orange-strong"
          />
        </div>
      </div>
    </div>
  );
};

export default DoCardsContainer;
