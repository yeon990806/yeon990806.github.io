'use client'
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { PiSun, PiMoon, PiMonitor, PiDotBold } from "react-icons/pi";

const THEME_LIST = [
  { icon: <PiSun size={16} />, label: 'Light', value: 'light' },
  { icon: <PiMoon size={16} />, label: 'Dark', value: 'dark' },
  { icon: <PiMonitor size={16} />, label: 'System', value: 'system' },
];

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const {theme, setTheme} = useTheme();

  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'LIGHT' ? 'DARK' : 'LIGHT'));

  useEffect(() => { setMounted(true) }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'LIGHT' ? <PiSun size={16} /> : <PiMoon size={16} />;

  return (
    <div className="relative inline-block">
      <button className="p-2.5 cursor-pointer" onClick={() => setMenuOpen(prev => !prev)}>
        {currentTheme}
      </button>
      <motion.div
        className="box-content absolute left-0 right-0 w-32 mt-1 overflow-hidden border rounded-md shadow-lg border-light-gray200 dark:border-dark-gray200 bg-light-bgay100 dark:bg-dark-gray100"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0, height: menuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="w-full p-1 m-0 list-none">
          { THEME_LIST.map((list, idx) => (
            <li
              className="flex items-center p-1 rounded cursor-pointer gap-x-2 hover:bg-light-blue100 dark:hover:bg-dark-blue100 text-light-gray500 dark:text-dark-gray500"
              key={ `theme-switch-${list.value}-${idx}` }
              onClick={() => setTheme(list.value)}
            >
              <div className="flex items-center flex-1 gap-2">
                { list.icon }
                <span className="flex-1">{ list.label }</span>
              </div>
              { list.value === theme && <PiDotBold /> }
            </li>
          )) }
        </ul>
      </motion.div>
    </div>
  );
};
export default ThemeSwitch;