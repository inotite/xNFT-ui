import { FC } from "react";

const DefaultLayout: FC = ({ children }) => {
  return <div className="min-w-screen h-screen bg-gray-200">{children}</div>;
};

export default DefaultLayout;
