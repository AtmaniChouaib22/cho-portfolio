"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
//icon imports
import { SlHome } from "react-icons/sl";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { FaPlay, FaPause } from "react-icons/fa";
import { RiMenu4Line } from "react-icons/ri"; 
import { IoMdClose } from "react-icons/io"; 

const links = [
  { name: "Home", href: "/", icon: <SlHome /> },
  { name: "My projects", href: "/projects", icon: <IoBriefcaseOutline /> },
  { name: "About me", href: "/about", icon: <FaRegAddressCard /> },
];

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    
    audioRef.current = new Audio("/chill-house-sunset.mp3");
    audioRef.current.loop = true;

    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Playback failed:", err);
      });
    }

    setIsPlaying(!isPlaying);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-custom-dark text-custom-text flex justify-between items-center py-4 thin-bottom-border min-w-full">
        <div className="flex justify-center items-center gap-1 rounded-3xl thin-border px-3 py-2 ml-3 md:ml-6">
          <div>
            <FaCircle />
          </div>
          <Link href={"/"}>choZex</Link>
        </div>
        
       
        <div className="hidden md:block thin-border rounded-3xl">
          <ul className="flex justify-center items-center gap-4 px-3 py-2">
            {links.map((link) => (
              <li
                key={link.name}
                className="hover:text-custom-blue hover:cursor-pointer flex justify-center items-center gap-1"
              >
                <div>{link.icon}</div>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        
        <button
          onClick={togglePlayback}
          className="hidden sm:flex rounded-3xl thin-border px-2 py-1 md:px-3 md:py-2 mr-3 md:mr-6 justify-center items-center gap-1 hover:cursor-pointer hover:text-custom-blue transition-colors"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <div>{isPlaying ? <FaPause /> : <FaPlay />}</div>
          <span className="hidden md:inline">{isPlaying ? "Pause Music" : "Play Music"}</span>
        </button>
        
        
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden p-2 mr-3 hover:text-custom-blue"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <IoMdClose size={24} /> : <RiMenu4Line size={24} />}
        </button>
      </nav>

    
      {isMobileMenuOpen && (
        <div className="md:hidden bg-custom-dark text-custom-text py-2 thin-bottom-border">
          <ul className="flex flex-col items-center space-y-3 py-4">
            {links.map((link) => (
              <li
                key={link.name}
                className="hover:text-custom-blue hover:cursor-pointer flex justify-center items-center gap-2 w-full px-4 py-2"
                onClick={handleLinkClick}
              >
                <div>{link.icon}</div>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          
            <li className="sm:hidden w-full px-4 py-2">
              <button
                onClick={togglePlayback}
                className="flex w-full justify-center items-center gap-2 hover:text-custom-blue"
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                <div>{isPlaying ? <FaPause /> : <FaPlay />}</div>
                <span>{isPlaying ? "Pause Music" : "Play Music"}</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}