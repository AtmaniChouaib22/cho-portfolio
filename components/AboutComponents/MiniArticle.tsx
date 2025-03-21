import Image from "next/image";

interface MiniArticleProps {
  image: string;
  title: string;
  content: string;
}

const MiniArticle = ({ image, title, content }: MiniArticleProps) => {
  return (
    <div className="flex flex-col bg-custom-darker-blue/20 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:bg-custom-darker-blue/40 hover:shadow-lg h-full">
      <div className="relative w-full pt-[56.25%]">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={title}
          className="object-cover absolute top-0 left-0"
          priority={true}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-custom-text mb-2">{title}</h3>
        <p className="text-gray-300 text-sm flex-grow">{content}</p>
      </div>
    </div>
  );
};
export default MiniArticle;
