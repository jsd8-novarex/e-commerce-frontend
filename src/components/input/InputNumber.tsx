import { ComponentPropsWithoutRef } from "react";

type InputNumberPropsType = Omit<ComponentPropsWithoutRef<"input">, "type">;

function InputNumber({ ...props }: InputNumberPropsType) {
  return (
    <input
      type='number'
      {...props}
      className='hide-number-spin w-12 rounded-none border-2 p-2 text-center'
    />
  );
}

export default InputNumber;
