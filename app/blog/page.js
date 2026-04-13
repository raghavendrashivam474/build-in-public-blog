import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog() {
  const dir = path.join(process.cwd(), "content/blogs");

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

  // sort latest first
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">

      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="p-6 border border-gray-300 dark:border-gray-800 rounded-2xl hover:scale-[1.02] transition cursor-pointer">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}