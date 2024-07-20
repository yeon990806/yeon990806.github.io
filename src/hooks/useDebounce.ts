import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number) => {
  const [debounced, setDebounced] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay])

  return debounced;
};
export default useDebounce;