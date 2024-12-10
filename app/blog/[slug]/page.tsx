import { BlogMDX } from "@/components/primitives/BlogMDX";
import * as fs from "fs";
import matter from "gray-matter";
import path from "path";

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostParams) {
  const props = getPost(params);

  return (
    <article className="flex flex-col p-4 rounded-lg mx-2 md:w-9/12 md:mx-auto mt-2 text-base text-justify">
      <h1 className="text-5xl font-bold">{props.frontMatter.title}</h1>
      <BlogMDX source={props.content} />
    </article>
  );
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile, { });

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}
