import Image from "next/image";
import Cursor from "@/components/Cursor";
import CustomConnectButton from "./CustomConnectButton";

const Intro = () => {
  return (
    <div className="flex flex-col items-center text-custom-text my-auto px-4 sm:px-6 md:px-8">
      <div className="flex items-center flex-wrap gap-4 sm:gap-6">
        <div className="bg-custom-text rounded-full p-1 sm:p-2">
          <Image
            src={"/memoji.png"}
            alt="Memoji of Chouaib"
            width={100}
            height={100}
            quality={100}
            className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] rounded-full"
          />
        </div>
        <div
          id="f-parent"
          className="rounded-3xl border-[1px] border-custom-border px-2 py-1 sm:px-3 sm:py-2"
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
      <div className="flex flex-wrap items-center justify-center text-center sm:text-left mt-4">
        <div className="text-2xl sm:text-4xl md:text-6xl font-semibold text-custom-violet">
          FULL STACK
        </div>
        <div className="text-custom-text pl-2 text-[9px] sm:text-[12px] md:text-xl sm:pl-4">
          //Developer <br /> Based in Constantine, Algeria
        </div>
      </div>
      <div className="text-2xl sm:text-4xl md:text-6xl font-semibold text-custom-orange text-center mt-2">
        WEB DEVELOPER
      </div>
      <div className="flex flex-wrap items-center justify-center text-center mt-2">
        <div className="text-2xl sm:text-4xl md:text-6xl font-semibold text-custom-text mr-1">
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
      <div className="flex flex-wrap items-center justify-center text-center mt-2">
        <div
          id="t-parent"
          className="text-custom-text text-[9px] sm:text-sm md:text-xl "
        >
          <Cursor
            parentSelector="#t-parent"
            tooltipText="Skills"
            cursorColor="#8012e0cc"
            bgColor="rgba(128, 18, 224, 0.80)"
          />
          // Strong problem-solving &<br /> communication skills
        </div>
        <div className="text-2xl sm:text-4xl md:text-6xl font-semibold text-custom-cy">
          ENGINEER
        </div>
      </div>
      <div className="max-w-full text-custom-text font-medium text-center text-sm sm:text-lg md:text-2xl tracking-wide mt-4">
        Crafting digital solutions that seamlessly blend
        <br />
        <span className="text-md sm:text-lg md:text-xl">
          <span className="text-custom-violet">innovation</span>,
          <span className="text-custom-orange"> performance</span>, and
          <span className="text-custom-cy"> clean code</span>.
        </span>
      </div>
    </div>
  );
};

export default Intro;
