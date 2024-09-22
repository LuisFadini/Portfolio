// Inspired by midday https://github.com/midday-ai/midday/blob/main/apps/website/src/components/header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { VerticalSeparator } from "./primitives/VerticalSeparator";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    {
      path: pathname === "/" ? "#" : "/",
      title: "Home",
    },
    {
      path: "/blog",
      title: "Blog",
    },
    {
      path: pathname === "/" ? "#projetos" : "/#projetos",
      title: "Projetos",
    },
  ];

  return (
    <header
      className={twMerge(
        "sticky mt-4 px-2 top-4 z-50 md:px-4 md:flex justify-center",
        pathname === "/" &&
          "transition duration-1s ease-in-out animate-header-slide-down-fade"
      )}
    >
      <nav className="border border-background-700 px-4 flex items-center justify-center backdrop-filter backdrop-blur-lg bg-background-900 bg-opacity-25 h-12 z-20 rounded-lg">
        <Link
          href={"/"}
          className="h-8 items-center justify-center text-sm font-semibold px-3 py-2 inline-flex text-text-100 transition-opacity hover:opacity-70 duration-200"
        >
          Luís Otávio
        </Link>
        <VerticalSeparator className="ml-2" />
        <ul className="space-x-2 font-medium text-sm flex md:flex mx-3">
          {links.map(({ path, title }) => {
            const LinkComponent = path.startsWith("#") ? Link : "a";

            return (
              <li key={path}>
                <LinkComponent
                  href={path}
                  className="h-8 items-center justify-center text-sm font-medium px-3 py-2 inline-flex text-text-100 transition-opacity hover:opacity-70 duration-200"
                  onClick={(e) => {
                    if (path === "#") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  {title}
                </LinkComponent>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
