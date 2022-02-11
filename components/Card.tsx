import { FC, useEffect, useState } from "react";

import { ItemDetailStructOutput } from "@/contracts/types/XNft";

type Props = {
  item: ItemDetailStructOutput;
  url?: string;
};

const Card: FC<Props> = ({ item, url }) => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    if (!url || !item._id) {
      return;
    }

    fetch(`${url}${item._id}`)
      .then((resp) => resp.json())
      .then((data) => setImageURL(data.image));
  }, [item._id, url]);

  return (
    <div className="flex flex-col border border-gray-200 p-4 rounded-xl shadow-lg m-2 bg-white w-80">
      <img className="mb-2" src={imageURL} alt="image" />
      <span className="mb-2">Token Id: {item._id.toString()}</span>
      <span className="text-lg font-bold">{item._name}</span>
      <span className="text-xs">Message: {item._message}</span>
    </div>
  );
};

export default Card;
