import Link from "next/link";
//icon imports
import { SlHome } from "react-icons/sl";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

const links = [
  { name: "Home", href: "/", icon: <SlHome /> },
  { name: "My projects", href: "/projects", icon: <IoBriefcaseOutline /> },
  { name: "About me", href: "/about", icon: <FaRegAddressCard /> },
];

export default function Navbar() {
  return (
    <nav className="bg-custom-dark text-custom-text flex justify-between items-center py-4 thin-bottom-border min-w-full">
      <div className="flex justify-center items-center gap-1 rounded-3xl thin-border px-3 py-2 ml-6">
        <div>
          <FaCircle />
        </div>
        <Link href={"/"}>Home</Link>
      </div>
      <div className="thin-border rounded-3xl">
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
      <div className="flex rounded-3xl thin-border px-3 py-2 mr-6 justify-center items-center gap-1 hover:cursor-pointer">
        <div>
          <MdEmail />
        </div>
        Contact Me
      </div>
    </nav>
  );
}
