import Tag from "../../Tag";
import foto from "../../../assets/imgs/resident.png";
import *  as S from "../CartStyled";

const ItemCart = () => {
  return (
    <S.CartItem>
      <img src={foto} alt="" />
      <div>
        <h3>Nome Jogo</h3>
        <Tag>PS5</Tag>
        <Tag>Corrida</Tag>
        <span>R$ 190,99</span>
      </div>
      <button type="button" />
    </S.CartItem>
  )
};

export default ItemCart;
