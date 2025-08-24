import { useDispatch } from "react-redux";
import { removeItemCart } from "../../../store/reducers/cart";
import Tag from "../../Tag";
import *  as S from "../CartStyled";

type Props = {
  title: string;
  category: string;
  plataform: string;
  price: string;
  cover: string;
  id: number;
};

const ItemCart = ({ title, category, plataform, cover, price, id }: Props) => {
  const dispatch = useDispatch();

  const removeToCart = (gameId: number) => dispatch(removeItemCart(gameId));
  return (
    <S.CartItem>
      <img src={cover} alt={title} />
      <div>
        <h3>{title}</h3>
        <Tag>{category}</Tag>
        <Tag>{plataform}</Tag>
        <span>{price}</span>
      </div>
      <button type="button" onClick={() => removeToCart(id)} />
    </S.CartItem>
  )
};

export default ItemCart;
