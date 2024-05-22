import { create } from 'zustand';

export type THEME_TYPE = "DARK" | "LIGHT"

export interface ThemeStateType {
  currentTheme: THEME_TYPE
  toggleTheme: VoidFunction
}

const getPreferredTheme = (): THEME_TYPE => {
  if (typeof window !== 'undefined')
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'DARK' : 'LIGHT'
  return 'LIGHT'
}

export const initializeTheme = () => {
  const themeStore = useThemeStore.getState()
  const storedTheme = typeof window !== 'undefined' ? window.localStorage.getItem('theme') as THEME_TYPE : null
  if (storedTheme) {
    themeStore.currentTheme !== storedTheme && themeStore.toggleTheme()
  } else {
    const preferredTheme = getPreferredTheme()
    themeStore.currentTheme !== preferredTheme && themeStore.toggleTheme()
  }
};

const useThemeStore = create<ThemeStateType>((set, get) => ({
  currentTheme: typeof window !== 'undefined' ? (window.localStorage.getItem('theme') as THEME_TYPE || getPreferredTheme()) : 'LIGHT',
  toggleTheme: () => {
    const currentTheme = get().currentTheme
    const newTheme = currentTheme === 'DARK' ? 'LIGHT' : 'DARK'
    set({ currentTheme: newTheme })
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', newTheme)
      const htmlClassList = document.documentElement.classList
      if (newTheme === 'DARK') htmlClassList.add('dark')
      else htmlClassList.remove('dark')
    }
  },
}));
export default useThemeStore;