import { Hero } from "@/components/Hero";
import { HorizontalSeparator } from "@/components/primitives/HorizontalSeparator";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <HorizontalSeparator className="w-9/12 h-1 rounded-full mx-auto my-2 md:my-20" />
      <Projects />
    </>
  );
}

