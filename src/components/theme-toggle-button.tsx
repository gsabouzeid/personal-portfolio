"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { MoonFill, Sun } from "react-bootstrap-icons";

const subscribeToHydration = () => () => {};
const getHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

const ThemeToggleButton = () => {
  const t = useTranslations("theme");
  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    getHydrationSnapshot,
    getServerHydrationSnapshot,
  );
  const { setTheme, resolvedTheme } = useTheme();

  function handleThemeToggle() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  if (!isHydrated || !resolvedTheme) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700"></div>
    );
  }

  const currentIcon =
    resolvedTheme === "dark" ? (
      <Sun
        size={24}
        className="text-yellow-500 hover:text-yellow-300 active:text-yellow-200"
      />
    ) : (
      <MoonFill
        size={24}
        strokeWidth={2}
        className="text-gray-600 hover:text-gray-800 active:text-gray-900"
      />
    );

  return (
    <button
      onClick={handleThemeToggle}
      className="flex items-center justify-center rounded-full bg-[--bg-light] p-2 transition-colors hover:bg-[--bg-light] dark:hover:bg-[--bg-light]"
      aria-label={
        resolvedTheme === "dark" ? t("switchToLight") : t("switchToDark")
      }
      title={resolvedTheme === "dark" ? t("switchToLight") : t("switchToDark")}
    >
      {currentIcon}
    </button>
  );
};

export default ThemeToggleButton;
