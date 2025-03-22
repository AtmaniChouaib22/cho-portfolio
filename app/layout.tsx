"use client";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import NavBar from "@/components/NavBar";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "@/components/Footer";

const greetings = [
  ".Hello",
  ".Hola",
  ".مرحبا",
  ".Bonjour",
  ".こんにちは",
  ".你好",
  ".Hallo",
  ".Ciao",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [index, setIndex] = useState(0);
  const [showGreeting, setShowGreeting] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const greetingRef = useRef<HTMLDivElement>(null);

  const innerTimeout = useRef<NodeJS.Timeout | null>(null);
  const outerTimeout = useRef<NodeJS.Timeout | null>(null);
  const innerInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (showGreeting) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showGreeting]);

  useEffect(() => {
    
    outerTimeout.current = setTimeout(() => {
      setFirstLoad(false);
      clearInterval(innerInterval.current as NodeJS.Timeout | undefined);
      clearTimeout(innerTimeout.current as NodeJS.Timeout | undefined);
      
      innerInterval.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % greetings.length);
      }, 200);
      
      innerTimeout.current = setTimeout(() => {
        clearInterval(innerInterval.current as NodeJS.Timeout | undefined);
        setShowGreeting(false);
      }, 2000);
    }, 800);
    return () => {
      clearInterval(innerInterval.current as unknown as number);
      clearTimeout(innerTimeout.current as NodeJS.Timeout | undefined);
      if (outerTimeout.current) {
        clearTimeout(outerTimeout.current);
      }
    };
  }, []);

  useGSAP(() => {
    if (!showGreeting) {
      gsap.to(greetingRef.current, {
        y: "-200vh",
        duration: 1,
        ease: "easeInOut",
      });
    }
  }, [showGreeting]);

  useGSAP(() => {
    if (firstLoad) {
      gsap.to(greetingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "easeOut",
      });
    }
  }, [firstLoad]);
  return (
    <html lang="en">
      <ReactLenis root>
        <body className="bg-custom-dark">
          <div
            ref={greetingRef}
            className="absolute z-50 min-h-screen inset-0 flex items-center justify-center bg-custom-dark text-custom-text text-5xl font-bold"
          >
            {greetings[index]}
          </div>
          <NavBar />
          <main className="relative flex flex-col min-h-screen items-center justify-between bg-custom-dark overflow-hidden">
            {children}
            <Footer />
          </main>
        </body>
      </ReactLenis>
    </html>
  );
}
