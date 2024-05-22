import { Link, useLocation } from "@remix-run/react";
import { ReactNode } from "react";
import { cn } from "~/libs/functions/util";

interface NaviItemProps {
  children: ReactNode;
  routePath: string;
}

const NavItem = ({
  children,
  routePath
}: NaviItemProps) => {
  const location = useLocation();
  const isCurrentMenu = (currentPath: string) => {
    if (currentPath === '/') return location.pathname === currentPath;
  
    return location.pathname!.startsWith(currentPath);
  };

  return (
    <li>
      <Link
        to={ routePath }
        className={cn(`lineheight-1 rounded p-2 hover:bg-light-gray200 dark:hover:bg-dark-gray200 transition ease-in-out delay-100 duration-300 ${isCurrentMenu(routePath) ? 'text-blue300' : ''}`)}
      >
        { children }
      </Link>
    </li>
  );
};
export default NavItem;