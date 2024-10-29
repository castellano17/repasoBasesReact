import { useState } from "react";

interface Options {
  initialValue?: number;
}

export const useCounter = ({ initialValue = 0 }: Options) => {
  const [count, setCount] = useState<number>(initialValue);

  const inCreaseBy = (value: number) => {
    const newValue = count + value;
    if (newValue < 0) return;

    setCount(count + value);
  };
  return {
    //Properies
    count,

    //Methods
    inCreaseBy,
  };
};
