import Headlines from "@/components/Headlines";
import Intro from "@/components/Intro";
import DoCardsContainer from "@/components/DoCardsContainer";
import MyProjects from "@/components/MyProjects";
import TechStack from "@/components/TechStack";
import FooterIntro from "@/components/FooterIntro";

export default function Home() {
  return (
    <div className="bg-custom-primary-bg flex flex-col items-center">
      <div className="flex flex-col justify-between min-w-full" style={{ height: '92vh' }}>
        <Intro />
        <FooterIntro />
      </div>
      <Headlines />
      <DoCardsContainer />
      <MyProjects />
      <TechStack />
    </div>
  );
}
