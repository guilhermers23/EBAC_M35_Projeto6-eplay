; import Tag from "../Tag";
import * as S from "./ProductStyled";

const Product = () => {
  return (
    <S.Card>
      <img src="https://placehold.co/222x250" alt="Game" />
      <S.Title>Game</S.Title>
      <Tag>Categoria</Tag>
      <Tag>PS4/PS5</Tag>
      <S.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam optio maiores accusantium ab officia ipsa non distinctio doloremque voluptatum porro reiciendis commodi, placeat accusamus amet nulla corporis. Veniam, minima molestiae.
      </S.Description>
    </S.Card>
  )
};

export default Product;
