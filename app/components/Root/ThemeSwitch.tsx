import { IoSunny, IoMoon } from "react-icons/io5";
import useThemeStore from "~/store/useThemeStore";

const ThemeSwitch = () => {
  const {
    currentTheme,
    toggleTheme
  } = useThemeStore()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 transition duration-200 ease-in-out rounded hover:bg-light-gray300 dark:hover:bg-dark-gray100 delay-50"
    >
      { currentTheme == "LIGHT"
        ? <IoSunny size={16} color={'#212529'} />
        : <IoMoon size={16} color={'#ffbe5b'} />
      }
    </button>
  )
}
export default ThemeSwitch