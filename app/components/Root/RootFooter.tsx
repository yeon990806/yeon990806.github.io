import { IoLogoGithub } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { RiNotionFill } from "react-icons/ri";

const RootFooter = () => {
  return (
    <footer className="py-4 bg-light-gray100 dark:bg-dark-gray100">
      <div className="grid max-w-3xl gap-4 px-6 mx-auto text-light-gray600 dark:text-dark-gray400 lg:max-w-6xl lg:px-8">
        <div className="flex justify-end gap-4">
          <a href="https://github.com/yeon990806" target="_blank" rel="noreferrer">
            <IoLogoGithub size={18} />
          </a>
          <a target="_blank" href="mailto:yeon9990806@gmail.com" rel="noreferrer">
            <IoMail size={18} />
          </a>
          <a href="https://www.notion.so/DoYeon-Kim-23aac3982841474db33b433382ba7a8b?pvs=4" target="_blank" rel="noreferrer">
            <RiNotionFill size={18} />
          </a>
        </div>
        <div className="text-center">
          Copyright © YeON
        </div>
      </div>
    </footer>
  );
};
export default RootFooter;