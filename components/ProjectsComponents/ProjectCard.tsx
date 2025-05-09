import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  image: string;
  stack: string;
  year: string;
  link: string;
  list: string[];
  isReversed?: boolean;
}

const ProjectCard = ({
  title,
  image,
  stack,
  year,
  link,
  list,
  isReversed,
}: ProjectCardProps) => {
  return (
    <div
      className={`w-full flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      } p-5 items-start gap-5 text-custom-text thin-border rounded-lg mb-8`}
    >
      <div className="w-full md:w-1/2 h-[250px] md:h-[400px] flex items-center justify-center bg-blue-950">
        <div className="w-full h-full overflow-hidden">
          <Image
            src={image}
            width={500}
            height={500}
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col h-full">
        <div
          className={`flex flex-col ${
            isReversed ? "md:flex-row-reverse" : "md:flex-row"
          } justify-between items-center thin-bottom-border pb-3 px-4`}
        >
          <div className={isReversed ? "text-right" : "text-left"}>
            <h3 className="text-2xl md:text-4xl">{title}</h3>
            <p className="font-light text-sm md:text-base">{stack}</p>
          </div>
          <div className={isReversed ? "ml-5" : "mr-5"}>{year}</div>
        </div>
        <div className="flex flex-col h-full pt-5">
          <ul className="list-disc list-inside text-sm md:text-base">
            {list.map((item, index) => (
              <li key={`${index}-${item.substring(0, 10)}`}>{item}</li>
            ))}
          </ul>
          <div className="mt-auto pt-5 px-4">
            <Link
              className="w-full flex justify-center py-2 thin-border rounded-2xl transition-colors duration-200 hover:border-custom-blue hover:text-custom-blue text-center"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              VISIT PROJECT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
