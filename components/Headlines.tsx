import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineThunderbolt } from "react-icons/ai";
import CustomButton from "./CustomButton";
import FooterIntro from "./FooterIntro";

const Headlines = () => {
  return (
    <div className="text-custom-text px-10">
      <div className="flex items-center justify-between">
        <div className="text-3xl pr-56 py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus
          consectetur exercitationem,
          <br /> nesciunt at dolores! Velit eveniet atque deleniti dignissimos!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Nihil consequatur provident ab similique.
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
        Lorem ipsum dolor sit amet consectetur
        <br /> adipisicing elit. Vborder elit quibusdam voluptatibus nihil amet
        quo enim.
      </div>

      <div className="flex justify-end items-center">
        <CustomButton text="Learn More" />
      </div>
    </div>
  );
};

export default Headlines;
