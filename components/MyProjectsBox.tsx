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
          className="flex items-center justify-between px-40 py-14 text-custom-text hover:text-custom-blue thin-bottom-border transition-colors duration-300"
        >
          <div>
            <div className="text-4xl">{title}</div>
            <div>{year}</div>
          </div>
          <div>
            <div className="text-lg">{role}</div>
            <div className="text-sm font-light">{description}</div>
          </div>
        </Link>
      </div>
    );
  }
);

MyProjectsBox.displayName = "MyProjectsBox";

export default MyProjectsBox;
