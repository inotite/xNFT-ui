import { FC } from "react";

import Account from "@/components/Account";
import useEagerConnect from "@/hooks/useEagerConnect";

const MainNavbar: FC = () => {
  const triedToEagerConnect = useEagerConnect();

  return (
    <div className="w-full flex justify-between fixed p-4 z-10 bg-black/10 drop-shadow-lg">
      <p className="text-3xl font-bold">Logo</p>
      <div className="flex items-center justify-center">
        <Account triedToEagerConnect={triedToEagerConnect}></Account>
      </div>
    </div>
  );
};

export default MainNavbar;
