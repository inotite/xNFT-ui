import type { XNft } from "@/contracts/types";
import XNFT_ABI from "@/contracts/XNft.json";
import useContract from "@/hooks/useContract";

export default function useNftContract(tokenAddress?: string) {
  return useContract<XNft>(tokenAddress, XNFT_ABI);
}
