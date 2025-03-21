"use client";
import Link from "next/link";
import gsap from "gsap";
import { forwardRef, useEffect, useRef } from "react";
import { useTooltip } from "./tooltip";

interface MyProjectsBoxProps {
  title: string;
  year: number;
  role: string;
  description: string;
  link: string;
  tooltipContent: string;
  tooltipColor: string;
}

const MyProjectsBox = forwardRef<HTMLDivElement, MyProjectsBoxProps>(
  (
    { title, year, role, description, link, tooltipContent, tooltipColor },
    ref
  ) => {
    const boxRef = useRef<HTMLAnchorElement>(null);
    const { setTooltip, updatePosition } = useTooltip();

    useEffect(() => {
      const boxElement = boxRef.current;
      if (!boxElement) return;

      const handleMouseOver = () => {
        gsap.to(boxElement, {
          duration: 0.3,
          scale: 1.05,
          ease: "power2.out",
        });
        setTooltip(true, tooltipContent, tooltipColor);
      };

      const handleMouseLeave = () => {
        gsap.to(boxElement, {
          duration: 0.3,
          scale: 1,
          ease: "power2.in",
        });
        setTooltip(false, "", "");
      };

      const handleMouseMove = (e: MouseEvent) => {
        updatePosition(e.clientX, e.clientY);
      };

      // Add event listeners
      boxElement.addEventListener("mouseover", handleMouseOver);
      boxElement.addEventListener("mouseleave", handleMouseLeave);
      boxElement.addEventListener("mousemove", handleMouseMove);

      return () => {
        boxElement.removeEventListener("mouseover", handleMouseOver);
        boxElement.removeEventListener("mouseleave", handleMouseLeave);
        boxElement.removeEventListener("mousemove", handleMouseMove);
      };
    }, [tooltipContent, tooltipColor, setTooltip, updatePosition]);

    return (
      <div ref={ref} className="relative">
        <Link
          href={link}
          ref={boxRef}
          className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 sm:px-6 md:px-10 lg:px-40 py-6 md:py-10 lg:py-14 text-custom-text hover:text-custom-blue thin-bottom-border transition-colors duration-300"
        >
          <div className="mb-2 md:mb-0">
            <div className="text-2xl sm:text-3xl lg:text-4xl">{title}</div>
            <div className="text-sm sm:text-base">{year}</div>
          </div>
          <div className="mt-2 md:mt-0 md:max-w-[60%]">
            <div className="text-base sm:text-lg">{role}</div>
            <div className="text-xs sm:text-sm font-light">{description}</div>
          </div>
        </Link>
      </div>
    );
  }
);

MyProjectsBox.displayName = "MyProjectsBox";

export default MyProjectsBox;
