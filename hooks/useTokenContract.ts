import type { XYZ } from "@/contracts/types";
import XYZ_ABI from "@/contracts/XYZ.json";
import useContract from "@/hooks/useContract";

export default function useTokenContract(tokenAddress?: string) {
  return useContract<XYZ>(tokenAddress, XYZ_ABI);
}
