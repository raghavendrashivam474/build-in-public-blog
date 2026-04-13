import Link from "next/link";

export default function Home() {
  return (
    <div className="relative px-6">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 
        bg-gradient-to-b 
        from-white via-gray-100 to-white 
        dark:from-black dark:via-gray-900 dark:to-black">
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto pt-32 pb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Building <span className="text-blue-500">AI Products</span>
          <br /> in Public 🚀
        </h1>

        <p className="mt-6 text-lg md:text-xl 
          text-gray-600 dark:text-gray-400 
          max-w-2xl mx-auto">
          I&apos;m Raghav — an engineering student focused on building real-world AI tools,
          sharing my journey, and turning ideas into products.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          
          <Link
            href="/blog"
            className="px-6 py-3 
            bg-black text-white 
            dark:bg-white dark:text-black 
            rounded-xl font-medium 
            hover:scale-105 transition"
          >
            Read Blog
          </Link>

          <a
            href="#projects"
            className="px-6 py-3 
            border border-gray-300 dark:border-gray-700 
            rounded-xl 
            hover:border-black dark:hover:border-white 
            hover:scale-105 transition"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto pb-24">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* MedSave */}
          <div className="p-6 border 
            border-gray-300 dark:border-gray-800 
            rounded-2xl 
            hover:border-blue-500 
            hover:shadow-lg dark:hover:shadow-blue-500/10
            transition-all duration-300 hover:scale-[1.03]">
            <h3 className="text-2xl font-semibold">MedSave</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3">
              A medicine price comparison platform to help users find affordable
              alternatives across India.
            </p>
          </div>

          {/* Rizz */}
          <div className="p-6 border 
            border-gray-300 dark:border-gray-800 
            rounded-2xl 
            hover:border-blue-500 
            hover:shadow-lg dark:hover:shadow-blue-500/10
            transition-all duration-300 hover:scale-[1.03]">
            <h3 className="text-2xl font-semibold">Rizz Assistant</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3">
              AI-powered social skills trainer that analyzes conversations and
              improves communication.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t 
        border-gray-300 dark:border-gray-800 
        py-6 text-center 
        text-gray-600 dark:text-gray-500 text-sm">
        © {new Date().getFullYear()} Raghav — Built in public 🚀
      </footer>

    </div>
  );
}