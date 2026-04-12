import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export const metadata = {
  title: "Raghav's Blog",
  description: "Building in public",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        {/* NAVBAR */}
        <nav
          className="fixed top-0 left-0 w-full z-50 
          border-b border-gray-200 dark:border-gray-800 
          bg-white/70 dark:bg-black/70 backdrop-blur-lg"
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
            {/* LOGO */}
            <Link href="/" className="font-semibold text-lg tracking-tight">
              Raghav<span className="text-blue-500">.dev</span>
            </Link>

            {/* LINKS */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-blue-500 transition">
                Home
              </Link>

              <Link href="/blog" className="hover:text-blue-500 transition">
                Blog
              </Link>

              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="pt-24 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
