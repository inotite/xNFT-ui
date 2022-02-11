import React, { useCallback } from "react";

import { AbstractConnector } from "@web3-react/abstract-connector";
import { useWeb3React } from "@web3-react/core";

import CustomModal from "@/components/modals/Modal";
import { SUPPORTED_WALLETS } from "@/constants/wallet";

type Props = {
  open: boolean;
  onClose: () => void;
};

const { METAMASK, WALLETCONNECT } = SUPPORTED_WALLETS;

const WalletModal = ({ open, onClose }: Props) => {
  // important that these are destructed from the account-specific web3-react context
  const { connector: activeConnector, activate } = useWeb3React();

  const tryActivation = async (connector: AbstractConnector | undefined) => {
    if (connector) {
      await activate(connector);
    }
  };

  const handleConnect = useCallback(
    (option) => () => {
      if (option.connector !== activeConnector) {
        tryActivation(option.connector);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeConnector],
  );

  return (
    <CustomModal isOpen={open} onRequestClose={onClose}>
      <div className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="flex justify-end p-2">
          <button
            type="button"
            className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-gray-600"
            onClick={onClose}
          >
            <img
              src="images/svg/close.svg"
              alt="close"
              className="w-5 h-5 fill-current"
            />
          </button>
        </div>

        <div className="bg-white px-4 py-5 pb-4 sm:px-16 sm:pb-4">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
            <h3
              className="text-3xl leading-normal font-bold text-bold"
              id="modal-title"
            >
              <p>Connect Your Wallet</p>
            </h3>
            <div
              className="flex-col items-center justify-center py-8 my-8 hover:shadow-lg rounded-lg cursor-pointer border border-transparent hover:border-gray-100"
              onClick={handleConnect(METAMASK)}
            >
              <img
                src={METAMASK.iconURL}
                alt="close"
                className="mx-auto mb-3 cursor-pointer w-20"
              />
              <p className="text-md">Metamask</p>
            </div>
            <div
              className="flex-col items-center justify-center py-8 my-8 hover:shadow-lg rounded-lg cursor-pointer border border-transparent hover:border-gray-100"
              onClick={handleConnect(WALLETCONNECT)}
            >
              <img
                src={WALLETCONNECT.iconURL}
                alt="close"
                className="mx-auto mb-3 cursor-pointer w-20"
              />
              <p className="text-md">Wallet Connect</p>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default WalletModal;
