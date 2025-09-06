import { textLimit } from "../../utils";
import Tag from "../Tag";
import * as S from "./ProductStyled";

type Props = {
  title: string;
  category: string;
  plataform: string;
  description: string;
  infos: string[];
  cover: string;
  id: number;
};

const Product = ({ id, title, cover, category, plataform, infos, description }: Props) => {

  return (
    <S.Card to={`/product/${id}`}>
      <img src={cover} alt={title} />
      <S.Infos>
        {infos.map(info => <Tag key={info}>{info}</Tag>)}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{plataform}</Tag>
      <S.Description>{textLimit(description)}</S.Description>
    </S.Card>
  )
};

export default Product;
