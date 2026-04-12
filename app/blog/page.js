import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog() {
  const dir = path.join(process.cwd(), "content/blogs");

  // 🛡️ Safe fallback if folder missing
  if (!fs.existsSync(dir)) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-semibold">No blog posts yet</h1>
      </div>
    );
  }

  const files = fs.readdirSync(dir);

  const posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(content);

    return { slug, ...data };
  });

  // 🔥 Sort latest first (optional but important)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      {/* 🧾 Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Thoughts, learnings, and building in public 🚀
        </p>
      </div>

      {/* 📰 Blog Grid */}
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div
              className="group p-6 
              border border-gray-300 dark:border-gray-800 
              rounded-2xl 
              bg-white dark:bg-black 
              hover:border-blue-500 
              hover:shadow-lg dark:hover:shadow-blue-500/10
              transition-all duration-300 
              hover:scale-[1.02] cursor-pointer"
            >
              {/* 📅 Date */}
              <p className="text-xs text-gray-500 mb-2">{post.date}</p>

              {/* 🧾 Title */}
              <h2 className="text-2xl font-semibold group-hover:text-blue-500 transition">
                {post.title}
              </h2>

              {/* 📝 Description */}
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {post.description}
              </p>

              {/* ➡️ CTA */}
              <div className="mt-4 text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition">
                Read more →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
