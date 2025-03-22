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
    network: "linkedin",
  },
  {
    name: "Github",
    path: "https://github.com/AtmaniChouaib22",
    network: "github",
  },
  { name: "Whatsapp", path: "https://wa.me/213781861207", network: "whatsapp" },
  {
    name: "Instagram",
    path: "https://www.instagram.com/atm.chouaib/",
    network: "instagram",
  },
  { name: "Dev", path: "https://dev.to/chouaib_atmani", network: "dev.to" },
];

interface FooterButtonProps {
  text: string;
  description: string;
  link: string;
}

const FooterButton = ({ text, description, link }: FooterButtonProps) => (
  <div className="thin-bottom-border pb-3 w-40 flex flex-col justify-between">
    <Link
      href={`/${link}`}
      className="flex items-center justify-between w-full text-lg font-medium group hover:text-custom-blue"
    >
      <span>{text}</span>
      <FaArrowRight
        className="thin-border rounded-full p-2 text-custom-green transition-transform duration-200 group-hover:-rotate-45 ml-4"
        size={35}
      />
    </Link>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col text-custom-text thin-border rounded-lg w-full py-10 px-5 md:px-10 lg:px-20 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
         
          <div className="text-center md:text-left">
            <h6 className="text-2xl font-semibold">
              Where <span className="text-custom-violet">aesthetics</span> &
              <br />
              <span className="text-custom-blue">functionality</span> meet
            </h6>
          </div>

          
          <div className="text-center md:text-left">
            <h6 className="text-xl font-semibold text-custom-orange-strong mb-3">
              Explore
            </h6>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-lg hover:text-custom-blue"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="text-center md:text-left">
            <h6 className="text-xl font-semibold text-custom-blue mb-3">
              Follow Me
            </h6>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
              {socialLinks.map((link) => (
                <li
                  key={link.name}
                  className="flex items-center justify-between gap-3"
                >
                  <SocialIcon
                    network={link.network}
                    style={{ height: 35, width: 35 }}
                    url={link.path}
                  />
                  <Link
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-custom-blue truncate"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

       
        <div className="flex flex-row justify-center items-center gap-5 md:gap-0 md:flex-col md:items-end mt-8 mb-5 md:space-y-5 md:mb-16 lg:mb-20 z-20">
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

       
        <div className="text-[40px] sm:text-[80px] md:text-[100px] lg:text-[145px] xl:text-[160px] 2xl:text-[200px] text-center font-bold absolute inset-x-0 bottom-[-2.5%] sm:bottom-[-5%] md:bottom-[-10%] lg:bottom-[-15%] xl:bottom-[-18%] 2xl:bottom-[-22%] text-custom-text text-nowrap w-full">
          Chouaib Atmani
        </div>

      
      </footer>
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm mt-5 pt-3">
        <span>chozex ©2024 - Privacy Policy</span>
        <span>Constantine, Algeria</span>
      </div>
    </>
  );
};

export default Footer;
