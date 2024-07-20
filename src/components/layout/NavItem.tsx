import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type NavItemProps = {
  children: ReactNode;
  link: string;
}

const NavItem = ({children, link}: NavItemProps) => {
  const router = useRouter();

  const onRouteLink = () => router.push(link);

  return (
    <li
      className="p-2 rounded cursor-pointer text-light-gray700 dark:text-dark-gray700 hover:text-light-blue400 dark:hover:text-dark-blue400 transition delay-100"
      onClick={onRouteLink}
    >
      { children }
    </li>
  );
};
export default NavItem;