import { useParams } from "react-router";
import { useGetGameByIdQuery } from "../../services/api";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Gallery from "../../components/Gallery";

export const ProductView = () => {
  const { id } = useParams();
  const { data: game } = useGetGameByIdQuery(id!);

  if (!game) return <h3>Carregando...</h3>

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="gray">
        <p>
          {game.description}
        </p>
      </Section>
      <Section title="Mais detalhes" background="black">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          {game.release_date && <>
            <b>Lançamento:</b> {game.release_date} <br /> </>}
          <b>Desenvolvedora:</b> {game.details.developer}<br />
          <b>Distribuidora:</b> {game.details.publisher} <br />
          <b>Gêneros:</b> {game.details.category} <br />
          <b>Idiomas:</b>  {game.details.languages.join(', ')}
        </p>
      </Section>
      <Section title="Galeria" background="gray">
        <Gallery defaultCover={game.media.thumbnail}
          name={game.name}
          midias={game.media.gallery} />
      </Section>
    </>
  )
};
