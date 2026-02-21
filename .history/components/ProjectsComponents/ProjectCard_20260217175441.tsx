import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  image?: string;
  images?: string[];
  stack: string;
  year: string;
  link: string;
  list: string[];
  isReversed?: boolean;
}

const ProjectCard = ({
  title,
  image,
  images,
  stack,
  year,
  link,
  list,
  isReversed,
}: ProjectCardProps) => {
  // Always show three placeholder images for demo purposes
  const placeholder = image || "/placeholder.png";
  const imageList = [placeholder, placeholder, placeholder];
  return (
    <div
      className={`w-full flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      } p-5 items-start gap-5 text-custom-text thin-border rounded-lg mb-8`}
    >
      <div className="w-full md:w-1/2 h-[250px] md:h-[400px] flex items-center justify-center bg-blue-950">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {imageList.map((img, idx) => (
              <CarouselItem key={idx}>
                <div className="p-1 h-full">
                  <Card>
                    <CardContent className="flex h-[250px] md:h-[400px] items-center justify-center p-0">
                      <div className="relative w-full h-full min-h-[250px] md:min-h-[400px]">
                        <Image
                          src={img}
                          alt={`${title} project screenshot ${idx + 1}`}
                          fill
                          className="object-cover rounded-md w-full h-full"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {imageList.length > 1 && <CarouselPrevious />}
          {imageList.length > 1 && <CarouselNext />}
        </Carousel>
      </div>

      <div className="w-full md:w-1/2 flex flex-col h-full">
        {/* ...existing code... */}
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
