import React, { FC } from "react";

type Props = {
  title?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: FC<Props> = ({ title, onClick, type }) => {
  return (
    <button
      type={type ?? "button"}
      className="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
