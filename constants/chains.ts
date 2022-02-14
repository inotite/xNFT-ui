import { ALCHEMY_KEY } from "@/config/index";

/**
 * List of all the networks supported
 */
export enum SupportedChainId {
  ARBITRUM_MAINNET = 42161,
  ARBITRUM_RINKEBY = 421611,
  KOVAN = 42,
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId,
).filter((id) => typeof id === "number") as SupportedChainId[];

export const RPC = {
  [SupportedChainId.ARBITRUM_MAINNET]: `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.ARBITRUM_RINKEBY]: `https://arb-rinkeby.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.KOVAN]: `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_KEY}`,
};
