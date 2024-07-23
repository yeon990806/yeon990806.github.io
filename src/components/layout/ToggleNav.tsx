import { siteConfig } from "@/config";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ToggleNav = ({ onToggle }: { onToggle: VoidFunction }) => {
  const router = useRouter();

  return (
    <motion.nav className="fixed inset-0 z-50 top-[64px] bg-light-background dark:bg-dark-background">
      <ul className="grid items-center gap-2 px-4 select-none">
        {siteConfig.menus.map((menu, idx) => (
          <li
            key={`menu-${menu.label}-${idx}`}
            className="px-4 py-2 text-xl transition border-b border-solid border-light-gray600 dark:border-dark-gray600 hover:bg-light-gray300 dark:hover:bg-dark-gray300 delay-50"
            onClick={() => {
              router.push(menu.path);
              onToggle();
            }}
          >
            {menu.label}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
export default ToggleNav;