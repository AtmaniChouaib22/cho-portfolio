"use client";
import Link from "next/link";
import gsap from "gsap";
import { useRef, useEffect } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const FooterIntro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const icon1 = useRef(null);
  const icon2 = useRef(null);
  const icon3 = useRef(null);
  const icon4 = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();

    const handleMouseOver = () => {
      // Check if we're on mobile
      const isMobile = window.innerWidth < 768;
      const yOffset = isMobile ? -20 : -30;
      const xOffsets = isMobile ? [-10, -5, 5, 10] : [-20, -10, 10, 20];

      t1.to(icon1.current, {
        y: yOffset,
        x: xOffsets[0],
        duration: 0.5,
        ease: "expo.out",
        boxShadow: "0px 0px 0px 8px rgba(255, 255, 227, 0.42)",
      }).to(icon2.current, {
        y: yOffset,
        x: xOffsets[1],
        duration: 0.5,
        ease: "expo.out",
        boxShadow: "0px 0px 0px 8px rgba(255, 255, 227, 0.42)",
      });

      t2.to(icon3.current, {
        y: yOffset,
        x: xOffsets[2],
        duration: 0.5,
        ease: "expo.out",
        boxShadow: "0px 0px 0px 8px rgba(255, 255, 227, 0.42)",
      }).to(icon4.current, {
        y: yOffset,
        x: xOffsets[3],
        duration: 0.5,
        ease: "expo.out",
        boxShadow: "0px 0px 0px 10px rgba(255, 255, 227, 0.42)",
      });
    };

    const handleMouseLeave = () => {
      t1.clear();
      t2.clear();
      t1.to(icon4.current, { y: 0, x: 0, duration: 0.3, boxShadow: "none" }).to(
        icon3.current,
        {
          y: 0,
          x: 0,
          duration: 0.3,
          boxShadow: "none",
        }
      );
      //
      t2.to(icon2.current, { y: 0, x: 0, duration: 0.3, boxShadow: "none" }).to(
        icon1.current,
        {
          y: 0,
          x: 0,
          duration: 0.3,
          boxShadow: "none",
        }
      );
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseover", handleMouseOver);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseover", handleMouseOver);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 md:gap-0 thin-top-border py-3 min-w-full px-4 md:px-0">
      <div className="md:flex-1 text-custom-text text-center md:text-left md:ml-6 text-sm md:text-base">
        // Design, Code,
        <br />
        Engage
      </div>

      <div
        ref={containerRef}
        className="fmd:lex-none flex gap-1 md:gap-2 justify-center items-center border-custom-border border-1 rounded-4xl px-1 md:px-2 py-1"
      >
        <div
          className="flex justify-center items-center rounded-full w-8 h-8 md:w-10 md:h-10 bg-custom-text"
          ref={icon1}
        >
          <Link
            href="https://www.linkedin.com/in/chouaib-atmani-a52b12263/"
            className="flex justify-center items-center rounded-full"
            target="_blank"
          >
            <FaLinkedinIn size={20} className="text-black md:text-2xl" />
          </Link>
        </div>

        <div
          ref={icon2}
          className="flex justify-center items-center rounded-full w-8 h-8 md:w-10 md:h-10 bg-custom-text"
        >
          <Link
            target="_blank"
            href="https://wa.me/213781861207"
            className="flex justify-center items-center rounded-full"
          >
            <FaWhatsapp size={20} className="text-black md:text-2xl" />
          </Link>
        </div>

        <div
          ref={icon3}
          className="flex justify-center items-center rounded-full w-8 h-8 md:w-10 md:h-10 bg-custom-text"
        >
          <Link
            target="_blank"
            href="https://www.youtube.com/@AtmaniChouaib"
            className="flex justify-center items-center rounded-full"
          >
            <FaYoutube size={20} className="text-black md:text-2xl" />
          </Link>
        </div>

        <div
          ref={icon4}
          className="flex justify-center items-center rounded-full w-8 h-8 md:w-10 md:h-10 bg-custom-text"
        >
          <Link
            href="https://github.com/AtmaniChouaib22"
            target="_blank"
            className="flex justify-center items-center rounded-full"
          >
            <FaGithub size={20} className="text-black md:text-2xl" />
          </Link>
        </div>
      </div>

      <div className="md:flex-1 flex justify-end">
        <div className="flex gap-1 rounded-3xl border-custom-border border-1 px-2 py-1 md:pr-3 md:py-1 md:mr-6 justify-center items-center text-custom-text max-w-[300px] sm:max-w-[500px]">
          <div className="bg-custom-text rounded-full w-8 h-8 md:w-11 md:h-11 flex-shrink-0 flex justify-center items-center">
            <MdOutlineEmail
              size={18}
              className="text-black rounded-full md:text-2xl"
            />
          </div>
          <div className="text-xs md:text-base truncate">
            atmanichouaib22@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterIntro;
