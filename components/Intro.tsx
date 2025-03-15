import Image from "next/image";

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
        <div className="rounded-3xl border-[1px] border-custom-border px-3 py-2 ml-6">
          Hello, I'm Chouaib
        </div>
      </div>
      <div className="flex items-center">
        <div className="md:text-6xl lg:text-8xl font-semibold text-custom-violet">
          DIGITAL
        </div>
        <div className="text-custom-text pl-5">
          //based in <br />
          Constantine,Algeria
        </div>
      </div>
      <div className="md:text-6xl lg:text-8xl font-semibold text-custom-orange">
        EXPERIENCE
      </div>
      <div className="flex items-center">
        <div className="md:text-6xl lg:text-8xl font-semibold text-custom-text">
          DESIGNER
        </div>
        <div className="rounded-3xl border-[1px] border-custom-border px-3 py-2 ml-1 text-custom-text">
          let's connect
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-custom-text mr-2">
          //UI/UX Designer <br />
          Full-stack Developer
        </div>
        <div className="md:text-6xl lg:text-8xl font-semibold text-custom-cy">
          & DEVELOPER
        </div>
      </div>
      <div className="text-custom-text font-medium text-center text-md sm:text-2xl tracking-wide">
        I create a digital experience that borders
        <br />{" "}
        <span className="text-xl">
          on <span className="text-custom-violet">efficiency</span>,{" "}
          <span className="text-custom-orange">aesthetics</span> and
          <span className="text-custom-cy"> functionality</span>
        </span>
      </div>
    </div>
  );
};

export default Intro;
