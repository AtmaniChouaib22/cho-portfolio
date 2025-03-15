import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { FaArrowRight } from "react-icons/fa";

const pageLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/chouaib-atmani-a52b12263/",
    icon: (
      <SocialIcon
        network="linkedin"
        style={{
          height: 40,
          width: 40,
        }}
        url="https://www.linkedin.com/in/chouaib-atmani-a52b12263/"
      />
    ),
  },
  {
    name: "Github",
    path: "https://github.com/AtmaniChouaib22",
    icon: (
      <SocialIcon
        network="github"
        style={{
          height: 35,
          width: 35,
        }}
        url="https://github.com/AtmaniChouaib22"
      />
    ),
  },
  {
    name: "Whatsapp",
    path: "/",
    icon: (
      <SocialIcon
        network="whatsapp"
        style={{
          height: 35,
          width: 35,
        }}
        url=""
      />
    ),
  },
  {
    name: "Instagram",
    path: "/",
    icon: (
      <SocialIcon
        network="instagram"
        style={{
          height: 35,
          width: 35,
        }}
        url="https://www.instagram.com/atm.chouaib/"
      />
    ),
  },
  {
    name: "Dev",
    path: "https://dev.to/chouaib_atmani",
    icon: (
      <SocialIcon
        network="dev.to"
        style={{
          height: 35,
          width: 35,
        }}
        url="https://dev.to/chouaib_atmani"
      />
    ),
  },
];

interface FooterButtonProps {
  text: string;
  description: string;
}

const FooterButton = ({ text, description }: FooterButtonProps) => {
  return (
    <div className="thin-bottom-border">
      <Link
        href={""}
        className="flex items-center gap-3 hover:text-custom-blue font-medium group"
      >
        <div className="text-xl font-medium">{text}</div>
        <FaArrowRight
          className="thin-border rounded-full p-2 text-custom-green transition-transform duration-250 group-hover:-rotate-45"
          size={40}
        />
      </Link>
      <div className="text-[13px] pb-2">{description}</div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="relative text-custom-text thin-border rounded-lg w-full h-96 mb-2 overflow-hidden">
        <div className="flex items-start justify-evenly pt-10">
          <h6 className="text-2xl font-medium">
            Where <span>aesthetics</span> &<br /> <span>functionality</span>{" "}
            meet
          </h6>
          <div>
            <h6 className="text-xl text-custom-orange-strong font-medium mb-5">
              Explore
            </h6>
            <ul>
              {pageLinks.map((link) => (
                <li key={link.name} className="mb-3 text-lg">
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="text-xl text-custom-blue font-medium mb-5">
              Follow Me
            </h6>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {socialLinks.map((link) => (
                <li key={link.name} className="flex items-center gap-2 group">
                  <div className="hover:cursor-pointer">{link.icon}</div>
                  <Link
                    className="group-hover:text-custom-blue"
                    href={link.path}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterButton text="Contact Me" description="Say Hello !" />
            <FooterButton text="My Projects" description="Explore Projects" />
          </div>
        </div>
        <div className="text-[200px] text-center absolute inset-x-0 -bottom-25 font-bold">
          Chouaib Atmani
        </div>
      </footer>
      <div className="flex items-center justify-between text-custom-text w-full pb-3">
        <div className="ml-10">chozex ©2024 - Privacy Policy</div>
        <div>Constantine, Algeria</div>
      </div>
    </>
  );
};

export default Footer;
