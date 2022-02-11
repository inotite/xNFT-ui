import type {
  ExternalProvider,
  JsonRpcFetchFunc,
} from "@ethersproject/providers";
import { Web3Provider } from "@ethersproject/providers";

export const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  return new Web3Provider(provider);
};

export const shortenHex = (hex: string, length = 4) => {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length,
  )}`;
};

const ETHERSCAN_PREFIXES = {
  42161: "",
  421611: "testnet.",
};

export const formatArbiscanLink = (
  type: "Account" | "Transaction",
  data: [number, string],
) => {
  switch (type) {
    case "Account": {
      const [chainId, address] = data;
      return `https://${ETHERSCAN_PREFIXES[chainId]}arbiscan.io/address/${address}`;
    }
    case "Transaction": {
      const [chainId, hash] = data;
      return `https://${ETHERSCAN_PREFIXES[chainId]}arbiscan.io/tx/${hash}`;
    }
  }
};
