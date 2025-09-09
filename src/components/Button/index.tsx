import * as S from "./ButtonStyled";
export type PropsButton = {
  type: "button" | "link" | "submit";
  variantbutton?: "primary" | "secondary";
  title: string;
  to?: string;
  children: string;
  onClick?: () => void;
};

const Button = ({ children, type, title, onClick, to, variantbutton }: PropsButton) => {
  if (type === "link") {
    return <S.ButtonLink to={to as string} type="link" title={title}>{children}</S.ButtonLink>
  };
  return <S.Button type={type} variantbutton={variantbutton} title={title} onClick={onClick}>{children}</S.Button>
};

export default Button;
