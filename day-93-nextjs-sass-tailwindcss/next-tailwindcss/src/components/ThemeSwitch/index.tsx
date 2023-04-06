import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const dark: boolean = theme === "dark";

  const toggleTheme = () => {
    setTheme(dark ? "light" : "dark");
  };

  if (typeof window === "undefined") return null;

  return (
    <>
      <div className="flex-center">
        <button
          onClick={toggleTheme}
          className=" dark:bg-opacity-20 dark:text-gray-50 bg-green-100 text-gray-500 pl-2 pr-2
     rounded-md text-xs p-1"
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
}
