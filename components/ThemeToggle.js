"use client";

export default function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 border border-gray-300 dark:border-gray-700 
  rounded-lg text-sm hover:scale-105 transition"
    >
      🌗
    </button>
  );
}
