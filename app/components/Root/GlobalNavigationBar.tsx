import { MenuList } from "~/libs/constants";
import NavItem from "./NavItem";

const GlobalNavigationBar = () => {
  return (
    <ul className="inline-flex items-center gap-6 text-light-gray800 dark:text-dark-gray800">
      { MenuList.map((menu, idx) => (
        <NavItem
          key={`global-navigation-bar-item-${idx}`}
          routePath={menu.path}
        >
          { menu.menuName }
        </NavItem>
      )) }
    </ul>
  );
};
export default GlobalNavigationBar;