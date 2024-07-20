'use client'

import useDebounce from "@/hooks/useDebounce";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

type InputSearchProps = {
  dataList: any[];
  onChange: () => string;
};

const InputSearch = ({
  dataList
}: InputSearchProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div>
      <FiSearch />
      <input
        type="text"
        value={inputValue}
        onInput={(e: FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
      />
    </div>
  );
};
export default InputSearch;