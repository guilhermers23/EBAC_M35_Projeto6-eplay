import { useParams } from "react-router";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Gallery from "../../components/Gallery";

export const ProductView = () => {
  const { id } = useParams();
  console.log(id)

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="gray">
        <p>
          Esta história é sua. Deixe sua marca no mundo do automobilismo no F1® 25, o videogame oficial do 2025 FIA Formula One World Championship™. Crie sua história e gerencie sua própria dinastia de F1® com o reformulado modo Minha Equipe, que conta com sua maior atualização desde 2020. Escolha o seu caminho no terceiro e emocionante capítulo de Ponto de Frenagem, com pontos de vista alternativos em momentos-chave da trama, e assuma o papel principal em seu próprio sucesso de bilheteria da F1®.
        </p>
      </Section>
      <Section title="Mais detalhes" background="black">
        <p>
          <b>Plataforma:</b> PS5 <br />
          <b>Lançamento:</b> 30/5/2025 <br />
          <b>Distribuidora:</b> Electronic Arts Inc <br />
          <b>Gêneros:</b> Direção/corrida <br />
          <b>Voz:</b> Alemão, Chinês, Espanhol, Francês (França), Holandês, Inglês, Italiano, Japonês, Português (Brasil) <br />
          <b>Idiomas da tela:</b> Alemão, Chinês (simplificado), Espanhol, Francês (França), Holandês, Inglês, Italiano, Japonês, Polonês, Português (Brasil)
        </p>
      </Section>
      <Section title="Galeria" background="gray">
        <Gallery defaultCover="https://drop-assets.ea.com/images/5qorOMBNsHZVGeJSCtmMw4/3df68b17472b2dc19662596399ce1870/F125.HamiltonExtraSS.4.1-16x9-_1_.jpg" name="Jogo" />
      </Section>
    </>
  )
};
