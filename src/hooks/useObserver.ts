import { RefObject, useEffect } from "react"

export const useObserver = ({
  target,
  onIntersect,
  root = null,
  rootMargin = '0px',
  threshold = 1.0
}: {
  target: RefObject<any>,
  onIntersect: (e: IntersectionObserverEntry[]) => void,
  root?: any,
  rootMargin?: string,
  threshold?: number
}) => {
  useEffect(() => {
    if (!target.current) {
      return;
    }

    const observer = new IntersectionObserver(onIntersect, { root, rootMargin, threshold });
    observer.observe(target.current);

    return () => observer.disconnect();
  }, [target, onIntersect, root, rootMargin, threshold])
}
export default useObserver;