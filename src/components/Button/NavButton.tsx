import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  text: string;
  className?: string;
}

const NavButton = ({ icon: Icon, text, className = "" }: Props) => {
  return (
    <button className={`group hover:text-gray-50 duration-75 ${className}`}>
      <Icon />
      <span
        className="
          text-sm text-gray-50 
          opacity-0 
          transition-opacity 
          duration-300 ease-out 
          group-hover:opacity-100
          hidden lg:block
        "
      >
        {text}
      </span>
    </button>
  );
};

export default NavButton;
