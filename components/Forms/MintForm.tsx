import { FC, useCallback } from "react";

import { useForm } from "react-hook-form";

import Button from "@/components/Button";

type Props = {
  onSubmit: (name: string, message: string) => void;
};

const MintForm: FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const onSubmitCallback = useCallback(
    ({ name, message }) => {
      if (onSubmit) {
        onSubmit(name, message);
      }
    },
    [onSubmit],
  );
  return (
    <form onSubmit={handleSubmit(onSubmitCallback)}>
      <div className="overflow-hidden flex flex-col items-center border p-4 border-gray-200 bg-white rounded-lg w-96">
        <div className="text-lg mb-4 font-bold">~~ Mint ~~</div>
        <input
          className="mb-4 p-2 rounded-md border border-gray-300 outline-none w-full"
          placeholder="Name..."
          {...register("name")}
        />
        <textarea
          className="mb-4 p-2 rounded-md border border-gray-300 outline-none w-full"
          placeholder="Message..."
          {...register("message")}
        />
        <Button title="Mint now" type="submit" />
      </div>
    </form>
  );
};

export default MintForm;
