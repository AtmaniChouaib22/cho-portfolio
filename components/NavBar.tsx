"use client";
import Link from "next/link";
import { useState } from "react";
//icon imports
import { SlHome } from "react-icons/sl";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const links = [
  { name: "Home", href: "/", icon: <SlHome /> },
  { name: "My projects", href: "/projects", icon: <IoBriefcaseOutline /> },
  { name: "About me", href: "/about", icon: <FaRegAddressCard /> },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-custom-dark text-custom-text flex items-center py-4 thin-bottom-border min-w-full relative">
        <div className="flex justify-center items-center gap-1 rounded-3xl thin-border px-3 py-2 ml-3 md:ml-6">
          <div>
            <FaCircle />
          </div>
          <Link href={"/"}>choZex</Link>
        </div>

        <div className="hidden md:block thin-border rounded-3xl absolute left-1/2 transform -translate-x-1/2">
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
          onClick={toggleMobileMenu}
          className="md:hidden p-2 mr-3 hover:text-custom-blue ml-auto"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <IoMdClose size={24} />
          ) : (
            <RiMenu4Line size={24} />
          )}
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
          </ul>
        </div>
      )}
    </>
  );
}
