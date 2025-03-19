import Image from "next/image";
import Cursor from "@/components/Cursor";
import CustomConnectButton from "./CustomConnectButton";

const Intro = () => {
  return (
    <div className="flex flex-col items-center text-custom-text my-auto">
      <div className="flex items-center">
        <div className="bg-custom-text rounded-full">
          <Image
            src={"/memoji.png"}
            alt="Memoji of Chouaib"
            width={100}
            height={100}
          />
        </div>
        <div
          id="f-parent"
          className="rounded-3xl border-[1px] border-custom-border px-3 py-2 ml-6"
        >
          <Cursor
            parentSelector="#f-parent"
            tooltipText="ChoZex"
            cursorColor="#EC003F"
            bgColor="rgba(236, 0, 63, 0.9)"
          />
          Hey, I'm Chouaib
        </div>
      </div>
      <div className="flex items-center" id="ok">
        <div className="md:text-6xl lg:text-8xl font-semibold text-custom-violet">
          FULL STACK
        </div>
        <div className="text-custom-text pl-5">
          //Developer <br />
          Based in Constantine, Algeria
        </div>
      </div>
      <div className="md:text-6xl lg:text-8xl font-semibold text-custom-orange">
        WEB DEVELOPER
      </div>
      <div className="flex items-center" id="letconnect">
        <div className="md:text-6xl lg:text-8xl font-semibold text-custom-text">
          & SOFTWARE
        </div>
        <div id="s-parent">
          <CustomConnectButton text={"let's connect"} />
          <Cursor
            parentSelector="#s-parent"
            tooltipText="Chat with me"
            cursorColor="#00BCFF"
            bgColor="rgba(0, 188, 255, 0.9)"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div id="t-parent" className="text-custom-text mr-2">
          <Cursor
            parentSelector="#t-parent"
            tooltipText="Skills"
            cursorColor="#8012e0cc"
            bgColor="rgba(128, 18, 224, 0.80)"
          />
          // Strong problem-solving & communication <br />
          building user-centric solutions
        </div>
        <div className="md:text-6xl lg:text-8xl font-semibold text-custom-cy">
          ENGINEER
        </div>
      </div>
      <div className="text-custom-text font-medium text-center text-md sm:text-2xl tracking-wide">
        Crafting digital solutions that seamlessly blend
        <br />{" "}
        <span className="text-xl">
          <span className="text-custom-violet">innovation</span>,{" "}
          <span className="text-custom-orange">performance</span>, and
          <span className="text-custom-cy"> clean code</span>.
        </span>
      </div>
    </div>
  );
};

export default Intro;
