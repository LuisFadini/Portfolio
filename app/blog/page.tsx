import { BorderedContainer } from "@/components/primitives/BorderedContainer";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "Teste do blog",
      description:
        "Um post curto com alguns detalhes do funcionamento do blog e do site em geral.",
      tags: ["tecnologia"],
      slug: "teste",
    },
  ];

  return (
    <main className="flex flex-col items-center gap-4 mx-4 md:w-8/12 md:mx-auto">
      <h1 className="text-4xl font-bold mt-6">Blog</h1>
      <p className="text-lg text-center">
        Leia meus posts sobre tecnologia, impressão 3D, self hosting e mais.
      </p>
      <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4">
        {posts.map((post) => (
          <BorderedContainer asChild key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-3 p-4 rounded-lg"
            >
              <h3 className="text-2xl font-semibold">{post.title}</h3>
              <p className="text-sm text-text-200">{post.description}</p>
              <ul className="flex flex-wrap gap-2 mt-auto">
                {post.tags.map((tag) => (
                  <li
                    key={`${post.slug}-${tag}`}
                    className="bg-accent-700 px-2 py-1 text-white text-xs rounded-full"
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
            </Link>
          </BorderedContainer>
        ))}
      </div>
    </main>
  );
}
