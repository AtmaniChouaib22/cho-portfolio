"use client";
import Link from "next/link";
import gsap from "gsap";
import { useRef, useEffect } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const FooterIntro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const icon1 = useRef(null);
  const icon2 = useRef(null);
  const icon3 = useRef(null);
  const icon4 = useRef(null);

  const icons = [icon1, icon2, icon3, icon4];

  useEffect(() => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();

    const handleMouseOver = () => {
      t1.to(icon1.current, {
        y: -30,
        x: -20,
        duration: 0.5,
        ease: "expo.out",
        boxShadow: "0px 0px 0px 8px rgba(255, 255, 227, 0.42)",
      }).to(icon2.current, {
        y: -30,
        x: -10,
        duration: 0.5,
        ease: "expo.out",
        boxShadow: "0px 0px 0px 8px rgba(255, 255, 227, 0.42)",
      });
      //
      t2.to(icon3.current, {
        y: -30,
        x: 10,
        duration: 0.5,
        ease: "expo.out",
        boxShadow: "0px 0px 0px 8px rgba(255, 255, 227, 0.42)",
      }).to(icon4.current, {
        y: -30,
        x: 20,
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
    <div className="flex justify-between thin-top-border py-3 min-w-full">
      <div className="text-custom-text ml-6 ">
        // Design, Code,
        <br />
        Engage
      </div>

      <div
        ref={containerRef}
        className="flex gap-2 justify-center items-center border-custom-border border-1 rounded-4xl px-2"
      >
        <div
          className="flex justify-center items-center rounded-full w-10 h-10 bg-custom-text"
          ref={icon1}
        >
          <Link
            href=""
            className="flex justify-center items-center rounded-full "
          >
            <FaLinkedinIn size={30} className="text-black" />
          </Link>
        </div>

        <div
          ref={icon2}
          className="flex justify-center items-center rounded-full bg-custom-text"
        >
          <Link
            href=""
            className="flex justify-center items-center  w-10 h-10 rounded-full "
          >
            <FaWhatsapp size={35} className="text-black" />
          </Link>
        </div>

        <div
          ref={icon3}
          className="flex justify-center items-center w-10 h-10  rounded-full bg-custom-text"
        >
          <Link
            href=""
            className="flex justify-center items-center rounded-full "
          >
            <FaMediumM size={35} className="text-black" />
          </Link>
        </div>

        <div
          ref={icon4}
          className="flex justify-center items-center  w-10 h-10   rounded-full bg-custom-text"
        >
          <Link
            href=""
            className="flex justify-center items-center w-10 h-10  rounded-full "
          >
            <FaGithub size={35} className="text-black" />
          </Link>
        </div>
      </div>

      <div className="flex  gap-1 rounded-3xl border-custom-border border-1 pr-3 py-1 mr-6 justify-center items-center text-custom-text">
        <div className="bg-custom-text rounded-full w-11 h-11 flex justify-center items-center">
          <MdOutlineEmail size={35} className="text-black rounded-full" />
        </div>
        <div>atmanichouaib22@gmail.com</div>
      </div>
    </div>
  );
};

export default FooterIntro;
