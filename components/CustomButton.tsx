"use client";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { FaArrowRightLong } from "react-icons/fa6";

interface CustomButtonProps {
  text: string;
  href: string;
}

const CustomButton = ({ text, href }: CustomButtonProps) => {
  const link = useRef<HTMLAnchorElement>(null);
  const fillDiv = useRef<HTMLDivElement>(null);

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
      href={`/${href}`}
      className="relative flex justify-center items-center text-white py-2 px-3 md:text-xl md:py-4 md:px-5 overflow-hidden thin-border rounded-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    
      <div
        ref={fillDiv}
        className="absolute bottom-0 left-0 w-full h-0 bg-custom-orange-strong z-0 transition-all duration-500"
      ></div>
     
      <span className="relative z-10 px-2 py-1 text-lg md:text-2xl">
        {text}
      </span>
      <FaArrowRightLong
        size={35}
        className="relative z-10 inline ml-1 text-white md:w-10 md:h-10"
      />
    </Link>
  );
};

export default CustomButton;
