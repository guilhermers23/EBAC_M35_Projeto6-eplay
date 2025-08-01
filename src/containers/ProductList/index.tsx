import Product from "../../components/Product";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./ProductListStyled";

type PropsProductList = { title: string; background: "gray" | "black" };
const ProductList = ({ title, background }: PropsProductList) => {
  return (
    <Container>
      <S.SectionProducts>
        <h2>{title}</h2>
        <S.List>
          <Product />
          <Product />
          <Product />
          <Product />
        </S.List>
      </S.SectionProducts>
    </Container>
  )
};

export default ProductList;
