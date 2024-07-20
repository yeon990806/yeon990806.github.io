import { siteConfig } from "@/config";
import NavItem from "./NavItem";

const HeaderNav = () => {
  return (
    <nav>
      <ul className="flex gap-2 items-center select-none">
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