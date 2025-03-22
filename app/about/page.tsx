import Image from "next/image";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import ArticlesSection from "@/components/AboutComponents/ArticlesSection";
import SkillsCompo from "@/components/AboutComponents/SkillsCompo";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chouaib-atmani-a52b12263/",
    icon: (
      <IoLogoLinkedin
        style={{
          height: 40,
          width: 40,
        }}
      />
    ),
  },
  {
    name: "Github",
    url: "https://github.com/AtmaniChouaib22",
    icon: (
      <FaGithub
        style={{
          height: 35,
          width: 35,
        }}
      />
    ),
  },
  {
    name: "Whatsapp",
    url: "https://wa.me/213781861207",
    icon: (
      <FaWhatsapp
        style={{
          height: 35,
          width: 35,
        }}
      />
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/atm.chouaib/",
    icon: (
      <FaInstagram
        style={{
          height: 35,
          width: 35,
        }}
      />
    ),
  },
];

const skillsInfo = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java"],
    color: "blue",
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TailwindCSS",
      "ShadcnUI",
      "GSAP",
      "Bootstrap",
      "motion",
    ],
    color: "red",
  },
  { title: "Backend", skills: ["Node.js", "Express"], color: "green" },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
    color: "orange",
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "Postman", "vite", "webpack", "Figma", "jest"],
    color: "violet",
  },
  {
    title: "Others",
    skills: [
      "RESTful APIs",
      "websockets",
      "appwrite",
      "Firebase",
      "Vscode",
      "Netlify",
      "Vercel",
    ],
    color: "gray",
  },
];

const About = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen text-white">
      <section className="w-full md:w-1/2 bg-custom-dark-blue p-8 flex flex-col items-start">
        <div className="mb-6 relative w-[150px] h-[150px] rounded-full overflow-hidden">
          <Image
            src={"/me.jpg"}
            fill
            alt="Chouaib Atmani"
            className="object-cover"
            sizes="150px"
          />
        </div>

        <div className=" text-custom-text">
          <h1 className="text-3xl font-bold mb-2">Chouaib Atmani</h1>
          <div className="text-xl mb-1">Full Stack Web Developer</div>
          <div className="text-gray-300 mb-4">📍 Constantine, Algeria 🇩🇿</div>
          <div className="max-w-md text-lg italic mb-8">
            Building Real Projects for Real Clients, Not Just More Projects
          </div>

          <div className="w-full flex gap-4">
            <div className="mb-4">
              <Link
                href="https://drive.google.com/file/d/1HGWC48c0SHoJznXFf7RdInumPQ41zEXL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="thin-border hover:bg-custom-text hover:text-black duration-200  px-6 py-2 rounded-md transition flex items-center justify-center"
              >
                <PiReadCvLogo
                  width={20}
                  height={20}
                  className="inline-block mr-2"
                />
                Resume
              </Link>
            </div>
            <div>
              <ul className="flex justify-center gap-6">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ArticlesSection />
      </section>

      <section className="w-full md:w-1/2 bg-custom-darker-blue p-8 overflow-y-auto">
      
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-custom-text mb-4">About Me</h3>
          <div className="leading-relaxed flex flex-col gap-4 text-custom-text">
            <p>
              Hi, I'm Chouaib Atmani, a passionate Software Engineer and Web
              Developer with a strong focus on building scalable,
              high-performance web applications. With expertise in JavaScript,
              TypeScript, React.js, Next.js, Node.js, and modern backend
              technologies, I love solving complex problems and crafting
              seamless user experiences.
            </p>

            <p>
              Beyond coding, I thrive on learning new technologies,
              collaborating with teams, and bringing innovative ideas to life. I
              enjoy tackling challenges that push me to grow as a developer and
              continuously refine my skills.
            </p>
            <p>
              I'm always open to new opportunities where I can apply my
              expertise, contribute to exciting projects, and make a meaningful
              impact. Feel free to reach out—I'd love to connect!
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-custom-text mb-4">Skills</h3>
          <div>
            {skillsInfo.map((skill) => (
              <SkillsCompo {...skill} key={skill.title} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
