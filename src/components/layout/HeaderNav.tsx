import { siteConfig } from "@/config";
import NavItem from "./NavItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const HeaderNav = () => {
  return (
    <nav>
      <ul className="flex items-center gap-2 select-none">
        {siteConfig.menus.map((menu, idx) => (
          <NavItem key={`menu-${menu.label}-${idx}`} link={menu.path}>
            {menu.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};
export default HeaderNav;