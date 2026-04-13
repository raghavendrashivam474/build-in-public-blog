import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

marked.setOptions({
  breaks: true,
  gfm: true,
});
export default function BlogPost({ params }) {
  const filePath = path.join(
    process.cwd(),
    "content/blogs",
    `${params.slug}.md`,
  );

  let source;

  // 🛡️ Prevent crash if file not found
  try {
    source = fs.readFileSync(filePath, "utf-8");
  } catch {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-2xl font-semibold">Post not found</h1>
      </div>
    );
  }

  const { content, data } = matter(source);

  // 🔥 Convert markdown → HTML
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  const htmlContent = marked.parse(content);

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      {/* 🔙 Back */}
      <Link href="/blog" className="text-blue-500 hover:underline text-sm">
  ← Back to Blog
</Link>

      {/* 📦 Card Wrapper */}
      <div
        className="mt-6 p-8 rounded-2xl 
        border border-gray-200 dark:border-gray-800 
        bg-white dark:bg-black 
        shadow-sm"
      >
        {/* 🧾 Title */}
        <h1 className="text-4xl font-bold mb-4 leading-tight">{data.title}</h1>

        {/* 📅 Date */}
        <p className="text-sm text-gray-500 mb-8">{data.date}</p>

        {/* ✍️ Content */}
        <article
          className="prose prose-lg max-w-none 
dark:prose-invert 
prose-headings:font-semibold 
prose-a:text-blue-500 
prose-strong:text-black dark:prose-strong:text-white
prose-li:marker:text-blue-500"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
