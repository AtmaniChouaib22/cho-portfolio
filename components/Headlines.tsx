import { AiOutlineThunderbolt } from "react-icons/ai";
import CustomButton from "./CustomButton";

const Headlines = () => {
  return (
    <div className="text-custom-text px-10">
      <div className="flex items-center justify-between">
        <div className="text-3xl pr-56 py-8">
          Passionate about crafting seamless web experiences
          <br /> with a focus on usability, performance, and clean architecture.
        </div>
        <div>
          Transforming ideas into scalable digital solutions.
          <br /> Engineering with precision, problem-solving with creativity.
        </div>
      </div>

      <h3 className="text-custom-green text-4xl py-5 ">
        Coding the Future <br />
        Architecting Innovation
      </h3>

      <div className="flex justify-end items-center">
        <div className="thin-border-line"></div>
        <div className="bg-custom-text absolute right-36 w-20 h-20 rounded-full flex items-center justify-center">
          <AiOutlineThunderbolt size={40} className="text-black" />
        </div>
      </div>

      <div className="text-2xl py-5">
        From concept to deployment, I bring ideas to life
        <br /> with a focus on efficiency, accessibility, and innovation.
      </div>

      <div className="flex justify-end items-center">
        <CustomButton href="/projects" text="View Projects" />
      </div>
    </div>
  );
};

export default Headlines;
