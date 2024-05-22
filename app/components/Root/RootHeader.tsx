import GlobalNavigationBar from "./GlobalNavigationBar";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

const RootHeader = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <nav className="flex items-center gap-4">
        <Logo />
        <GlobalNavigationBar />
      </nav>
      <div>
        <ThemeSwitch />
      </div>
    </header>
  );
};
export default RootHeader;