import Link from "next/link";
import { Button } from "./Button";
import Image from "next/image";
import * as Avatar from "@radix-ui/react-avatar";

export function Hero() {
  return (
    <section className="relative md:mt-40 flex flex-col md:flex-row-reverse md:items-center justify-between items-center px-6 py-12 transition duration-300 ease-in-out animate-slide-up-fade backdrop-blur-lg bg-opacity-70 hero-slide-up">
      <Avatar.Root className="aspect-square inline-flex items-center justify-center select-none h-44 w-44 md:h-56 md:w-56 lg:h-72 lg:w-72 rounded-full shadow-md border-2 border-primary-500">
        <Avatar.AvatarImage
          asChild
          src="/foto.png"
          className="w-full h-full rounded-full object-cover"
        >
          <Image
            src={"/foto.png"}
            alt="Foto do Luís Otávio"
            width={300}
            height={300}
          />
        </Avatar.AvatarImage>
        <Avatar.AvatarFallback className="w-full h-full flex items-center justify-center bg-accent-500 text-text-200 text-2xl md:text-4xl font-semibold leading-none rounded-full">
          Luís Otávio
        </Avatar.AvatarFallback>
      </Avatar.Root>
      <div className="flex flex-col mx-4 mt-6 md:mt-0 max-w-full md:max-w-lg">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-text-100 text-center md:text-left">
          Luís Otávio
        </h1>
        <p className="mt-4 text-base md:text-lg text-text-300 text-justify">
          Sou um estudante de TIST, Técnico em Informática para Internet
          integrado ao Ensino Médio no IFES-ST. Além disso, faço vários projetos
          à parte, com foco em aprender{" "}
          <span className="text-orange-500 font-bold">Rust</span> e programar em{" "}
          <span className="text-blue-500 font-bold">Typescript</span>.
        </p>
        <div className="mt-8">
          <div className="flex justify-evenly md:justify-normal items-center space-x-4">
            <Link href={"/projetos"}>
              <Button variant="outline">Projetos</Button>
            </Link>
            <Link href={"/sobre"}>
              <Button variant="primary">Sobre mim</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
