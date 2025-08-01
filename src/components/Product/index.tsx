; import type GameModel from "../../models/Game";
import Tag from "../Tag";
import * as S from "./ProductStyled";

const Product = ({ title, cover, category, plataform, infos, description }: Omit<GameModel, "id">) => {
  return (
    <S.Card>
      <img src={cover} alt={title} />
      <S.Infos>
        {infos.map(info => <Tag key={info}>{info}</Tag>)}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{plataform}</Tag>
      <S.Description>{description}</S.Description>
    </S.Card>
  )
};

export default Product;
