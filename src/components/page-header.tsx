import Link from "next/link";
import React from "react";
import DarkMode from "./Dark-Mode";

type TailwindClassesProps = {
  className?: string | string[]; // Allow either a single string or an array of strings
};

const PageHeader: React.FC<TailwindClassesProps> = ({ className }) => {
  return (
    <header className={`flex items-center justify-between ${className}`}>
      <Link
        href={"/dashboard"}
        className="text-xl hover:underline underline-offset-8 decoration-1"
      >
        Finance App
      </Link>
      <div className="flex items-center space-x-4">
        <div>
          <DarkMode />
        </div>
        <div>usr DropDown</div>
      </div>
    </header>
  );
};
export default PageHeader;
