import { useCallback, useEffect, useState } from "react";

import { useWeb3React } from "@web3-react/core";

import Card from "@/components/Card";
import MintForm from "@/components/Forms/MintForm";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import MainNavbar from "@/components/Navbar/MainNavbar";
import { NFT_CONTRACT_ADDRESS, TOKEN_CONTRACT_ADDRESS } from "@/config/index";
import { ItemDetailStructOutput } from "@/contracts/types/XNft";
import useNftContract from "@/hooks/useNftContract";
import useTokenContract from "@/hooks/useTokenContract";

function Home() {
  const { account } = useWeb3React();
  const nftContract = useNftContract(NFT_CONTRACT_ADDRESS);
  const tokenContract = useTokenContract(TOKEN_CONTRACT_ADDRESS);
  const [nftItems, setNftItems] = useState<ItemDetailStructOutput[]>([]);
  const [baseURI, setBaseURI] = useState("");

  useEffect(() => {
    if (!nftContract || !account) {
      return;
    }

    nftContract.tokenUri().then(setBaseURI);
    nftContract.tokensOfOwner(account).then((items) => {
      setNftItems(items);
    });
  }, [nftContract, account]);

  const handleMint = useCallback(
    async (name: string, message: string) => {
      const currentFee = await nftContract.currentFee();
      await tokenContract.approve(NFT_CONTRACT_ADDRESS, currentFee);
      await nftContract.mintTransfer(account, name, message);
    },
    [account, nftContract, tokenContract],
  );

  return (
    <DefaultLayout>
      <MainNavbar />
      <div className="h-screen pt-32 flex flex-col items-center">
        <div className="flex mb-4">
          {nftItems && nftItems.length
            ? nftItems.map((item) => (
                <Card item={item} key={item._id.toString()} url={baseURI} />
              ))
            : "No NFTs owned"}
        </div>
        <MintForm onSubmit={handleMint} />
      </div>
    </DefaultLayout>
  );
}

export default Home;
