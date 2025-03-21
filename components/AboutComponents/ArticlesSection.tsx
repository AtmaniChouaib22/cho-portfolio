import MiniArticle from "./MiniArticle";

const articles = [
  {
    id: 1,
    image: "/hike.jpg",
    title: "404: Desk Not Found",
    content:
      "When the screen starts looking like The Matrix, it's time to step outside. Hiking helps me reboot, clear my RAM, and remember that the real world has some decent graphics too.",
  },
  {
    id: 2,
    image: "/workout.jpg",
    title: "Executing: Strength Training...",
    content:
      "Just like code, the body needs regular updates and optimization. Whether it's lifting weights or debugging my posture, I’m always working on improving efficiency.",
  },
  {
    id: 3,
    image: "/coffee.jpg",
    title: "Compiling Energy... ☕",
    content:
      "My day starts with a fresh cup of coffee—because without proper initialization, no process runs smoothly. Caffeine is my favorite dependency.",
  },
  {
    id: 4,
    image: "/hackathon.jpeg",
    title: "Hackathons: Come for the Code, Stay for the Free Food",
    content:
      "Sure, I love coding under pressure, but let’s be honest—the real highlight of any hackathon is the unlimited snacks, late-night pizza, and enough caffeine to keep an API running indefinitely.",
  },
];

const ArticlesSection = () => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-custom-text mb-4">
        Away from Coding
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {articles.map((article) => (
          <MiniArticle
            key={article.id}
            image={article.image}
            title={article.title}
            content={article.content}
          />
        ))}
      </div>
    </div>
  );
};
export default ArticlesSection;
