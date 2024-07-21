'use client'

import useDebounce from "@/hooks/useDebounce";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

type InputSearchProps = {
  keyword: string;
  onInputValue: (v: string) => void;
};

const InputSearch = ({
  keyword,
  onInputValue
}: InputSearchProps) => {
  return (
    <div className="grid items-center gap-2 px-2 grid-cols-auto-1fr bg-light-gray300 dark:bg-dark-gray300">
      <FiSearch size={18} />
      <input
        type="text"
        value={keyword}
        onInput={(e: FormEvent<HTMLInputElement>) => onInputValue(e.currentTarget.value)}
        className="p-2 bg-transparent outline-none"
      />
    </div>
  );
};
export default InputSearch;