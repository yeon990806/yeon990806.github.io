import { useEffect, useState } from "react";

const useHomeNavigation = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeListener);

    () => {
      window.removeEventListener("resize", resizeListener);
    }
  });

  return {
    innerWidth,
  }
};
export default useHomeNavigation;