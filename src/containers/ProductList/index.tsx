import Product from "../../components/Product";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./ProductListStyled";

export type PropsProductList = { title: string; background: "gray" | "black" };
const ProductList = ({ title, background }: PropsProductList) => {
  return (
    <S.SectionProducts background={background}>
      <Container>
        <h2>{title}</h2>
        <S.List>
          <Product title="F1 25" category="Corrida"
            cover="https://placehold.co/225x250"
            plataform="PS5" infos={["10%", "R$ 189,90"]}
            description="Deixe sua marca no mundo do automobilismo no F1® 25, o jogo oficial do 2025 FIA Formula One World Championship™, que traz o modo Minha Equipe reformulado, o terceiro e emocionante capítulo de Ponto de Frenagem e muito mais." />
          <Product title="F1 25" category="Corrida"
            cover="https://placehold.co/225x250"
            plataform="PS5" infos={["10%", "R$ 189,90"]}
            description="Deixe sua marca no mundo do automobilismo no F1® 25, o jogo oficial do 2025 FIA Formula One World Championship™, que traz o modo Minha Equipe reformulado, o terceiro e emocionante capítulo de Ponto de Frenagem e muito mais." />
          <Product title="F1 25" category="Corrida"
            cover="https://placehold.co/225x250"
            plataform="PS5" infos={["10%", "R$ 189,90"]}
            description="Deixe sua marca no mundo do automobilismo no F1® 25, o jogo oficial do 2025 FIA Formula One World Championship™, que traz o modo Minha Equipe reformulado, o terceiro e emocionante capítulo de Ponto de Frenagem e muito mais." />
          <Product title="F1 25" category="Corrida"
            cover="https://placehold.co/225x250"
            plataform="PS5" infos={["10%", "R$ 189,90"]}
            description="Deixe sua marca no mundo do automobilismo no F1® 25, o jogo oficial do 2025 FIA Formula One World Championship™, que traz o modo Minha Equipe reformulado, o terceiro e emocionante capítulo de Ponto de Frenagem e muito mais." />
        </S.List>
      </Container>
    </S.SectionProducts>
  )
};

export default ProductList;
