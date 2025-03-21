interface DoCardProps {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
  color?: string;
}

const DoCard = ({ icon, title, paragraph, color }: DoCardProps) => {
  return (
    <div className="bg-custom-black thin-border rounded-lg sm:w-[400px] w-[300px] ">
      <div className="flex flex-col sm:px-10 px-5 pt-14 sm:pt-32 sm:pb-9 pb-4 ">
        <div className={`text-custom-${color}`}>{icon}</div>
        <h4 className={`text-custom-${color} pt-5 text-xl font-bold`}>
          {title}
        </h4>
        <p className="text-custom-text">{paragraph}</p>
      </div>
    </div>
  );
};

export default DoCard;
