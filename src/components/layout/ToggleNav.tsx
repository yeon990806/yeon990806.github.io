'use client'
import { siteConfig } from "@/config";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const THEME_LIST = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'system' },
];

const ToggleNav = ({ onToggle }: { onToggle: VoidFunction }) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <motion.nav className="fixed inset-0 z-50 top-[64px] bg-light-background dark:bg-dark-background md:hidden">
      <ul className="grid items-center gap-2 px-4 select-none">
        {siteConfig.menus.map((menu, idx) => (
          <li
            key={`menu-${menu.label}-${idx}`}
            className="px-4 py-2 text-lg transition border-b border-solid cursor-pointer border-light-gray600 dark:border-dark-gray600 hover:bg-light-gray300 dark:hover:bg-dark-gray300 delay-50"
            onClick={() => {
              router.push(menu.path);
              onToggle();
            }}
          >
            {menu.label}
          </li>
        ))}
      </ul>
      <h6 className="px-4 py-4 mt-2 text-xl">
        Themes
      </h6>
      <ul className="grid items-center gap-2 px-4 select-none">
        {THEME_LIST.map((theme, idx) => (
          <li
            key={`menu-${theme.label}-${idx}`}
            className="px-4 py-2 text-lg transition border-b border-solid cursor-pointer border-light-gray600 dark:border-dark-gray600 hover:bg-light-gray300 dark:hover:bg-dark-gray300 delay-50"
            onClick={() => {
              setTheme(theme.value);
              onToggle();
            }}
          >
            {theme.label}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
export default ToggleNav;