'use client'
import HeaderNav from "./HeaderNav";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import ToggleNav from "./ToggleNav";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

const BlogHeader = () => {
  const [openedMenu, setMenuOpen] = useState<boolean>(false);

  const onToggleMenu = () => {
    if (openedMenu) {
      setMenuOpen(false);
      document.body.classList.remove('overflow-hidden');
    } else {
      setMenuOpen(true);
      document.body.classList.add('overflow-hidden');
    }
  };

  useEffect(() => {
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex py-4 bg-light-background dark:bg-dark-background">
        <div className="flex items-center w-full gap-4 px-6 max-md:justify-between">
          <Link href="/">
            <span className="inline-flex items-center gap-1 cursor-pointer">
              &lt;
              <span className="text-light-gray600 dark:text-dark-gray600">
                <strong className="text-primary">YeON</strong>.me
              </span>
              &gt;
            </span>
          </Link>
          <div className="hidden md:block">
            <HeaderNav />
          </div>
          <ThemeSwitch />
          <button
            onClick={onToggleMenu}
            className="inline-block p-2 border border-solid rounded cursor-pointer md:hidden border-light-gray800 dark:border-dark-gray800"
          >
            <FiMenu />
          </button>
        </div>
      </header>
      {openedMenu && <ToggleNav onToggle={onToggleMenu} /> }
    </>
  );
};

export default BlogHeader;
