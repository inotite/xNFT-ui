import { ALCHEMY_KEY } from "@/config/index";

/**
 * List of all the networks supported
 */
export enum SupportedChainId {
  MAINNET = 42161,
  RINKEBY = 421611,
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId,
).filter((id) => typeof id === "number") as SupportedChainId[];

export const RPC = {
  [SupportedChainId.MAINNET]: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.RINKEBY]: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_KEY}`,
};
