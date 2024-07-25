import { cn } from "@/libs/util";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { ReactNode } from "react";

type NavItemProps = {
  children: ReactNode;
  link: string;
}

const NavItem = ({children, link}: NavItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const activingMenu = () => {
    if (link === '/') return pathname === link;
    return pathname.startsWith(link);
  };


  const onRouteLink = () => router.push(link);

  return (
    <li
      className={cn(
        "p-2 transition delay-100 rounded cursor-pointer text-light-gray700 dark:text-dark-gray700 hover:text-light-blue400 dark:hover:text-dark-blue400",
        activingMenu() && "text-light-blue400 dark:text-dark-blue400"
      )}
      onClick={onRouteLink}
    >
      { children }
    </li>
  );
};
export default NavItem;