import { AiOutlineThunderbolt } from "react-icons/ai";
import CustomButton from "./CustomButton";

const Headlines = () => {
  return (
    <div className="flex flex-col justify-center items-center text-custom-text w-screen max-w-13xl ">
      <div className="flex flex-col items-start justify-center w-screen gap-3 px-4 pt-4 sm:pt-5 md:pt-10 sm:px-8 md:px-10 max-w-10xl sm:flex-row">
        <div className="relative left-0 max-w-3xl text-xl font-light text-primarytext sm:text-2xl md:text-3xl lg:text-4xl">
          Passionate about crafting seamless web experiences with a focus on
          usability, performance, and clean architecture.
        </div>
        <div className="flex-grow"></div>
        <div className="max-w-xs text-sm text-custom-text sm:pl-10">
          Transforming ideas into scalable digital solutions. Engineering with
          precision, problem-solving with creativity.
        </div>
      </div>

      <div className="flex flex-col w-screen gap-1 px-4 text-custom-text sm:px-8 md:px-10 sm:text-2xl max-w-10xl">
        <h2 className="pb-1 pr-2 mt-8 text-2xl font-semibold text-custom-green sm:text-3xl md:text-4xl sm:pt-3 mb-8">
          Coding the Future <br />
          Architecting Innovation
        </h2>
        <div className="flex justify-end items-center">
          <div className="thin-border-line"></div>
          <div className="bg-custom-text absolute right-36 md:w-20 md:h-20 rounded-full flex items-center justify-center">
            <AiOutlineThunderbolt size={40} className="text-black" />
          </div>
        </div>
      </div>

      <div className="w-full sm:px-8 px-4 md:px-10 mt-10 sm:mt-5">
        <p className="md:max-w-2xl w-full text-custom-text md:text-2xl font-light">
          From concept to deployment, I bring ideas to life with a focus on
          efficiency, accessibility, and innovation.
        </p>
      </div>

      <div className="flex justify-end items-center mt-10">
        <CustomButton href="/projects" text="View Projects" />
      </div>
    </div>
  );
};

export default Headlines;
