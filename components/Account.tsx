import { useEffect, useState } from "react";

import { useWeb3React } from "@web3-react/core";

import WalletModal from "@/components/modals/WalletModal";
import useMetaMaskOnboarding from "@/hooks/useMetaMaskOnboarding";
import { formatArbiscanLink, shortenHex } from "@/utils/web3";

import Button from "./Button";

type AccountProps = {
  triedToEagerConnect: boolean;
};

const Account = ({ triedToEagerConnect }: AccountProps) => {
  const { active, error, chainId, account } = useWeb3React();

  const { isWeb3Available, startOnboarding, stopOnboarding } =
    useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);

  const [openWalletModal, setOpenWalletModal] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof account !== "string") {
    return (
      <div>
        {isWeb3Available ? (
          <>
            <Button
              title={connecting ? "Connecting..." : "Connect to Wallet"}
              onClick={() => {
                setConnecting(true);
                setOpenWalletModal(true);
              }}
            />
            <WalletModal
              open={openWalletModal}
              onClose={() => {
                setConnecting(false);
                setOpenWalletModal(false);
              }}
            />
          </>
        ) : (
          <Button title="Install Metamask" onClick={startOnboarding} />
        )}
      </div>
    );
  }

  return (
    <a
      {...{
        href: formatArbiscanLink("Account", [chainId, account]),
        target: "_blank",
        rel: "noopener noreferrer",
      }}
      className="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {shortenHex(account, 4)}
    </a>
  );
};

export default Account;
