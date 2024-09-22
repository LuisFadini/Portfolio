import Image from "next/image";
import { BorderedContainer } from "./primitives/BorderedContainer";

export function Projects() {
  const projects = [
    {
      imageSrc: "https://picsum.photos/300/150",
      imageAlt: "Uma impressora 3D modelo Ender 3, com modificações",
      title: "Impressão 3D",
      description:
        "Uso uma impressora 3D da Creality, modelo Ender 3, versão comum e que foi muito popular em 2018, nela produzo alguns projetos e miniaturas",
    },
    {
      imageSrc: "https://picsum.photos/300/150",
      imageAlt:
        "Placas de circuito impresso, Arduino, ESP e Raspberry PI Pico W",
      title: "Eletrônica",
      description:
        "Fiz alguns projetos com placas de Arduino, ESP e Raspberry PI Pico W, um deles foi uma controladora de leds para o meu computador com ESP e WLED",
    },
    {
      imageSrc: "https://picsum.photos/300/150",
      imageAlt: "Um simples site de links",
      title: "Desenvolvimento",
      description:
        "Fiz alguns sites e sistemas backend além de alguns bots para a plataforma Discord, maioria desses projetos foram para aprender novas tecnologias.",
    },
  ];

  return (
    <section className="flex flex-col gap-8 mb-10" id="projetos">
      <h1 className="text-center text-4xl font-bold">Projetos</h1>
      <div className="flex flex-col md:flex-row gap-3 md:justify-center md:w-11/12 md:mx-auto max-w-full items-center md:items-stretch">
        {projects.map(({ imageSrc, imageAlt, title, description }) => {
          return (
            <BorderedContainer
              className="p-0 overflow-hidden flex flex-col mx-2 w-2/3 md:w-1/4 flex-1"
              key={title}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={300}
                height={150}
                className="w-full object-cover"
              />
              <h2 className="text-xl md:text-2xl text-center my-2 font-bold">
                {title}
              </h2>
              <p className="mx-4 mb-2 leading-relaxed text-sm">{description}</p>
            </BorderedContainer>
          );
        })}
      </div>
    </section>
  );
}
