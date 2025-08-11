import * as S from "./ButtonStyled";
export type PropsButton = {
  type: "button" | "link";
  variantbutton?: "primary" | "secondary";
  title: string;
  to?: string;
  children: string;
  onClick?: () => void;
};

const Button = ({ children, type, title, onClick, to, variantbutton }: PropsButton) => {
  if (type === "button") {
    return <S.Button type="button" variantbutton={variantbutton} title={title} onClick={onClick}>{children}</S.Button>
  };
  return <S.ButtonLink to={to as string} title={title}>{children}</S.ButtonLink>
};

export default Button;
