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
    path: "https://wa.me/213781861207",
    icon: (
      <SocialIcon
        network="whatsapp"
        style={{
          height: 35,
          width: 35,
        }}
        url="https://wa.me/213781861207"
      />
    ),
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/atm.chouaib/",
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
  link: string;
}

const FooterButton = ({ text, description, link }: FooterButtonProps) => {
  return (
    <div className="thin-bottom-border">
      <Link
        href={`/${link}`}
        className="flex items-center justify-between gap-3 hover:text-custom-blue font-medium group"
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
        <div className="flex items-start justify-evenly pt-10 relative z-10">
          <h6 className="text-2xl font-medium">
            Where <span className="text-custom-violet">aesthetics</span> &<br />{" "}
            <span className="text-custom-blue">functionality</span> meet
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
                <li
                  key={link.name}
                  className="flex items-center gap-2 group relative"
                >
                  <div className="hover:cursor-pointer">{link.icon}</div>
                  <Link
                    className="group-hover:text-custom-blue relative z-20"
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterButton
              link="about"
              text="About Me"
              description="See my Resume !"
            />
            <FooterButton
              link="projects"
              text="My Projects"
              description="Explore Projects"
            />
          </div>
        </div>
        <div className="text-[200px] text-center absolute inset-x-0 -bottom-25 font-bold z-0">
          Chouaib Atmani
        </div>
      </footer>
      <div className="flex items-center justify-between text-custom-text w-full pb-3">
        <div className="ml-10">chozex ©2024 - Privacy Policy</div>
        <div className="mr-10">Constantine, Algeria</div>
      </div>
    </>
  );
};
export default Footer;
