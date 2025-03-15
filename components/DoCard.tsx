interface DoCardProps {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
  color?: string;
}

const DoCard = ({ icon, title, paragraph, color }: DoCardProps) => {
  return (
    <div className="bg-custom-black thin-border rounded-lg">
      <div className="flex flex-col px-10 pt-32 pb-9">
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
