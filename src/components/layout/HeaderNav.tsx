import { siteConfig } from "@/config";
import NavItem from "./NavItem";

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