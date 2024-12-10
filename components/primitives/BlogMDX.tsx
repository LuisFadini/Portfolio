// components/mdx-remote.js
import { MDXComponents } from "mdx/types";
import { MDXRemoteProps, MDXRemote } from "next-mdx-remote/rsc";
import { HorizontalSeparator } from "./HorizontalSeparator";
import rehypeSlug from "rehype-slug";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { BorderedContainer } from "./BorderedContainer";

const components: MDXComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <Link href={`#${props.id}`}>
      <h1 {...props} className="font-bold text-5xl">
        {props.children}
      </h1>
    </Link>
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <Link href={`#${props.id}`}>
      <h2 {...props} className="font-bold text-4xl">
        {props.children}
      </h2>
    </Link>
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <Link href={`#${props.id}`}>
      <h3 {...props} className="font-bold text-3xl">
        {props.children}
      </h3>
    </Link>
  ),
  h4: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <Link href={`#${props.id}`}>
      <h4 {...props} className="font-bold text-2xl">
        {props.children}
      </h4>
    </Link>
  ),
  h5: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <Link href={`#${props.id}`}>
      <h5 {...props} className="font-bold text-xl">
        {props.children}
      </h5>
    </Link>
  ),
  h6: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <Link href={`#${props.id}`}>
      <h6 {...props} className="font-bold text-lg">
        {props.children}
      </h6>
    </Link>
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul {...props} className="list-disc list-inside">
      {props.children}
    </ul>
  ),
  ol: (
    props: React.DetailedHTMLProps<
      React.OlHTMLAttributes<HTMLOListElement>,
      HTMLOListElement
    >
  ) => (
    <ol {...props} className="list-decimal list-inside">
      {props.children}
    </ol>
  ),
  hr: () => <HorizontalSeparator className="my-2 h-1 rounded-full" />,
  code: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >
  ) => (
    <code
      {...props}
      className={twMerge(props.className, "rounded-lg p-0.5 overflow-hidden")}
    >
      {props.children}
    </code>
  ),
  pre: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLPreElement>,
      HTMLPreElement
    >
  ) => (
    <BorderedContainer asChild className="p-1">
      <pre
        {...props}
        className={twMerge(props.className, "rounded-lg p-0.5 overflow-x-scroll scrollbar-none")}
      >
        {props.children}
      </pre>
    </BorderedContainer>
  ),
};

export function BlogMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [rehypePrettyCode, { theme: "dracula", grid: false }],
          ],
        },
      }}
    />
  );
}
