'use client'
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import useDelayedRender from "use-delayed-render";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const BlogHeader: React.FC = () => {
  const pathname = usePathname();
  const [openedMenu, setMenuOpen] = useState<boolean>(false);
  const { mounted, rendered } = useDelayedRender(openedMenu, {
    enterDelay: 20,
    exitDelay: 300
  });

  const onToggleMenu = () => {
    if (openedMenu) {
      setMenuOpen(false);
      document.body.classList.remove('overflow-hidden');
    } else {
      setMenuOpen(true);
      document.body.classList.add('overflow-hidden');
    }
  };

  const activingMenu = (navPath: string) => {
    if (navPath === '/') return pathname === navPath;
    return pathname.startsWith(navPath);
  };

  useEffect(() => {
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between py-4 bg-light-background dark:bg-dark-background">
      <div className="flex items-center w-full gap-4 px-6">
        <Link href="/">
          <span className="inline-flex items-center gap-1 cursor-pointer text-primary">
            &lt;
            <span>
              <strong>YeON</strong>.dev
            </span>
            &gt;
          </span>
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default BlogHeader;
