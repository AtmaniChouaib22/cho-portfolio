"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { FaArrowRightLong } from "react-icons/fa6";

interface CustomButtonProps {
  text: string;
}

const CustomButton = ({ text }: CustomButtonProps) => {
  const link = useRef<HTMLAnchorElement>(null);
  const fillDiv = useRef<HTMLDivElement>(null);
  const bulletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bulletRef.current) return;

    const bulletTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    bulletTimeline
      .to(bulletRef.current, {
        boxShadow: "0 0 15px 5px rgba(46, 213, 115, 0.8)",
        backgroundColor: "#2ed573",
        scale: 1.2,
        duration: 0.8,
        ease: "sine.inOut",
      })
      .to(bulletRef.current, {
        boxShadow: "0 0 8px 2px rgba(46, 213, 115, 0.4)",
        backgroundColor: "#20bf6b",
        scale: 1,
        duration: 0.8,
        ease: "sine.inOut",
      });

    return () => {
      bulletTimeline.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.to(fillDiv.current, {
      height: "100%",
      duration: 0.4,
      ease: "steps(5)",
    });

    gsap.fromTo(
      link.current,
      { y: 0, x: 0 },
      {
        y: -5,
        x: 5,
        duration: 0.1,
        yoyo: true,
        repeat: 3,
        ease: "power1.inOut",
      }
    );
  };

  const handleMouseLeave = () => {
    gsap.to(fillDiv.current, {
      height: "0%",
      duration: 0.4,
      ease: "power1.out",
    });
  };

  return (
    <Link
      ref={link}
      href={"/about"}
      className="relative flex justify-center items-center text-white text-md md:text-xl  py-0.5 px-0.5 md:py-2 md:px-3 overflow-hidden thin-border rounded-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={fillDiv}
        className="absolute bottom-0 left-0 w-full h-0 bg-custom-orange-strong z-0 transition-all duration-500"
      ></div>

      <div className="relative z-10 flex items-center gap-1 px-0.5 py-0.5 md:gap-3 md:px-2 md:py-1">
        <div
          ref={bulletRef}
          className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-green-500 shadow-green"
        />
        <span className="md:text-lg text-xs">{text}</span>
      </div>

      <FaArrowRightLong
        size={25}
        className="w-[15px] h-[15px] relative z-10 inline ml-1 text-white"
      />
    </Link>
  );
};

export default CustomButton;
