'use client';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

const TableOfContent = () => {
  const pathname = usePathname();
  const [currentId, setCurrentId] = useState<string>('');
  const headingRefs = useRef<(Element | null)[]>([]);
  const lastScrollY = useRef(0);
  const direction = useRef<'down' | 'up'>('down');
  const headerHeight = 68;

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    headingRefs.current = headingElements;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const scrollY = window.scrollY;
      direction.current = scrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = scrollY;

      const visibleHeadings = entries.filter(entry => entry.isIntersecting);
      if (visibleHeadings.length > 0) {
        const closestHeading = visibleHeadings.reduce((closest, entry) => {
          const entryTop = entry.target.getBoundingClientRect().top;
          const closestTop = closest.target.getBoundingClientRect().top;
          if (Math.abs(entryTop) < Math.abs(closestTop)) {
            return entry;
          }
          return closest;
        });
        setCurrentId(closestHeading.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: `-${headerHeight}px 0px -50% 0px`,
      threshold: [0, 0.5, 1.0],
    });

    headingElements.forEach((heading) => observer.observe(heading));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update currentId to the clicked item
      setCurrentId(id);
    }
  };

  return (
    <div className="relative space-y-2">
      {headingRefs.current.map((h, i) =>
        h && h.nodeName === 'H2' ? (
          <div
            key={i}
            data-depth="1"
            data-active={currentId === h.id ? true : false}
            className={`relative ${currentId === h.id ? 'font-semibold text-light-primary dark:text-dark-primary' : 'text-light-gray400 dark:text-dark-gray400'}`}
          >
            <a href={`#${h.id}`} onClick={(e) => handleClick(e, h.id)} className="transition-all hover:pl-2">{h.textContent}</a>
          </div>
        ) : (
          h && (
            <div
              key={i}
              data-depth="2"
              data-active={currentId === h.id ? true : false}
              className={`relative ${currentId === h.id ? 'font-semibold text-light-primary dark:text-dark-primary' : 'text-light-gray400 dark:text-dark-gray400'} ml-4`}
            >
              <a href={`#${h.id}`} onClick={(e) => handleClick(e, h.id)} className="transition-all hover:pl-2">{h.textContent}</a>
            </div>
          )
        )
      )}
    </div>
  );
};

export default TableOfContent;
