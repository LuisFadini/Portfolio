import { HorizontalSeparator } from "@/components/primitives/HorizontalSeparator";

export default function Sobre() {
  const textSections = [
    {
      title: "Resumo",
      id: "resumo",
      text: `Nasci em 2008, em Colatina, Espírito Santo. Desde cedo, sempre fui muito interessado nos estudos. Um dia, ganhei meu primeiro computador, um modelo antigo com monitor CRT — daqueles brancos que não me lembro bem dos detalhes. Mais tarde, ganhei um notebook, um Dell Inspiron 1525, já bem velho, mas funcional o suficiente para rodar o Windows 10, mesmo que com algumas travadas. Esse notebook me acompanhou durante o período de estudos em casa em 2020, durante a pandemia. No dia 23 de dezembro de 2020, ganhei um novo computador, que utilizo até hoje, com diversas melhorias que fiz sozinho. Em 2024, ingressei no IFES, onde atualmente estudo Informática para Internet (TIST).`,
    },
    {
      title: "Programação",
      id: "programacao",
      text: `Comecei a estudar programação por conta própria em agosto de 2021, motivado pela ideia de criar um bot para meu servidor do Discord, que eu usava com meus amigos. Queria algo que fosse além de um bot básico, algo que pudesse evoluir. No início, eu copiava e colava código que encontrava no YouTube e no StackOverflow, mas percebi que não ia muito longe dessa forma. Decidi então fazer um curso de EcmaScript, do canal Curso em Vídeo.
        <br />
        Em cerca de um mês, meu bot já estava cheio de funcionalidades, mas nunca o lancei, pois não sabia como configurar a hospedagem de um banco de dados, do bot e do dashboard. Além disso, eu nem sabia como comprar um domínio. O projeto acabou ficando parado por um tempo, mas em 2024 voltei a programar bots, desenvolvendo um sistema que combinava comandos por prefixo e comandos de slash.
        <br />
        Todo esse conhecimento prévio me ajudou bastante na escolha do curso de Informática para Internet e tem facilitado muito o aprendizado, já que usamos JavaScript para programação web.`,
    },
    {
      title: "Homelab",
      id: "homelab",
      text: `Em 27 de dezembro de 2023, ganhei uma impressora 3D, o que considero o ponto de partida do meu homelab. Atualmente, ele é composto por um SBC rodando Armbian, configurado com Mainsail, Klipper, Spoolman e NGINX Proxy Manager, todos dedicados ao gerenciamento da impressora 3D. Pretendo expandir o homelab adquirindo hardware para montar um servidor que rodará pfSense e oferecerá outros serviços de rede.`,
    },
  ];

  return (
    <main>
      <h1 className="text-4xl font-bold text-center mt-2">Sobre mim</h1>
      {textSections.map(({ title, text, id }) => {
        return (
          <section
            className="flex flex-col items-center p-4 rounded-lg mx-2 md:w-9/12 md:mx-auto mt-2 text-base text-justify"
            key={id}
            id={id}
          >
            <HorizontalSeparator className="w-9/12 h-1 rounded-full mx-auto my-2" />
            <h2 className="text-center text-2xl font-bold">{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
          </section>
        );
      })}
    </main>
  );
}
